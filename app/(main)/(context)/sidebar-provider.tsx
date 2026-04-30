"use client";

import { createContext, useContext, useState } from "react";

type SidebarContextType = {
  openSide: boolean;
  setSidebarOpen: (value: boolean) => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [openSide, setSidebarOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ openSide, setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("useSidebar must be used inside SidebarProvider");
  return context;
}
