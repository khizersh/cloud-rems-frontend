"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Icon } from "@/components/Icons";
import type { TourScreen } from "@/lib/content";

export function ProductTourGallery({ screens }: { screens: TourScreen[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const current = screens[index];

  const openAt = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const step = (delta: number) =>
    setIndex((i) => (i + delta + screens.length) % screens.length);

  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {screens.map((s, i) => (
          <li
            key={s.slug}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-shadow hover:shadow-card-hover"
          >
            <button
              type="button"
              onClick={() => openAt(i)}
              className="block w-full text-left"
              aria-haspopup="dialog"
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={1280}
                height={800}
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full border-b border-slate-100"
              />
              <span className="block p-5">
                <span className="block text-base font-semibold text-navy-900">{s.title}</span>
                <span className="mt-1 block text-sm leading-6 text-slate-600">{s.description}</span>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
                  View larger
                  <Icon name="arrow-right" className="h-4 w-4" />
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={`${current.title} screenshot`}
        className="m-auto w-[min(96vw,72rem)] max-h-[94vh] overflow-auto rounded-2xl bg-white p-0 shadow-2xl"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-4 sm:p-5">
          <div>
            <h3 className="text-lg font-semibold text-navy-900">{current.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{current.description}</p>
          </div>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close"
            className="rounded-md p-2 text-slate-600 hover:bg-slate-100"
          >
            <Icon name="x" className="h-5 w-5" />
          </button>
        </div>
        <Image
          src={current.src}
          alt={current.alt}
          width={1280}
          height={800}
          sizes="(min-width: 1152px) 1152px, 96vw"
          className="h-auto w-full"
        />
        <div className="flex items-center justify-between border-t border-slate-200 p-3 sm:p-4">
          <button
            type="button"
            onClick={() => step(-1)}
            className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-navy-900 hover:bg-slate-100"
          >
            <Icon name="chevron-left" className="h-4 w-4" />
            Previous
          </button>
          <span className="text-sm text-slate-600" aria-live="polite">
            {index + 1} of {screens.length}
          </span>
          <button
            type="button"
            onClick={() => step(1)}
            className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-navy-900 hover:bg-slate-100"
          >
            Next
            <Icon name="chevron-right" className="h-4 w-4" />
          </button>
        </div>
      </dialog>
    </>
  );
}
