"use client";

import Image from "next/image";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeaderProps = {
  breadcrumbs: BreadcrumbItem[];
  action?: React.ReactNode;
};

export default function PageBreadcrumbHeader({
  breadcrumbs,
  action,
}: PageHeaderProps) {
  return (
    <div className="bg-primary text-white rounded-xl px-5 md:px-6 py-4 md:py-5 flex flex-col space-y-3 md:space-y-0 md:flex-row items-center justify-between shadow-sm">
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <div key={index} className="flex items-center gap-2">
              {/* BACK BUTTON (only on first level deeper pages) */}
              {index === 0 && breadcrumbs.length > 1 && (
                <button onClick={() => window.history.back()}>
                  <Image
                    src="/breadcrumb-left-icone.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                </button>
              )}

              {/* LABEL */}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-lg md:text-xl font-semibold opacity-80 hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-lg md:text-xl font-semibold">
                  {item.label}
                </span>
              )}

              {/* SEPARATOR */}
              {!isLast && <span>/</span>}
            </div>
          );
        })}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
}
