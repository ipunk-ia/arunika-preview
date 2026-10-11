import { clinicInfo } from "@/data/clinic";

const DEFAULT_MESSAGE =
  "Halo Klinik Gigi Arunika, saya ingin menanyakan jadwal praktik.";

export function whatsappUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
