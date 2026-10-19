// Wraps every page and is re-created on each page change, so each new page fades in
// gently instead of flashing ("page-in" in app/globals.css).
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
