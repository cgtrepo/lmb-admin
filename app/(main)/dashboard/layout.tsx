"use client";

import { useEffect } from "react";
import { useSidebar } from "../(context)/sidebar-provider";
import LmbDashboardSidebar from "./(components)/lmb-dashboard-sidebar";
import { AnimatePresence, motion } from "framer-motion";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { openSide, setSidebarOpen } = useSidebar();

  useEffect(() => {
    if (openSide) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [openSide]);

  return (
    <div className="min-h-screen flex">
      {/* Desktop */}
      <div className="hidden md:flex px-6">
        <LmbDashboardSidebar />
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {openSide && (
          <motion.div
            className="md:hidden fixed inset-0 z-50 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Sidebar */}
            <motion.div
              className="w-20 flex items-center justify-center bg-white h-full shadow-xl"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              drag="x"
              dragConstraints={{ left: -300, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -100) {
                  setSidebarOpen(false); // swipe to close
                }
              }}
            >
              <LmbDashboardSidebar />
            </motion.div>

            {/* Overlay */}
            <motion.div
              className="flex-1 bg-black/40 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col">
        <main className="p-4 md:px-6 md:pb-6 md:pt-0">{children}</main>
      </div>
    </div>
  );
}
