"use client";

import Image from "next/image";
import { Eye } from "lucide-react";
import { useState } from "react";

export default function ResetPageContent() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative p-10 overflow-hidden">
      <div className="absolute left-0 top-0 p-4">
        <Image
          src="/black-arrow-left-icone.svg"
          alt="back"
          className="cursor-pointer"
          width={55}
          height={55}
        />
      </div>

      <div className="max-w-xl border-b-4 bg-white border-b-primary p-10 rounded-2xl shadow-xl mx-auto">
        <div className="flex flex-col space-y-3 mb-4">
          <h3 className="text-2xl font-bold">Créer un nouveau mots de passe</h3>
          <span className="text-gray-400">
            Veuillez entrer votre nouveau mots de passe
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl w-full">
          <label htmlFor="" className="mb-2">
            Nouveau mot de passe
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              name="newPassword"
              placeholder="Nouveau mot de passe"
              value={form.newPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Eye
              size={18}
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            />
          </div>

          <label htmlFor="" className="mb-4">
            Confirmer le mot de passe
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirmez le mot de passe"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Eye
              size={18}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
