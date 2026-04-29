import { Mail } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tableau de bord LMB | Récupération de mot de passe",
  description: "Admin Accueille",
};

export default function PasswordRecovery() {
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

      <div className="max-w-2xl border-b-4 bg-white border-b-primary p-10 rounded-2xl shadow-xl mx-auto">
        <div className="flex flex-col space-y-3 mb-4">
          <h3 className="text-2xl font-bold">Mot de passe oublié</h3>
          <span className="text-gray-400">
            Veuillez entrer l&apos;adresse mail utiliser pour créer votre
            compte, et vous recevrez par mail les instructions à suivre pour
            réinitialiser le mote de passe.
          </span>
        </div>

        <div className="flex flex-col space-y-10">
          {/* EMAIL */}
          <div className="mb-4">
            <label className="text-sm font-medium block mb-2">
              Adresse e-mail
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Entrez votre adresse email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Mail
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-4 items-center w-full justify-center">
            <button
              type="submit"
              className="bg-primary flex items-center justify-center w-full cursor-pointer text-white px-4 py-2 rounded-xl"
            >
              Envoyer le mail
            </button>

            <span className="text-gray-400">
              Vous vous rappelez du mots de passe? Connectez vous.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
