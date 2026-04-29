"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

type Props = {
  type: "image" | "video";
  src: string;
  className?: string;
};

export default function MediaCard({ type, src, className }: Props) {
  const [play, setPlay] = useState(false);

  return (
    <div
      className={`relative w-full h-full rounded-xl overflow-hidden bg-black ${className}`}
    >
      {/* IMAGE */}
      {type === "image" && (
        <Image src={src} alt="media" width={300} height={300} />
      )}

      {/* VIDEO (preview mode) */}
      {type === "video" && !play && (
        <>
          <video
            src={src}
            className="object-cover"
            width={500}
            height={500}
            muted
          />

          {/* Play overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <button
              onClick={() => setPlay(true)}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:scale-110 transition"
            >
              <Play className="text-white ml-1" size={26} />
            </button>
          </div>
        </>
      )}

      {/* VIDEO (playing) */}
      {type === "video" && play && (
        <video
          src={src}
          controls
          autoPlay
          className="object-cover"
          width={500}
          height={500}
        />
      )}
    </div>
  );
}
