"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import Link from "next/link";
import { VideoCardProps } from "../../(types)/dashboard-type";

export default function VideoCard({ title, image, href }: VideoCardProps) {
  return (
    <Link
      href={href}
      className="relative w-full max-w-xs h-50 rounded-xl overflow-hidden cursor-pointer group"
    >
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 group-hover:bg-black/50 transition" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-2">
        <h2 className="text-sm font-semibold mb-2">{title}</h2>

        {/* Play icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md group-hover:scale-110 transition">
          <Play size={18} className="text-white ml-0.5" />
        </div>
      </div>
    </Link>
  );
}
