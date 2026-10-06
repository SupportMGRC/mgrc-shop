"""
Turns the sample report PDFs into page images for the view-only report viewer.

The PDFs themselves are never published: they live in report-sources/ (ignored by Git)
and only the page images below go on the website.

  report-sources/<report>-<lang>.pdf   e.g. origene-en.pdf, littlegeneius-zh.pdf
        ->  public/images/reports/<report>/<lang>/01.webp, 02.webp, ...

Run it again whenever a sample report PDF changes:

  pip install pymupdf pillow
  python scripts/build-report-pages.py

Then update the page count for that report in lib/reports.ts if it changed.
"""

import io
import shutil
from pathlib import Path

import pymupdf
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SOURCES = ROOT / "report-sources"
OUTPUT = ROOT / "public" / "images" / "reports"

# Page width in pixels. Sharp enough to read on screen (with zoom),
# too small to print as a usable copy of the report.
WIDTH = 1100
QUALITY = 72  # WebP quality (0-100)


def convert(pdf_path: Path) -> int:
    report, lang = pdf_path.stem.rsplit("-", 1)
    out_dir = OUTPUT / report / lang
    if out_dir.exists():
        shutil.rmtree(out_dir)
    out_dir.mkdir(parents=True)

    doc = pymupdf.open(pdf_path)
    for i, page in enumerate(doc, start=1):
        zoom = WIDTH / page.rect.width
        pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
        img = Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB")
        img.save(out_dir / f"{i:02d}.webp", "WEBP", quality=QUALITY, method=6)
    pages = doc.page_count
    size_kb = sum(f.stat().st_size for f in out_dir.iterdir()) // 1024
    print(f"{pdf_path.name}: {pages} pages -> {out_dir.relative_to(ROOT)} ({size_kb} KB)")
    return pages


if __name__ == "__main__":
    # The preview PDFs keep bookmarks to pages cut from the full report; ignore those warnings.
    pymupdf.TOOLS.mupdf_display_errors(False)
    pdfs = sorted(SOURCES.glob("*.pdf"))
    if not pdfs:
        raise SystemExit(f"No PDFs found in {SOURCES}")
    for pdf in pdfs:
        convert(pdf)
