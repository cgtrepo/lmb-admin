"use client";

import { useState } from "react";
import Image from "next/image";
import { VideosPropsTab, VideoItem } from "../../(types)/dashboard-type";

export default function VideoPlayerLayout({ videos }: VideosPropsTab) {
  const [currentVideo, setCurrentVideo] = useState<VideoItem>(videos[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
      {/* LEFT: MAIN VIDEO */}
      <div className="lg:col-span-2 bg-black rounded-xl overflow-hidden">
        <video
          key={currentVideo.url}
          controls
          className="w-full h-75 md:h-100 object-cover"
        >
          <source src={currentVideo.url} type="video/mp4" />
          Votre navigateur ne prend pas en charge la balise vidéo.
        </video>

        <div className="p-4 bg-white">
          <h2 className="font-semibold text-lg">{currentVideo.title}</h2>
        </div>
      </div>

      {/* RIGHT: VIDEO LIST */}
      <div className="flex justify-center flex-col gap-3">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => setCurrentVideo(video)}
            className={`flex gap-3 cursor-pointer rounded-lg p-2 transition ${
              currentVideo.id === video.id
                ? "bg-primary/10"
                : "hover:bg-gray-100"
            }`}
          >
            {/* THUMBNAIL */}
            <div className="w-28 h-20 bg-gray-200 rounded-md overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* INFO */}
            <div className="flex flex-col justify-between">
              <p className="text-sm font-medium line-clamp-2">{video.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
