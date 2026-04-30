import { Metadata } from "next";
import VideoPlayerLayout from "../(components)/videos-player-layout";
import { videosMedia } from "../(data)/videos-items-data";
import PageBreadcrumbHeader from "../../(components)/(ui)/page-breadcrumb-header";

export const metadata: Metadata = {
  title: "Tableau de bord LMB | Tutoriels",
  description: "Admin Accueille",
};

export default function HowToAddNewAdmin() {
  return (
    <div className="flex flex-col space-y-6">
      {/* HEADER */}

      <PageBreadcrumbHeader
        breadcrumbs={[
          { label: "Tutoriel", href: "/dashboard/tutorial" },
          { label: "Comment ajouter un administrateur?" },
        ]}
      />

      <div className="md:p-6 p-0 w-full space-y-4">
        <VideoPlayerLayout videos={videosMedia} />
      </div>
    </div>
  );
}
