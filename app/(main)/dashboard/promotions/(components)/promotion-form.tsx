"use client";

import Image from "next/image";
import { useState } from "react";
import { productsMock } from "../../(data)/dashboard-data";
import { Product } from "../../(types)/dashboard-type";

export default function PromotionForm() {
  const [discountType, setDiscountType] = useState("Pourcentage");
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [showProducts, setShowProducts] = useState(false);
  const [search, setSearch] = useState("");

  const toggleProduct = (selectedProduct: Product) => {
    setSelectedProducts((prev) =>
      prev.includes(selectedProduct)
        ? prev.filter((p) => p.id !== selectedProduct.id)
        : [...prev, selectedProduct],
    );
  };

  const filteredProducts = productsMock.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-full">
      <div className="space-y-8">
        {/* TYPE PROMOTION */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Type de promotion <span className="text-red-500">*</span>
          </label>

          <div className="bg-gray-100 p-3 rounded-lg flex items-center gap-3">
            <Image
              src="/type-promotions.svg"
              alt=""
              width={20}
              height={20}
              className=""
            />
            <div>
              <p className="font-medium">Remise</p>
              <p className="text-xs text-gray-500">
                Activez une réduction directe pour booster vos ventes
                rapidement.
              </p>
            </div>
          </div>
        </div>

        {/* DISCOUNT TYPE + VALUE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* DISCOUNT TYPE */}
          <div className="relative">
            <label className="text-sm font-medium block mb-1">
              Type de réduction *
            </label>

            <div
              onClick={() => setShowTypeDropdown(!showTypeDropdown)}
              className="border rounded-lg px-4 py-2 cursor-pointer flex justify-between"
            >
              {discountType}
              <span>⌄</span>
            </div>

            {showTypeDropdown && (
              <div className="absolute left-0 mt-1 w-full bg-white shadow rounded-lg overflow-hidden z-20">
                {["Pourcentage", "Montant Fixe"].map((type) => (
                  <div
                    key={type}
                    onClick={() => {
                      setDiscountType(type);
                      setShowTypeDropdown(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {type}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* VALUE */}
          <div>
            <label className="text-sm font-medium block mb-1">
              Valeur de la réduction *
            </label>
            <input
              type="number"
              placeholder="Ex: 1000"
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>
        </div>

        {/* DATE */}
        <div>
          <label className="text-sm font-medium block mb-1">
            Période de validité
          </label>

          <div className="flex md:flex-row flex-col w-full gap-3">
            <div className="flex items-center w-full gap-2">
              <span>De</span>
              <input
                type="date"
                placeholder=""
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>

            <div className="flex items-center w-full gap-2">
              <span>A</span>
              <input
                type="date"
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>
          </div>
        </div>

        {/* SWITCH */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">
              Cette réduction est-elle applicable à tous les produits ?
            </p>
            <p className="text-xs text-gray-500">
              Activez pour appliquer à tout le catalogue.
            </p>
          </div>

          <input type="checkbox" className="toggle" />
        </div>

        {/* PRODUCT SELECT */}
        <div className="relative">
          <div
            onClick={() => setShowProducts(!showProducts)}
            className="border rounded-lg px-4 py-2 cursor-pointer flex justify-between"
          >
            {selectedProducts.length > 0 &&
              selectedProducts.map((p, i) => <div key={i}>{p.name}</div>)}

            {selectedProducts.length <= 0 && (
              <div>Sélectionnez les produits concernés</div>
            )}
            <span>⌄</span>
          </div>

          {showProducts && (
            <div className="absolute right-0 mt-2 w-full bg-white shadow-xl rounded-xl p-3 z-30">
              {/* SEARCH */}
              <input
                type="text"
                placeholder="Recherche"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 mb-3"
              />

              {/* LIST */}
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => toggleProduct(product)}
                    className={`flex justify-between items-center px-3 py-2 rounded-lg cursor-pointer ${
                      selectedProducts.includes(product)
                        ? "bg-primary text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {product.name}
                    <span>
                      {selectedProducts.includes(product) ? "✔" : "○"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="pt-4 flex justify-center">
          <button className="bg-primary text-white px-6 py-2 rounded-lg">
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}
