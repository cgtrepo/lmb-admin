"use client";

import { useState } from "react";
import PreviousPageHeader from "../../(components)/(ui)/previous-page-header";
import ImageUpload from "../../(components)/image-uploader";
import Modal from "../../(components)/modal";
import CategoryTable from "./category-table";

export default function CategoryPageContent() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col space-y-6">
        {/* HEADER */}
        <PreviousPageHeader title="Catégories" showBack />

        <div className="flex items-center md:justify-end justify-start">
          <button
            onClick={() => setOpen(true)}
            className="bg-primary text-white cursor-pointer px-4 py-2 rounded-md text-md"
          >
            + Nouvelle catégorie
          </button>
        </div>

        <CategoryTable />
      </div>

      <Modal
        name="Catégorie"
        isOpen={open}
        onClose={() => setOpen(false)}
        width="600px"
        height="500px"
      >
        <div className="space-y-3 mb-4">
          <label className="text-sm font-semibold block mb-1">
            Nom de la catégorie
          </label>
          <input
            type="name"
            placeholder="Nom prénom"
            className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <ImageUpload />

        <div className="flex justify-end items-end w-full mt-6">
          <button
            onClick={() => setOpen(false)}
            className="bg-primary text-white cursor-pointer px-4 py-2 rounded-md text-md"
          >
            Enregistrer
          </button>
        </div>
      </Modal>
    </>
  );
}
