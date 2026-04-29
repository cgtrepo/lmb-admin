"use client";
import Image from "next/image";
import { PageHeaderProps } from "../../(types)/dashboard-type";

export default function PreviousPageHeader({
  title,
  showBack,
  action,
}: PageHeaderProps) {
  return (
    <div className="bg-primary w-full text-white rounded-xl px-5 md:px-6 py-4 md:py-5 flex md:flex-row flex-col items-start md:items-center justify-between shadow-sm">
      <div className="flex items-center justify-center gap-1">
        {showBack && (
          <button
            className="cursor-pointer"
            onClick={() => window.history.back()}
          >
            <Image
              src="/breadcrumb-left-icone.svg"
              alt=""
              width={40}
              height={40}
            />
          </button>
        )}
        <h1 className="text-lg md:text-xl font-semibold">{title}</h1>
      </div>

      {action && <div>{action}</div>}
    </div>
  );
}
