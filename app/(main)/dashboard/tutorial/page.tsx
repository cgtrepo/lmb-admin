import { Metadata } from "next";
import TutorialPageContent from "./(components)/tutorial-page-content";

export const metadata: Metadata = {
  title: "Tableau de bord LMB | Tutoriels",
  description: "Admin Accueille",
};

export default function TutorialPage() {
  return <TutorialPageContent />;
}
