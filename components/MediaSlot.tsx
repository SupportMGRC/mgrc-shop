import Image from "next/image";
import { FiImage } from "react-icons/fi";

// Shows a photo if `src` is set; otherwise a clean grey box saying which photo goes here.
// Give it a shape via className, e.g. "aspect-[4/3] rounded-2xl".
export default function MediaSlot({
  src,
  alt,
  label,
  className = "",
  dark = false,
  priority = false,
}: {
  src: string | null;
  alt: string;
  label: string;
  className?: string;
  dark?: boolean;
  priority?: boolean;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={alt} fill priority={priority} className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
    );
  }
  return (
    <div
      className={`flex items-center justify-center ${
        dark ? "bg-night-light text-white/40" : "bg-mist text-gray-400"
      } ${className}`}
    >
      <div className="p-4 text-center">
        <FiImage className="mx-auto text-2xl" aria-hidden />
        <p className="mt-2 text-xs font-medium">{label}</p>
      </div>
    </div>
  );
}
