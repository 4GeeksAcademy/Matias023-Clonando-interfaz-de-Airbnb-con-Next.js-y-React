type HostInfoProps = {
  hostName: string;
  hostYears: number;
};

export function HostInfo({ hostName, hostYears }: HostInfoProps) {
  return (
    <section className="space-y-1" aria-label="Informacion del anfitrion">
      <h2 className="text-lg font-semibold text-zinc-900">Anfitrion</h2>
      <p className="text-sm text-zinc-700">{hostName}</p>
      <p className="text-sm text-zinc-600">{hostYears} anos como anfitrion</p>
    </section>
  );
}
