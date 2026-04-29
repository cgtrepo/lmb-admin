import { Metadata } from "next";
import SecurityPageContent from "./(components)/security-page-content";

export const metadata: Metadata = {
  title: "Tableau de bord LMB | Sécurités",
  description: "Admin Accueille",
};

export default function SecurityPage() {
  return <SecurityPageContent />;
}
