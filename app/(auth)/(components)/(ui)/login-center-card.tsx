"use client";

import { Mail, Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function LoginCenterCard() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative z-10 flex w-180 max-w-full bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* LEFT FORM */}
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-2xl font-semibold mb-2">Connexion</h1>

        <p className="text-sm text-gray-500 mb-6">
          Pas encore inscris ?{" "}
          <span className="text-blue-600 cursor-pointer">Inscrivez-vous</span>
        </p>

        {/* EMAIL */}
        <div className="mb-4">
          <label className="text-sm font-medium block mb-1">
            Adresse e-mail
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder=""
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Mail
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div className="mb-4">
          <label className="text-sm font-medium block mb-1">
            Votre mots de passe
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Eye
              size={18}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            />
          </div>
        </div>

        {/* BUTTON */}
        <button className="w-full bg-primary text-white py-2 rounded-lg hover:opacity-90 transition">
          Se connecter
        </button>

        {/* FORGOT */}
        <Link href="/password-recovery" target="_blank">
          <p className="text-sm text-gray-500 mt-3 cursor-pointer">
            Mots de passe oublié?
          </p>
        </Link>
      </div>

      {/* RIGHT ILLUSTRATION */}
      <div className="hidden md:flex w-1/2 items-center justify-center rounded-bl-full rounded-tl-full bg-primary relative">
        <div className="w-100 h-80 rounded-bl-full rounded-tl-full bg-primary flex items-center justify-center">
          <Image
            src="/images/login-image.webp" // add illustration
            alt="illustration"
            width={260}
            height={260}
          />
        </div>
      </div>
    </div>
  );
}
