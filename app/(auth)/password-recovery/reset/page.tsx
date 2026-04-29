import { Metadata } from "next";
import ResetPageContent from "../../(components)/reset-page-content";

export const metadata: Metadata = {
  title: "Tableau de bord LMB | Récupération de mot de passe",
  description: "Admin Accueille",
};

export default function Reset() {
  return <ResetPageContent />;
}
