# SA-001: Reading this as, 3 dial, arah visual
Klinik Gigi Arunika (fiktif), Semarang. Versi final, revisi 2026-10-11 (navy menggantikan emerald). File ini satu-satunya sumber token.

## Reading this as
Reading this as: landing page informasi untuk klinik gigi lokal, audiens calon pasien yang baru ketemu klinik lewat Google Maps dan sering cek dari HP sambil di jalan, bahasa tenang dan bisa dipercaya (bukan playful, bukan korporat kaku), condong ke keluarga desain editorial clinical warm (bukan medical sterile, bukan startup SaaS generik).

## Tiga dial
Default Soul: variance 7, motion 5, density 4. Disesuaikan untuk konteks ini:

- **DESIGN_VARIANCE: 6.** Halaman berisi 5 blok informasi (jam, jadwal dokter, layanan, lokasi, cara daftar) yang harus discan cepat. Variasi layout tetap ada (bento, split, list atau accordion, bukan kartu seragam), tapi clarity menang di atas eksperimen.
- **MOTION_INTENSITY: 4.** Halaman info utilitas, bukan showcase. Scroll reveal ringan dan micro hover saja. Elemen di atas fold dan elemen LCP tidak boleh fade.
- **VISUAL_DENSITY: 3.** Lima blok berurutan butuh ruang bernapas ekstra supaya tidak terasa seperti brosur padat.

## Warna
Base: **Stone** (warm neutral), lebih approachable daripada Zinc atau Slate.
Aksen: **Deep Navy #1C3D5A**. Alasan: kesan trust dan calm, margin kontras besar (11,26:1 untuk teks putih), dan tidak masuk larangan ungu, pink, atau cyan neon. Navy desaturasi, bukan medical blue terang.

| Token | Hex | Role |
|---|---|---|
| bg-base | #FAFAF9 (stone-50) | background utama |
| bg-card | #F5F5F4 (stone-100) | card, section alternate |
| border | #E7E5E4 (stone-200) | garis tipis, divider |
| text-muted | #57534E (stone-600) | subtitle, metadata, footer disclaimer |
| text-body | #292524 (stone-800) | body text |
| text-heading | #1C1917 (stone-900) | judul display |
| accent | #1C3D5A (navy custom) | CTA primer solid, link, ikon aktif |
| on-accent | #FFFFFF | teks di atas CTA primer |

## Kontras terhitung (WCAG relative luminance, output Python 2026-10-11)
Threshold Soul: body 4,5:1, CTA 4,5:1, teks besar 3:1.

| Pasangan | Rasio | Target | Hasil |
|---|---|---|---|
| text-body #292524 di bg-base #FAFAF9 | 14,52:1 | 4,5 | PASS |
| text-body #292524 di bg-card #F5F5F4 | 13,90:1 | 4,5 | PASS |
| text-heading #1C1917 di bg-base #FAFAF9 | 16,74:1 | 3 | PASS |
| text-muted #57534E di bg-base #FAFAF9 | 7,30:1 | 4,5 | PASS |
| text-muted #57534E di bg-card #F5F5F4 | 6,99:1 | 4,5 | PASS |
| on-accent #FFFFFF di accent #1C3D5A (CTA primer) | 11,26:1 | 4,5 | PASS |
| accent #1C3D5A di bg-base #FAFAF9 (link, CTA outline) | 10,78:1 | 4,5 | PASS |
| accent #1C3D5A di bg-card #F5F5F4 | 10,32:1 | 4,5 | PASS |

Footer disclaimer pakai text-muted stone-600, bukan stone-500 (stone-500 terlalu mepet ke batas 4,5:1).

## Tipografi
Satu font family: **Plus Jakarta Sans** via `next/font/google`, subset latin, weight 600 dan 800 saja (400 untuk body kalau Developer butuh, maksimal 3 weight). Alasan: masuk urutan pilihan Soul, karakter lokal dan hangat, weight 800 kuat untuk display dengan line-height 0,88 sampai 0,9.
Dilarang: Inter, Roboto, Open Sans, dan Geist bawaan scaffold (hapus dari `layout.tsx`).

## Radius
Satu skala: **rounded-xl (12px)** untuk button, card, input. Tidak dicampur pill atau sharp.

## Checklist DoD SA-001
- [x] Reading this as ditulis
- [x] 3 dial di-set dengan alasan
- [x] 1 aksen dan palet netral hangat ditentukan (hex)
- [x] 1 tipografi ditentukan (bukan Inter, Roboto, Open Sans)
- [x] Semua pasangan warna dihitung rasionya dengan angka
- [x] Nol em dash dan en dash di file ini
