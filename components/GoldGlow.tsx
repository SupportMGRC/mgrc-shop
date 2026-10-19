// Soft gold light slowly drifting in the background of dark sections (hero, page titles,
// Why Us card). Pure CSS (see "gold-glow" in app/globals.css): it only moves while on
// screen and stays still for visitors with "reduce motion" turned on.
// The parent needs `relative overflow-hidden`; put the content above it with `relative`.
export default function GoldGlow({ subtle = false }: { subtle?: boolean }) {
  return (
    <div data-loop className={`gold-glow pointer-events-none absolute inset-0 ${subtle ? "opacity-60" : ""}`} aria-hidden>
      <span className="gold-glow-a" />
      <span className="gold-glow-b" />
    </div>
  );
}
