"use client";

import DataTable from "../../(components)/(ui)/data-table";
import Image from "next/image";
import { Product, TableColumn } from "../../(types)/tables-type";

const productDataColumns: TableColumn<Product>[] = [
  {
    key: "name",
    label: "NOM DU PRODUITS",
    render: (item) => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center  bg-amber-200">
          <Image
            src={item.image}
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <span className="font-medium text-gray-700">{item.name}</span>
      </div>
    ),
  },
  {
    key: "description",
    label: "DESCRIPTION",
    render: (item) => <div className="text-gray-400">{item.description}</div>,
  },
  {
    key: "availableQuantity",
    label: "QUANTITE DISPONIBLE",
    render: (item) => (
      <div className="flex items-center justify-between">
        {" "}
        {item.availableQuantity}
      </div>
    ),
  },
  {
    key: "price",
    label: "PRIX",
    render: (item) => (
      <div className="bg-green-500 rounded-2xl flex items-center justify-center px-2 text-white w-20">
        {" "}
        {item.price} FCFA
      </div>
    ),
  },
  {
    key: "action",
    label: "ACTION",
    actions: (item) => [
      {
        label: "Modifier",
        onClick: () => console.log("update", item),
      },
      {
        label: "Masquer le produit",
        onClick: () => console.log("activate", item),
      },
      {
        label: "Suprimer",
        onClick: () => console.log("delete", item),
      },
    ],
  },
];

const data: Product[] = Array.from({ length: 23 }, (_, i) => ({
  name: `Produit ${i + 1}`,
  description: "ddddddddddddddddddddd",
  availableQuantity: i * 3 + 10,
  price: i * 20 + 10,
  image: "/default-avatar.svg",
}));

export default function ProductsTable() {
  return (
    <DataTable
      columns={productDataColumns}
      data={data}
      gridTemplate="1fr 2fr 2fr 1fr 40px"
    />
  );
}
