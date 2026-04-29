import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tableau de bord LMB | Récupération de mot de passe",
  description: "Admin Accueille",
};

export default function MailMessage() {
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
        <div className="flex md:flex-row flex-col gap-4">
          <div className="w-1/4">
            <div className="p-2  rounded-2xl w-15 flex items-center justify-center h-15 bg-green-100">
              <Image
                src="/mail-icon.svg"
                alt="back"
                className="cursor-pointer"
                width={30}
                height={30}
              />
            </div>
          </div>
          <div className="flex flex-col  space-y-3 mb-4">
            <h3 className="text-2xl font-bold">Mot de passe oublié</h3>
            <span className="text-gray-400">
              Veuillez entrer l&apos;adresse mail utiliser pour créer votre
              compte, et vous recevrez par mail les instructions à suivre pour
              réinitialiser le mote de passe.
            </span>
            <div className="flex flex-col space-y-4">
              <span className="text-md font-semibold">
                Vous n&apos;avez pas reçu le mail? Renvoyer.
              </span>
              <span className="text-md font-semibold">
                Addresse email incorrecte? Changer l&apos;adresse.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
