"use client";

import { useState } from "react";
import { Icon } from "@/components/Icons";
import type { VideoItem } from "@/lib/content";

function VideoCard({ video }: { video: VideoItem }) {
  const [playing, setPlaying] = useState(false);
  const { youtubeId } = video;

  return (
    <li className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      <div className="relative aspect-video bg-navy-900">
        {youtubeId && playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            disabled={!youtubeId}
            onClick={() => setPlaying(true)}
            aria-label={youtubeId ? `Play video: ${video.title}` : `${video.title} (video coming soon)`}
            className="on-dark absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(70%_90%_at_50%_0%,rgb(47_111_237/0.35),transparent)] text-white enabled:cursor-pointer enabled:hover:bg-white/5 disabled:cursor-default"
          >
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-full ${
                youtubeId ? "bg-aqua-400 text-navy-950" : "bg-white/15 text-white"
              }`}
            >
              <Icon name="play" className="h-6 w-6" />
            </span>
            {!youtubeId && (
              <span className="text-xs font-medium uppercase tracking-wider text-slate-300">
                Video coming soon
              </span>
            )}
          </button>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-navy-900">{video.title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{video.description}</p>
      </div>
    </li>
  );
}

export function VideoGallery({ videos }: { videos: VideoItem[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((v) => (
        <VideoCard key={v.title} video={v} />
      ))}
    </ul>
  );
}
