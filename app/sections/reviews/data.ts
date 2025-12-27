import "server-only";
import { google } from "googleapis";

const SPREADSHEET_ID = process.env.REVIEWS_SHEET_ID!;
const REVIEWS_RANGE = "Reviews!A1:H";

export type Review = {
  id: string;
  hostName: string;
  createdAt: string;
  rating: number;
  comment: string;
  source?: string;
  pictureUrl?: string | null;
  featured?: boolean;
};
export type Rating = Record<string, string>;

export async function getReviews(): Promise<Review[]> {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: REVIEWS_RANGE,
  });

  const values = res.data.values ?? [];
  const [headers, ...rows] = values;
  if (!headers) return [];

  const data = rows.map((row) => {
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => (obj[String(h)] = String(row[i] ?? "")));
    return obj;
  });

  return data
    .map((r) => ({
      id: r.id,
      hostName: r.hostName,
      createdAt: r.createdAt,
      rating: Number(r.rating || 0),
      comment: r.comment,
      source: r.source || undefined,
      pictureUrl: r.pictureUrl ? r.pictureUrl : null,
      featured: r.featured?.toLowerCase() === "true",
    }))
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export async function getRatings(): Promise<Rating> {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: "Ratings!A1:D2",
  });

  const values = res.data.values ?? [];

  const [headers, row] = values;
  if (!headers || !row) return {};

  const obj: Record<string, string> = {};
  headers.forEach((h, i) => (obj[String(h)] = String(row[i] ?? "")));

  return obj;
}
