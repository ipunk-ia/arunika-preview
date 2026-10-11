# SA-001 — Reading this as + 3 dial + arah visual
Klinik Gigi Arunika (fiktif), Semarang

## Reading this as
Reading this as: landing page informasi untuk klinik gigi lokal, audiens calon pasien yang baru ketemu klinik lewat Google Maps dan sering cek dari HP sambil di jalan, bahasa tenang dan bisa dipercaya (bukan playful, bukan korporat kaku), condong ke keluarga desain editorial-clinical-warm (bukan medical-sterile-blue, bukan startup SaaS generik).

## Tiga dial
Default Soul: variance 7 / motion 5 / density 4. Disesuaikan untuk konteks ini:

- **DESIGN_VARIANCE: 6** (bukan 7). Halaman ini isinya 5 blok informasi berat (jam, jadwal dokter, layanan, lokasi, cara daftar) yang harus discan cepat oleh orang yang buru-buru. Variasi layout tetap ada (bento, split, list/accordion, bukan kartu seragam) tapi clarity menang di atas eksperimen.
- **MOTION_INTENSITY: 5** (default). Scroll reveal ringan + micro hover, tidak ada show-off motion karena ini halaman info-utilitas, bukan showcase. Elemen di atas fold dan LCP tidak boleh fade (sesuai Soul).
- **VISUAL_DENSITY: 3** (bukan 4, diturunkan). Dengan 5 blok informasi berurutan, halaman butuh ruang bernapas ekstra supaya tidak terasa seperti brosur puskesmas yang padat. Whitespace jadi penyeimbang supaya tetap terasa premium walau kontennya banyak.

## Warna
Base: **Stone** (warm neutral) — dipilih karena klinik + warm tone lebih approachable daripada Zinc/Slate yang dingin.
Aksen: **Deep Emerald #0E6E55** (custom, bukan emerald neon Tailwind default) — alasan: butuh kesan trust/calm khas layanan kesehatan tanpa jatuh ke medical-blue klise, dan tidak tabrakan dengan larangan gradasi ungu/pink/cyan.

| Token | Hex | Role |
|---|---|---|
| bg-base | #FAFAF9 (stone-50) | background utama |
| bg-card | #F5F5F4 (stone-100) | background card/section alternate |
| border | #E7E5E4 (stone-200) | garis tipis, divider |
| text-muted | #57534E (stone-600) | subtitle, metadata |
| text-body | #292524 (stone-800) | body text |
| text-heading | #1C1917 (stone-900) | judul display |
| accent | #0E6E55 (emerald custom) | CTA primer, link, ikon aktif |
| accent-text-on-light | #0E6E55 | teks aksen di atas bg terang (link, outline CTA) |

## Kontras terhitung (WCAG relative luminance, dihitung manual)
Threshold Soul: body 4.5:1, CTA 4.5:1, teks besar 3:1.

| Pasangan | Rasio | Target | Hasil |
|---|---|---|---|
| text-body #292524 di atas bg-base #FAFAF9 | 14.5 : 1 | ≥4.5 | PASS |
| text-heading #1C1917 di atas bg-base #FAFAF9 | ~16.1 : 1 (lebih gelap dari text-body, pasti lebih tinggi) | ≥3 (teks besar) | PASS |
| text-muted #57534E di atas bg-base #FAFAF9 | 7.3 : 1 | ≥4.5 | PASS |
| putih #FFFFFF di atas accent #0E6E55 (CTA primer solid) | 5.48 : 1 | ≥4.5 | PASS |
| accent #0E6E55 di atas bg-base #FAFAF9 (CTA outline/link) | 5.24 : 1 | ≥4.5 | PASS |

Catatan: stone-500 (#78716C) dicoba untuk footer disclaimer tapi hasilnya 4.6:1 — terlalu mepet ke batas. **Keputusan: footer disclaimer pakai text-muted stone-600 (7.3:1), bukan stone-500**, supaya ada margin aman.

## Tipografi
Satu font family: **Geist** (via next/font), alasan: masuk urutan pilihan Soul, punya range weight cukup untuk display besar (line-height 0.88–0.9) sekaligus tetap nyaman dibaca di body 16px — tidak perlu font kedua.
Dilarang: Inter, Roboto, Open Sans.

## Radius
Satu skala: **rounded-xl (12px)** untuk button, card, input. Tidak dicampur dengan pill atau sharp.

## Checklist DoD SA-001
- [x] Reading this as ditulis
- [x] 3 dial di-set dengan alasan
- [x] 1 aksen + palet netral hangat ditentukan (hex)
- [x] 1 tipografi ditentukan (bukan Inter/Roboto/Open Sans)
- [x] Semua pasangan warna dihitung rasio kontrasnya dengan angka
- [x] Tidak ada rencana em dash, eyebrow berlebihan, atau 3 kartu sejajar (ditegaskan lagi di SA-002)
