"use client";

import { useState } from "react";
import PreviousPageHeader from "../../(components)/(ui)/previous-page-header";
import Modal from "../../(components)/modal";
import ProductsTable from "./products-table";
import Image from "next/image";
import ImageMultiSelect from "../../(components)/image-multi-select";

export default function ProductPageContent() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <>
      <div className="flex flex-col space-y-6">
        {/* HEADER */}
        <PreviousPageHeader title="Produits" showBack />

        <div className="flex md:flex-row flex-col md:space-y-0 justify-start items-start md:items-center gap-2 md:gap-8 md:justify-end">
          <div className="relative">
            <input
              type="text"
              placeholder="Recherchez un produit"
              className="bg-white px-4 py-2 w-80 text-gray-700 border rounded-md placeholder-gray-500 
             focus:outline-none"
            />

            <div className="absolute inset-y-0 right-5 z-0 flex items-center pointer-events-none">
              <Image
                src="/search.svg"
                className=""
                alt=""
                width={30}
                height={30}
              />
            </div>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="bg-primary text-white cursor-pointer px-4 py-2 rounded-md text-md"
          >
            + Nouveau Produit
          </button>
        </div>

        <ProductsTable />
      </div>

      <Modal
        name="Produit"
        isOpen={open}
        onClose={() => setOpen(false)}
        width="600px"
        height="500px"
      >
        <ImageMultiSelect />

        <div className="flex flex-col mt-6">
          <div className="space-y-3 mb-4">
            <label className="text-sm font-semibold block mb-1">
              Nom du produit
            </label>
            <input
              type="name"
              placeholder="Nom"
              className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-3 mb-4">
            <label className="text-sm font-semibold block mb-1">
              Description
            </label>
            <textarea
              className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Description"
            ></textarea>
          </div>

          <div className="space-y-3 mb-4">
            <label className="text-sm font-semibold block mb-1">
              Catégorie
            </label>
            <select
              className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <option value="" disabled>
                catégorie
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="space-y-3 mb-4">
            <label className="text-sm font-semibold block mb-1">
              Prix Unitaire
            </label>
            <input
              type="number"
              placeholder="12.00"
              className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-3 mb-4">
            <label className="text-sm font-semibold block mb-1">
              Couleurs disponibles
            </label>
            <input
              type="name"
              placeholder="Blanc"
              className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-3 mb-4">
            <label className="text-sm font-semibold block mb-1">
              Prix Unitaire
            </label>
            <input
              type="number"
              placeholder="12.00"
              className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-3 mb-4">
            <label className="text-sm font-semibold block mb-1">Garantie</label>
            <select
              className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <option value="" disabled></option>
              <option value="option1">3 Mois</option>
              <option value="option2">6 mois</option>
              <option value="option2">1 ans</option>
              <option value="option2">2 ans</option>
            </select>
          </div>

          <div className="space-y-3 mb-4">
            <label className="text-sm font-semibold block mb-1">
              Quantité disponible
            </label>
            <input
              type="number"
              placeholder="12"
              className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-3 mb-4">
            <label className="text-sm font-semibold block mb-1">
              Service après vente
            </label>
            <textarea
              className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Service après vente"
            ></textarea>
          </div>

          <div className="space-y-3 mb-4">
            <label className="text-sm font-semibold block mb-1">
              Livraison
            </label>
            <select
              className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <option value="" disabled></option>
              <option value="option1">Gratuit</option>
              <option value="option2">Payant</option>
            </select>
          </div>
        </div>

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
