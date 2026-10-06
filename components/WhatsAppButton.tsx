import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/lib/site";

// Floating WhatsApp button, bottom-right of every page
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi MGRC, I'd like to know more about your genetic tests.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-lg transition-transform hover:scale-110"
    >
      <FaWhatsapp />
    </a>
  );
}
