// Shows a one-colour icon (PNG with transparency) in the current text colour,
// so it can be gold, white or dark like a font icon. Icons live in public/images/icons/.
export default function MaskIcon({ src, className = "" }: { src: string; className?: string }) {
  const mask = `url(${src}) center / contain no-repeat`;
  return (
    <span
      aria-hidden
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{ WebkitMask: mask, mask }}
    />
  );
}
