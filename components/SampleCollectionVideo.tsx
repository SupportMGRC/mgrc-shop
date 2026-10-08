"use client";

import { useRef, useState } from "react";

// How It Works: one player with language tabs. The three videos are the same film
// with different burned-in subtitles. Only the chosen language loads.
// Files: public/videos/sample-collection-<lang>.mp4 (720p, compressed from Genomics' originals).
const languages = [
  { id: "en", label: "English" },
  { id: "ms", label: "Bahasa Melayu" },
  { id: "zh", label: "中文" },
] as const;

export default function SampleCollectionVideo() {
  const [lang, setLang] = useState<(typeof languages)[number]["id"]>("en");
  const videoRef = useRef<HTMLVideoElement>(null);

  function choose(id: typeof lang) {
    if (id === lang) return;
    const v = videoRef.current;
    const wasPlaying = v ? !v.paused : false;
    const time = v?.currentTime ?? 0;
    setLang(id);
    // Keep the viewer's place when switching language
    requestAnimationFrame(() => {
      const nv = videoRef.current;
      if (!nv) return;
      nv.load();
      if (time > 0) {
        nv.addEventListener(
          "loadedmetadata",
          () => {
            nv.currentTime = time;
            if (wasPlaying) nv.play().catch(() => {});
          },
          { once: true }
        );
      }
    });
  }

  return (
    <div>
      <div role="tablist" aria-label="Video language" className="inline-flex flex-wrap gap-1 rounded-full bg-night-light p-1">
        {languages.map((l) => (
          <button
            key={l.id}
            type="button"
            role="tab"
            aria-selected={lang === l.id}
            onClick={() => choose(l.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              lang === l.id ? "bg-gold text-ink" : "text-white/70 hover:text-white"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
      <div className="mt-5 aspect-video overflow-hidden rounded-3xl bg-black">
        <video
          ref={videoRef}
          key={lang}
          className="h-full w-full object-contain"
          src={`/videos/sample-collection-${lang}.mp4`}
          poster="/videos/sample-collection-poster.jpg"
          controls
          playsInline
          preload="none"
          aria-label="How to collect your sample"
        />
      </div>
      <p className="mt-3 text-sm text-white/55">Choose your language. Subtitles are shown in the video.</p>
    </div>
  );
}
