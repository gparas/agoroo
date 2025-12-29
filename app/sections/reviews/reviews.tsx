import dayjs from "dayjs";
import Image from "next/image";
import { Star } from "lucide-react";

import FadeIn, { FadeInStagger } from "@/components/fade-in";

import WreathLeft from "./assets/wreath-left.svg";
import WreathRight from "./assets/wreath-right.svg";

import Ratings from "./ratings";

import { getRatings, getReviews } from "./data";
import { calculateOverallRating } from "./utils";
import { airbnbLink } from "@/lib/constants";

const Reviews = async () => {
  const reviews = await getReviews();
  const rating = await getRatings();
  const ratingStats = calculateOverallRating(reviews);

  // Split reviews into 3 columns
  const columnCount = 3;
  const columns: (typeof reviews)[] = Array.from(
    { length: columnCount },
    () => [],
  );
  reviews.forEach((review, index) => {
    columns[index % columnCount].push(review);
  });

  return (
    <section id="reviews" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 xl:px-10">
        <FadeIn className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-base/7 text-gray-600">Reviews</h2>
          <div className="flex items-center justify-center gap-3">
            <Image src={WreathLeft} width={24} height={48} alt="" />
            <p className="text-4xl tracking-tight text-balance sm:text-5xl">
              <span>{ratingStats.overall.toFixed(1)}</span>
            </p>
            <Image src={WreathRight} width={24} height={48} alt="" />
          </div>
        </FadeIn>
        <Ratings rating={rating} reviews={reviews} />
        <FadeInStagger className="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
          {columns.map((column, columnIndex) => (
            <FadeIn key={columnIndex} className="flex flex-col gap-4">
              {column.map((review) => {
                const date = dayjs(review.createdAt).format("MMMM YYYY");
                return (
                  <div
                    key={review.id}
                    className="rounded-2xl border border-gray-300 p-6"
                  >
                    <div className="flex items-start">
                      <div className="flex flex-1 items-center gap-2">
                        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-gray-300">
                          <span className="text-sm font-medium text-gray-600">
                            {review.hostName.charAt(0).toUpperCase()}
                          </span>
                        </span>
                        <div className="flex flex-col">
                          <span className="leading-tight font-semibold">
                            {review.hostName}
                          </span>
                          <span className="text-sm text-gray-600">{date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>{review.rating.toFixed(1)}</span>
                        <Star
                          className="size-4"
                          fill="currentColor"
                          strokeWidth={0}
                        />
                      </div>
                    </div>
                    <p className="mt-2 line-clamp-4">{review.comment}</p>
                  </div>
                );
              })}
            </FadeIn>
          ))}
        </FadeInStagger>
        <div className="mt-12 text-center">
          <a
            href={`${airbnbLink}/reviews`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-gray-900 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-gray-800 sm:w-auto"
          >
            View all reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
