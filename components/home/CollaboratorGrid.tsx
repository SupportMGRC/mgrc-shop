"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { collaborators } from "@/lib/collaborations";

// On phones (below `sm`) only the first MOBILE_VISIBLE logos show until "Show all" is tapped.
// Tablet and desktop always show every logo. All logos stay in the HTML either way.
const MOBILE_VISIBLE = 9; // 3 rows of 3

export default function CollaboratorGrid() {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const hiddenCount = collaborators.length - MOBILE_VISIBLE;

  return (
    <>
      <ul id={listId} className="mt-14 flex flex-wrap justify-center gap-3 md:gap-4">
        {collaborators.map((c, i) => (
          <li
            key={c.name}
            className={`${
              !expanded && i >= MOBILE_VISIBLE ? "hidden sm:flex" : "flex"
            } h-20 w-[calc((100%-1.5rem)/3)] items-center justify-center rounded-2xl border border-gray-200 bg-white px-3 sm:w-[calc((100%-2.25rem)/4)] md:h-24 md:w-[calc((100%-4rem)/5)] lg:w-[calc((100%-7rem)/8)]`}
          >
            <Image
              src={c.src}
              alt={c.name}
              title={c.name}
              width={c.w * 2}
              height={c.h * 2}
              style={{ width: c.w, maxWidth: "100%", height: "auto", maxHeight: c.h }}
              className="object-contain"
            />
          </li>
        ))}
      </ul>

      {hiddenCount > 0 && (
        <div className="mt-6 text-center sm:hidden">
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={listId}
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            {expanded ? "Show fewer" : `Show all ${collaborators.length} collaborators`}
            <svg
              aria-hidden
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
