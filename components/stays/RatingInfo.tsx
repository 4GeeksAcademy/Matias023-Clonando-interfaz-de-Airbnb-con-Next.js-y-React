type RatingInfoProps = {
  rating: number;
  reviewsCount: number;
};

export function RatingInfo({ rating, reviewsCount }: RatingInfoProps) {
  return (
    <p className="text-sm text-zinc-600">
      {rating.toFixed(2)} ({reviewsCount} reseñas)
    </p>
  );
}
