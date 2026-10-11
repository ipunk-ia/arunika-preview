# SA-002 — Wireframe & struktur halaman
Klinik Gigi Arunika (fiktif), Semarang. Referensi token: SA-001.

## Urutan section (satu halaman, tanpa klik keluar)
1. **Hero + CTA WA** — identitas klinik, headline, 1 CTA WA primer solid, trust badge kecil di bawah CTA (contoh: jam praktik hari ini / status buka). Visible tanpa scroll di 375px dan 1440px.
2. **Jam Praktik** — tabel/list hari + jam, termasuk penanda hari ini kalau relevan. Jawab pertanyaan #1.
3. **Jadwal Dokter** — **bukan 3 kartu sejajar identik**. Pakai accordion atau list bertingkat per dokter (nama fiktif, hari praktik, foto placeholder opsional). Kalau jumlah dokter 2, layout boleh split asimetris (bukan grid sama rata). Jawab pertanyaan #2.
4. **Layanan** — bento asimetris (2–3 sel berisi gambar/tekstur, bukan grid kotak rata semua), deskripsi netral tanpa harga dan tanpa klaim hasil. Jawab pertanyaan #3.
5. **Lokasi** — alamat placeholder + deskripsi akses (contoh: dekat landmark fiktif), tanpa peta interaktif asli (cukup placeholder/link ke maps), metadata ditulis dalam kalimat biasa (bukan deretan titik tengah). Jawab pertanyaan #4.
6. **Cara Daftar** — langkah singkat (misal 3 langkah: hubungi WA, konfirmasi jadwal, datang sesuai jam). Jawab pertanyaan #5.
7. **CTA WA kedua** — ulang CTA booking, boleh dengan variasi copy, tetap 1 CTA primer.
8. **Footer** — info klinik ringkas + wajib baris kecil "Situs demo, data fiktif".

## Low-fi per breakpoint

### 375px (mobile, prioritas — target user cek dari HP di jalan)
- Hero: 1 kolom, headline maks 2 baris, CTA WA full-width terlihat tanpa scroll (pt-24 maks, min-h-[80vh] bukan h-screen).
- Jam Praktik: list vertikal per hari, bukan tabel lebar yang perlu scroll horizontal.
- Jadwal Dokter: accordion collapse per dokter, tap untuk expand hari praktik.
- Layanan: bento collapse jadi stack 1 kolom tapi tetap variasi tinggi/gambar (bukan rata kotak).
- Lokasi: alamat + 1 CTA "buka di Maps", bukan embed berat.
- Cara Daftar: list bernomor vertikal.
- CTA WA kedua: full-width di akhir konten.
- Tidak ada scroll horizontal pada 320px (cek dengan dummy content terpanjang, misal nama dokter/layanan terpanjang).

### 1440px (desktop)
- Hero: split asimetris — teks di satu sisi, visual (foto klinik placeholder) di sisi lain. CTA WA tetap terlihat tanpa scroll di viewport ini (bukan hero penuh h-screen yang mendorong CTA ke bawah fold).
- Jam Praktik: 2 kolom (list hari di satu sisi, catatan singkat di sisi lain) atau tetap 1 kolom lebar dengan max-w dibatasi supaya tidak melebar penuh.
- Jadwal Dokter: list bertingkat dengan lebih banyak ruang per baris, tetap bukan grid kartu 3 sejajar.
- Layanan: bento grid dengan 2–3 sel beraksen gambar/tekstur, ritme tidak seragam.
- Lokasi: split alamat + visual/map placeholder.
- Cara Daftar: 3 langkah horizontal dengan nomor besar sebagai aksen visual (bukan ikon generik).

## Larangan yang ditegaskan ulang (anti AI-slop, dari insiden demo klinik sebelumnya)
- Nol em dash / en dash di semua copy.
- Nol font Inter (pakai Geist dari SA-001).
- Jadwal dokter TIDAK boleh 3 kartu identik sejajar — wajib accordion/list bertingkat/split asimetris.
- Metadata (jam, lokasi, dll) tidak ditulis sebagai deretan titik tengah ("Senin • Selasa • Rabu").
- Eyebrow maksimal 1 per 3 section, dan harus nama topik (misal "Layanan Kami"), bukan penomoran ("02").
- Tidak ada cue "Scroll" atau strip dekoratif di bawah hero.

## Tidak masuk SA-002
Kode, komponen UI nyata, booking calendar, login, chat, multi bahasa, harga, testimoni, foto before/after.

## DoD
- [x] Urutan 8 section ditentukan, masing-masing jawab 1 dari 5 pertanyaan (kecuali hero & footer)
- [x] Jadwal dokter dipastikan bukan 3 kartu sejajar
- [x] Layout low-fi dijelaskan untuk 375px dan 1440px
- [x] Checklist AI-tells ditegaskan ulang sesuai insiden sebelumnya
