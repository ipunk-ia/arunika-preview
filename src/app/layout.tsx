import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Weight 400 body, 600 UI, 800 display. Maksimal 3 weight sesuai SA-001.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Klinik Gigi Arunika, Semarang (situs demo)",
  description:
    "Jam praktik, jadwal dokter, layanan, dan cara daftar Klinik Gigi Arunika. Situs demo, data fiktif.",
  // Header noindex tidak bisa di GitHub Pages, jadi lewat meta robots saja.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${jakarta.variable} antialiased`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
