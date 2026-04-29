import { Metadata } from "next";
import AdminListPageContent from "../(components)/adminList-page-content";

export const metadata: Metadata = {
  title: "Tableau de bord LMB | Sécurités",
  description: "Admin Accueille",
};

export default function AdminListPage() {
  return <AdminListPageContent />;
}
