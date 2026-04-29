import { Metadata } from "next";
import ProductPageContent from "./(components)/product-page-content";

export const metadata: Metadata = {
  title: "Tableau de bord LMB | Tous les produits",
  description: "Admin Accueille",
};

export default function ProductPage() {
  return <ProductPageContent />;
}
