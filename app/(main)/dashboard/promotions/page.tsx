import { Metadata } from "next";
import PromotionPageContent from "./(components)/promotion-page-content";

export const metadata: Metadata = {
  title: "Tableau de bord LMB | Tous les promotions",
  description: "Admin Accueille",
};

export default function PromotionPage() {
  return <PromotionPageContent />;
}
