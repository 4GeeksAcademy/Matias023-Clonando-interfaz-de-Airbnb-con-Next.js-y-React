import Link from "next/link";
import { footerLinksMock, featuredStaysMock } from "@/data/mocks";
import { MainFooter, MainHeader, RatingInfo } from "@/components";
import { BookingPanel } from "@/components/rooms/BookingPanel";
import { HostInfo } from "@/components/rooms/HostInfo";
import { RoomAmenities } from "@/components/rooms/RoomAmenities";
import { RoomGallery } from "@/components/rooms/RoomGallery";

type RoomDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
  const { id } = await params;
  const room = featuredStaysMock.find((stay) => stay.id === id);

  if (!room) {
    return (
      <main className="min-h-screen bg-zinc-50 text-zinc-900">
        <MainHeader />
        <section className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-10 text-center md:px-6">
          <h1 className="text-2xl font-semibold tracking-tight">Alojamiento no encontrado</h1>
          <p className="text-sm text-zinc-600">
            El alojamiento solicitado no existe o fue removido.
          </p>
          <div>
            <Link
              href="/catalog"
              className="inline-flex rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
            >
              Ir al catalogo
            </Link>
          </div>
        </section>
        <MainFooter links={footerLinksMock} />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <MainHeader />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 md:gap-8 md:px-6 md:py-8">
        <section className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{room.title}</h1>
          <p className="text-sm text-zinc-600">{room.location}</p>
          <RatingInfo rating={room.rating} reviewsCount={room.reviewsCount} />
        </section>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[2fr_1fr] md:items-start">
          <section className="space-y-6">
            <RoomGallery title={room.title} images={room.images} />

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-zinc-900">Descripcion</h2>
              <p className="text-sm leading-6 text-zinc-700">{room.description}</p>
            </section>

            <HostInfo hostName={room.hostName} hostYears={room.hostYears} />
            <RoomAmenities amenities={room.amenities} />
          </section>

          <BookingPanel
            roomId={room.id}
            maxGuests={room.maxGuests}
            pricePerNight={room.pricePerNight}
            currency={room.currency}
          />
        </div>
      </div>
      <MainFooter links={footerLinksMock} />
    </main>
  );
}
