type PriceInfoProps = {
  pricePerNight: number;
  currency: string;
};

export function PriceInfo({ pricePerNight, currency }: PriceInfoProps) {
  return (
    <p className="text-sm font-semibold text-zinc-900">
      {currency} {pricePerNight} por noche
    </p>
  );
}
