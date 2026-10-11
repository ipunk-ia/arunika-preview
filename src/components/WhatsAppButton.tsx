import { cn } from "@/lib/cn";
import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppButton({
  label = "Chat WhatsApp untuk daftar",
  message,
  className,
}: {
  label?: string;
  message?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("btn-primary w-full sm:w-auto", className)}
    >
      {label}
    </a>
  );
}
