import { clinicInfo } from "@/data/clinic";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

export function FinalCta() {
  return (
    <section className="section">
      <Reveal className="container-main text-center">
        <h2 className="mx-auto max-w-xl text-3xl leading-tight font-extrabold text-heading sm:text-4xl">
          Siap atur jadwal kunjungan?
        </h2>
        <p className="mt-4 text-muted">Admin membalas lewat {clinicInfo.whatsappDisplay}.</p>
        <WhatsAppButton label="Kirim pesan ke admin" className="mt-8" />
      </Reveal>
    </section>
  );
}
