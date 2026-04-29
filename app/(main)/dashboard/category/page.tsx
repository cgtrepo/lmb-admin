import { Metadata } from "next";
import CategoryPageContent from "./(components)/category-page-content";

export const metadata: Metadata = {
  title: "Tableau de bord LMB | Tous les categories",
  description: "Admin Accueille",
};

export default function CategoryPage() {
  return <CategoryPageContent />;
}
