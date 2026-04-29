// lmb-dashboard-sidebar.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { menu, userConnected } from "../(data)/dashboard-data";

export default function LmbDashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="border flex flex-col items-center border-gray-300 shadow-sm rounded-2xl h-min w-13">
      <div className="flex flex-col items-center justify-center w-full space-y-5 mb-5">
        {menu.map((item, i) => {
          const active = pathname.startsWith(item.path);
          return (
            <Link
              key={i}
              href={item.href}
              className={`transition-all duration-300 px-2.5 flex items-center justify-center  cursor-pointer py-2 w-full ${active ? "bg-gray-300 border-r-4 border-primary" : "hover:bg-gray-300"}`}
            >
              <div>
                <Image
                  src={item.icon}
                  alt=""
                  width={30}
                  height={30}
                  className=""
                />
              </div>
            </Link>
          );
        })}
      </div>
      <div className="relative bg-primary w-13 flex items-center justify-center rounded-xl py-5 px-2">
        <Image
          src={userConnected.avatar}
          alt=""
          width={30}
          height={30}
          className=""
        />

        <div className="absolute top-4 flex items-center justify-center bg-[#00b7ff] w-2 h-2 right-4 rounded-full">
          {userConnected.isVerified && (
            <Image
              src="/verified-profile-icone.svg"
              alt=""
              width={8}
              height={8}
              className=""
            />
          )}
        </div>
      </div>
    </aside>
  );
}
