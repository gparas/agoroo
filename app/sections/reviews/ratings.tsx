import { Fragment } from "react/jsx-runtime";
import FadeIn, { FadeInStagger } from "@/components/fade-in";
import { Review, Rating } from "./data";

interface Props {
  rating: Rating;
  reviews: Review[];
}

const Ratings = ({ rating }: Props) => {
  const entries = Object.entries(rating);
  return (
    <FadeInStagger
      className="mx-auto mb-20 grid grid-cols-[1fr_1px_1fr] gap-y-6 md:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr]"
      style={{ maxWidth: 640 }}
    >
      {entries.map(([label, value], statIdx) => {
        return (
          <Fragment key={statIdx}>
            <FadeIn className="flex flex-col items-center justify-center">
              <span className="text-2xl font-medium tracking-tight text-zinc-900">
                {Number(value).toFixed(1)}
              </span>
              <span className="text-sm text-zinc-600">{label}</span>
            </FadeIn>
            {statIdx < entries.length - 1 && (
              <div
                className={`h-12 w-px bg-zinc-300 ${statIdx === 1 ? "hidden md:block" : ""}`}
              />
            )}
          </Fragment>
        );
      })}
    </FadeInStagger>
  );
};

export default Ratings;
