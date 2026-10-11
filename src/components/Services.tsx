import { services } from "@/data/clinic";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

// Bento asimetris 6 kolom: lebar sel sengaja tidak seragam.
const CELL_LAYOUT = [
  "md:col-span-4 bg-accent text-on-accent border-accent",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-4",
];

export function Services() {
  return (
    <section id="layanan" className="section bg-surface">
      <Reveal className="container-main">
        <h2 className="text-3xl leading-tight font-extrabold text-heading sm:text-4xl">
          Layanan
        </h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-6">
          {services.map((s, i) => {
            const isFeatured = i === 0;
            return (
              <li
                key={s.id}
                className={cn(
                  "card flex min-h-44 flex-col justify-end bg-base",
                  CELL_LAYOUT[i % CELL_LAYOUT.length],
                )}
              >
                <h3 className={cn("text-xl font-semibold", !isFeatured && "text-heading")}>
                  {s.name}
                </h3>
                <p className={cn("mt-2 leading-7", !isFeatured && "text-muted")}>
                  {s.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
