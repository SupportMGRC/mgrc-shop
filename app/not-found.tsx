import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-32 text-center">
      <p className="font-display text-7xl font-bold text-gold">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-ink">This page doesn&apos;t exist</h1>
      <p className="mt-4 text-gray-600">The link may be old or mistyped. Try one of these instead:</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-md bg-gold px-5 py-2.5 font-semibold text-ink">Go to homepage</Link>
        <Link href="/products/" className="rounded-md border border-gray-300 px-5 py-2.5 font-semibold text-ink">See our tests</Link>
      </div>
    </section>
  );
}
