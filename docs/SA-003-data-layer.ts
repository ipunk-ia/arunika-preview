// SA-003 — Data layer & types, Klinik Gigi Arunika (fiktif), Semarang
// Semua nama, alamat, nomor WA, dan link maps di bawah adalah PLACEHOLDER untuk demo.
// File ini akan dipindah ke src/data/clinic.ts saat scaffold project (SA-004).

export type DayOfWeek =
  | "Senin"
  | "Selasa"
  | "Rabu"
  | "Kamis"
  | "Jumat"
  | "Sabtu"
  | "Minggu";

export interface PracticeHour {
  day: DayOfWeek;
  isOpen: boolean;
  open?: string;
  close?: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  practiceDays: DayOfWeek[];
  note?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
}

export interface ClinicInfo {
  name: string;
  city: string;
  address: string;
  landmark: string;
  whatsappDisplay: string;
  whatsappNumber: string;
  mapsUrl: string;
}

export const clinicInfo: ClinicInfo = {
  name: "Klinik Gigi Arunika",
  city: "Semarang",
  address: "Jl. Cempaka Arum No. 12, Semarang (alamat demo/fiktif)",
  landmark: "Dekat Taman Arunika (landmark fiktif)",
  whatsappDisplay: "0812-0000-0000",
  whatsappNumber: "6281200000000",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Klinik+Gigi+Arunika+Semarang",
};

export const practiceHours: PracticeHour[] = [
  { day: "Senin", isOpen: true, open: "09:00", close: "20:00" },
  { day: "Selasa", isOpen: true, open: "09:00", close: "20:00" },
  { day: "Rabu", isOpen: true, open: "09:00", close: "20:00" },
  { day: "Kamis", isOpen: true, open: "09:00", close: "20:00" },
  { day: "Jumat", isOpen: true, open: "09:00", close: "20:00" },
  { day: "Sabtu", isOpen: true, open: "09:00", close: "17:00" },
  { day: "Minggu", isOpen: false },
];

export const doctors: Doctor[] = [
  {
    id: "drg-arya",
    name: "drg. Arya Pradipta",
    title: "Dokter Gigi Umum",
    practiceDays: ["Senin", "Rabu", "Jumat"],
  },
  {
    id: "drg-nadia",
    name: "drg. Nadia Putri Wulandari",
    title: "Dokter Gigi Umum",
    practiceDays: ["Selasa", "Kamis", "Sabtu"],
  },
];

export const services: Service[] = [
  {
    id: "periksa-konsultasi",
    name: "Pemeriksaan dan Konsultasi Gigi",
    description:
      "Pemeriksaan kondisi gigi dan mulut, konsultasi keluhan, serta saran tindakan lanjutan dari dokter gigi.",
  },
  {
    id: "scaling",
    name: "Pembersihan Karang Gigi",
    description:
      "Pembersihan plak dan karang gigi menggunakan alat scaling standar praktik dokter gigi.",
  },
  {
    id: "tambal",
    name: "Tambal Gigi",
    description:
      "Penambalan gigi berlubang menggunakan bahan tambal sesuai kondisi dan kebutuhan pasien.",
  },
  {
    id: "cabut",
    name: "Cabut Gigi",
    description:
      "Pencabutan gigi yang sudah tidak dapat dipertahankan, dilakukan setelah pemeriksaan dokter gigi.",
  },
];

export const bookingSteps = [
  "Hubungi admin lewat tombol WhatsApp di halaman ini.",
  "Admin konfirmasi jadwal dan dokter yang sesuai.",
  "Datang ke klinik sesuai hari dan jam yang disepakati.",
];
