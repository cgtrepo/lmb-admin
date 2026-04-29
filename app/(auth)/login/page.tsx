import Image from "next/image";
import LoginCenterCard from "../(components)/(ui)/login-center-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tableau de bord LMB | Connexion",
  description: "Admin Accueille",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center px-6 md:px-0 justify-center bg-gray-100 relative overflow-hidden">
      {/* RIGHT BLUE PANEL */}
      <div className="absolute right-0 top-0 h-full w-[38%] bg-primary" />
      {/* Logo */}
      <div className="absolute left-0 top-0 p-4">
        <Image
          src="/logo-lmb-couleur-bleue.webp"
          alt="logo"
          className="cursor-pointer"
          width={55}
          height={55}
        />
      </div>

      {/* MAIN CARD */}
      <LoginCenterCard />
    </div>
  );
}
