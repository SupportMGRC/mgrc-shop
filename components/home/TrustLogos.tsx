import Image from "next/image";
import { accreditations } from "@/lib/accreditations";
import { SHOW_PLACEHOLDERS } from "@/lib/media";

export default function TrustLogos() {
  const visible = accreditations.filter((a) => SHOW_PLACEHOLDERS || a.logo);
  if (visible.length === 0) return null; // hides the section until logos are added

  return (
    <section className="border-y border-gray-200 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-sm font-semibold text-gray-500">Accredited and trusted</p>
        <ul className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
          {visible.map((a) => (
            <li key={a.name} className="flex h-16 items-center justify-center">
              {a.logo ? (
                <Image
                  src={a.logo}
                  alt={a.name}
                  width={200}
                  height={80}
                  className="max-h-14 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center rounded-lg bg-mist text-xs text-gray-400">
                  Logo
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
