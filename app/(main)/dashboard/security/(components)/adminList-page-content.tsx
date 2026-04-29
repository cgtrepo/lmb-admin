"use client";

import { useState } from "react";
import PageBreadcrumbHeader from "../../(components)/(ui)/page-breadcrumb-header";
import Modal from "../../(components)/modal";
import AdminListTable from "./admin-list-table";

export default function AdminListPageContent() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col space-y-6">
        {/* HEADER */}

        <PageBreadcrumbHeader
          breadcrumbs={[
            { label: "Sécurité", href: "/dashboard/security" },
            { label: "Listes des Administrateurs" },
          ]}
          action={
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="bg-white text-primary cursor-pointer px-4 py-2 rounded-md text-md"
            >
              + Nouvelle admin
            </button>
          }
        />

        <AdminListTable />
      </div>

      <Modal
        name="Ajouter un admin"
        isOpen={open}
        onClose={() => setOpen(false)}
        width="600px"
        height="370px"
      >
        <div className="flex flex-col space-y-4">
          <div className="space-y-3 mb-4">
            <label className="text-sm font-semibold block mb-1">
              NOM DE L&apos;ADMIN
            </label>
            <input
              type="name"
              placeholder="Nom"
              className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-3 mb-4">
            <label className="text-sm font-semibold block mb-1">EMAIL</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-end items-end w-full mt-6">
          <button
            onClick={() => setOpen(false)}
            className="bg-primary text-white cursor-pointer px-4 py-2 rounded-md text-md"
          >
            Validez
          </button>
        </div>
      </Modal>
    </>
  );
}
