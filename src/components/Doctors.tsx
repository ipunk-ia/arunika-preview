import { doctors } from "@/data/clinic";
import { Reveal } from "./Reveal";

// Native <details>: accordion tanpa JS, jadi nol INP dan nol hidrasi.
export function Doctors() {
  return (
    <section id="dokter" className="section">
      <Reveal className="container-main grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <h2 className="text-3xl leading-tight font-extrabold text-heading sm:text-4xl">
          Jadwal dokter
        </h2>
        <div className="divide-y divide-line border-y border-line">
          {doctors.map((d) => (
            <details key={d.id} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="block text-lg font-semibold text-heading">{d.name}</span>
                  <span className="block text-muted">{d.title}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-2xl text-accent transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-body">
                Praktik hari {d.practiceDays.join(", ")}.
                {d.note ? ` ${d.note}` : ""}
              </p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
