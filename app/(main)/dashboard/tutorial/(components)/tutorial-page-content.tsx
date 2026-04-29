"use client";

import PreviousPageHeader from "../../(components)/(ui)/previous-page-header";
import VideoCard from "../../(components)/(ui)/video-card";
import { tutorialActionData } from "../../(data)/dashboard-data";

export default function TutorialPageContent() {
  return (
    <div className="flex flex-col space-y-6">
      {/* HEADER */}

      <PreviousPageHeader title="Tutoriel" showBack />

      <div className="max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {tutorialActionData.map((tuto, i) => (
            <div key={i} className="flex items-center justify-center p-6">
              <VideoCard
                title={tuto.title}
                image={tuto.image}
                href={tuto.href}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
