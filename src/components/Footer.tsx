import { clinicInfo } from "@/data/clinic";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-main text-sm text-muted">
        <p className="font-semibold text-heading">{clinicInfo.name}</p>
        <p className="mt-1">{clinicInfo.address}</p>
        <p className="mt-6">Situs demo, data fiktif.</p>
      </div>
    </footer>
  );
}
