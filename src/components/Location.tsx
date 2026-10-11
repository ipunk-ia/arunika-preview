import { clinicInfo } from "@/data/clinic";
import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section id="lokasi" className="section">
      <Reveal className="container-main grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl leading-tight font-extrabold text-heading sm:text-4xl">
            Lokasi
          </h2>
          <p className="mt-4 text-lg text-body">{clinicInfo.address}</p>
          <p className="mt-2 text-muted">{clinicInfo.landmark}</p>
          <a
            href={clinicInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline mt-8 w-full sm:w-auto"
          >
            Buka di Google Maps
          </a>
        </div>
        <div
          aria-hidden="true"
          className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-surface"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_48%,rgba(28,61,90,0.12)_49%,rgba(28,61,90,0.12)_51%,transparent_52%)] bg-[length:48px_48px]" />
          <p className="absolute bottom-4 left-4 text-sm text-muted">Peta (placeholder)</p>
        </div>
      </Reveal>
    </section>
  );
}
