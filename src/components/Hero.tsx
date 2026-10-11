import { clinicInfo } from "@/data/clinic";
import { WhatsAppButton } from "./WhatsAppButton";

// Tanpa Reveal: hero adalah elemen LCP dan tidak boleh fade.
export function Hero() {
  return (
    <section className="container-main grid min-h-[80svh] items-center gap-10 pt-16 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <div>
        <p className="font-semibold text-muted">
          {clinicInfo.name}, {clinicInfo.city}
        </p>
        <h1 className="mt-4 max-w-xl text-4xl leading-[0.95] font-extrabold tracking-tight text-heading sm:text-6xl">
          Periksa gigi tanpa ribet, daftar lewat WhatsApp.
        </h1>
        <p className="mt-6 max-w-md text-lg leading-8 text-muted">
          Cek jam praktik dan jadwal dokter di sini, lalu kirim satu pesan untuk
          atur kunjungan.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <WhatsAppButton />
          <p className="text-sm text-muted">Senin sampai Jumat 09.00 sampai 20.00</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-surface lg:aspect-[4/5]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(28,61,90,0.14),transparent_60%)]" />
        <p className="absolute bottom-4 left-4 text-sm text-muted">
          Foto klinik (placeholder)
        </p>
      </div>
    </section>
  );
}
