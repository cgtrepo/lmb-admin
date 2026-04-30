import type { Metadata } from "next";

import LmbHomeFooter from "./(components)/lmb-home-footer";
import LmbHomeNavbar from "./(components)/lmb-home-navbar";
import { SidebarProvider } from "./(context)/sidebar-provider";

export const metadata: Metadata = {
  title: "Tableau de bord LMB | Accueil",
  description: "Admin Accueille",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-[#e8edf7] flex flex-col">
        <LmbHomeNavbar />
        <main>{children}</main>
        <LmbHomeFooter />
      </div>
    </SidebarProvider>
  );
}
