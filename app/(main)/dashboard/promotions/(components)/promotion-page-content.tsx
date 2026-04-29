"use client";

import { useState } from "react";
import PreviousPageHeader from "../../(components)/(ui)/previous-page-header";
import Modal from "../../(components)/modal";
import PromotionForm from "./promotion-form";
import PromotionsTable from "./promotions-table";
import Image from "next/image";

export default function PromotionPageContent() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col space-y-6">
        {/* HEADER */}
        <PreviousPageHeader
          title="Promotions"
          action={
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="bg-white text-primary cursor-pointer px-4 py-2 rounded-md text-md"
            >
              + Nouvelle Promotion
            </button>
          }
          showBack
        />

        <div className="flex justify-start items-center md:justify-end">
          <div className="relative">
            <input
              type="text"
              placeholder="Votre recherche ici"
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
        </div>

        <PromotionsTable />
      </div>

      <Modal
        name="Nouvelle promotion"
        isOpen={open}
        onClose={() => setOpen(false)}
        width="600px"
        height="500px"
      >
        <PromotionForm />
      </Modal>
    </>
  );
}
