import { FiPlay } from "react-icons/fi";
import { videoTestimonials } from "@/lib/testimonials";
import { products } from "@/lib/products";

// Phone-shaped video cards. Videos only download when someone presses play.
// Pass `product` to show only that product's videos (e.g. on its product page).
export default function VideoTestimonials({
  product,
  title = "Hear it from parents",
  intro = "Real families share what they learned from their child's LittleGENEius report.",
}: {
  product?: string;
  title?: string;
  intro?: string;
}) {
  const videos = videoTestimonials.filter((v) => !product || v.product === product);
  if (videos.length === 0) return null;

  const productName = (id: string) => products.find((p) => p.id === id)?.name ?? id;

  return (
    <section className="bg-mist py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gold-dark uppercase">
            <FiPlay aria-hidden /> Video testimonials
          </p>
          <h2 className="mt-3 font-display text-5xl font-semibold text-ink md:text-6xl">{title}</h2>
          <p className="mt-4 max-w-md text-lg text-gray-600">{intro}</p>
        </div>

        <ul className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 sm:justify-center lg:justify-end">
          {videos.map((v) => (
            <li key={v.src} className="w-[min(16rem,75vw)] shrink-0 snap-center">
              <div className="overflow-hidden rounded-[2rem] border-[6px] border-night bg-night shadow-xl">
                <video
                  className="aspect-[9/16] w-full bg-night object-cover"
                  src={v.src}
                  poster={v.poster}
                  controls
                  playsInline
                  preload="none"
                  aria-label={`${productName(v.product)} ${v.title.toLowerCase()}`}
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-ink">
                {productName(v.product)} · {v.title}
              </p>
              <p className="text-xs text-gray-500">{v.duration}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
