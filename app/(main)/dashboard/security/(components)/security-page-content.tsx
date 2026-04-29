"use client";

import QuickActionsCard from "@/app/(main)/(components)/(ui)/quick-actions-card";
import PreviousPageHeader from "../../(components)/(ui)/previous-page-header";
import { securityActionData } from "../../(data)/dashboard-data";

export default function SecurityPageContent() {
  return (
    <div className="flex flex-col space-y-6">
      {/* HEADER */}

      <PreviousPageHeader title="Sécurité" showBack />

      <div className="max-x-xl mx-auto flex-col md:flex-row flex gap-4">
        {securityActionData.map((d, i) => (
          <QuickActionsCard
            key={i}
            link={d.link}
            image={d.image}
            label={d.label}
            description={d.description}
          ></QuickActionsCard>
        ))}
      </div>
    </div>
  );
}
