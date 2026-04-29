import type { Metadata } from "next";

import LmbHomeFooter from "./(components)/lmb-home-footer";
import LmbHomeNavbar from "./(components)/lmb-home-navbar";

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
    <div className="min-h-screen bg-[#e8edf7] flex flex-col">
      <LmbHomeNavbar />
      <main className="">{children}</main>
      <LmbHomeFooter />
    </div>
  );
}
