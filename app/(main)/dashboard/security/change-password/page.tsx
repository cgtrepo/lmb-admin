import { Metadata } from "next";
import PageBreadcrumbHeader from "../../(components)/(ui)/page-breadcrumb-header";
import ResetPasswordForm from "@/app/(auth)/(components)/reset-password-form";

export const metadata: Metadata = {
  title: "Tableau de bord LMB | Sécurités",
  description: "Admin Accueille",
};

export default function ChangePasswordPage() {
  return (
    <div className="flex flex-col w-full space-y-6">
      {/* HEADER */}

      <PageBreadcrumbHeader
        breadcrumbs={[
          { label: "Sécurité", href: "/dashboard/security" },
          { label: "Changement de mot de passe" },
        ]}
      />

      <div className="max-w-2xl border-b-4 border-b-primary bg-white p-10 rounded-2xl shadow-2xl mx-auto">
        <div className="flex flex-col space-y-3 mb-4">
          <h3 className="text-2xl font-bold">Créer un nouveau mot de passe</h3>
          <span className="text-gray-400">
            Veuillez entrer votre nouveau mot de passe
          </span>
        </div>

        <ResetPasswordForm />
      </div>
    </div>
  );
}
