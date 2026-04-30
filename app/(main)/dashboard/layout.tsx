"use client";

import { useSidebar } from "../(context)/sidebar-provider";
import LmbDashboardSidebar from "./(components)/lmb-dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { openSide, setSidebarOpen } = useSidebar();

  return (
    <div className="min-h-screen flex">
      {/* Desktop */}
      <div className="hidden md:flex px-6">
        <LmbDashboardSidebar />
      </div>

      {/* Mobile */}
      <div
        className={`md:hidden fixed inset-0 z-50 flex ${
          openSide ? "pointer-events-auto" : "pointer-events-none hidden"
        }`}
      >
        {/* Sidebar */}
        <div
          className={` bg-white h-full w-20 flex items-center justify-center shadow-lg transform transition-transform duration-500 ease-in-out ${
            openSide ? "translate-x-0" : "-translate-x-full hidden"
          }`}
        >
          <LmbDashboardSidebar />
        </div>

        {/* Overlay */}
        <div
          className={`flex-1 bg-black/50 transition-opacity duration-500 ${
            openSide ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setSidebarOpen(false)}
        />
      </div>

      <div className="flex-1 flex flex-col">
        <main className="p-4 md:px-6 md:pb-6 md:pt-0">{children}</main>
      </div>
    </div>
  );
}
