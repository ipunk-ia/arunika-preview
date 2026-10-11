import { bookingSteps } from "@/data/clinic";
import { Reveal } from "./Reveal";

export function Steps() {
  return (
    <section id="daftar" className="section bg-surface">
      <Reveal className="container-main">
        <h2 className="text-3xl leading-tight font-extrabold text-heading sm:text-4xl">
          Cara daftar
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {bookingSteps.map((step, i) => (
            <li key={step}>
              <span aria-hidden="true" className="block text-7xl leading-none font-extrabold text-accent">
                {i + 1}
              </span>
              <p className="mt-4 text-body">{step}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
