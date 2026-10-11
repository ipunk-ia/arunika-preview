import { practiceHours } from "@/data/clinic";
import { Reveal } from "./Reveal";

export function Hours() {
  return (
    <section id="jam" className="section bg-surface">
      <Reveal className="container-main grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-3xl leading-tight font-extrabold text-heading sm:text-4xl">
            Jam praktik
          </h2>
          <p className="mt-4 max-w-sm text-muted">
            Jadwal bisa berubah di hari libur nasional. Konfirmasi lewat WhatsApp
            sebelum datang.
          </p>
        </div>
        <dl className="divide-y divide-line rounded-xl border border-line bg-base">
          {practiceHours.map((h) => (
            <div key={h.day} className="flex justify-between gap-4 px-5 py-4">
              <dt className="font-semibold text-heading">{h.day}</dt>
              <dd className="text-body">
                {h.isOpen ? `${h.open} sampai ${h.close}` : "Tutup"}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
