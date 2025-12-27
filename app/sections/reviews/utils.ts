import type { Review } from "./data";

export type RatingDistribution = {
  count: number;
  percentage: number;
};

export type OverallRating = {
  overall: number;
  totalReviews: number;
  distribution: Array<{
    stars: number;
    count: number;
    percentage: number;
  }>;
};

export function calculateOverallRating(reviews: Review[]): OverallRating {
  const totalReviews = reviews.length;

  // Handle empty reviews case
  if (totalReviews === 0) {
    return {
      overall: 0,
      totalReviews: 0,
      distribution: [
        { stars: 5, count: 0, percentage: 0 },
        { stars: 4, count: 0, percentage: 0 },
        { stars: 3, count: 0, percentage: 0 },
        { stars: 2, count: 0, percentage: 0 },
        { stars: 1, count: 0, percentage: 0 },
      ],
    };
  }

  // Calculate overall rating (average)
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const overall = totalRating / totalReviews;

  // Count distribution for each rating level
  const counts = {
    5: reviews.filter((r) => r.rating === 5).length,
    4: reviews.filter((r) => r.rating === 4).length,
    3: reviews.filter((r) => r.rating === 3).length,
    2: reviews.filter((r) => r.rating === 2).length,
    1: reviews.filter((r) => r.rating === 1).length,
  };

  // Create distribution array (5 stars down to 1 star)
  const distribution = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: counts[stars as keyof typeof counts],
    percentage: (counts[stars as keyof typeof counts] / totalReviews) * 100,
  }));

  return {
    overall,
    totalReviews,
    distribution,
  };
}
