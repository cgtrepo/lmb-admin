"use client";

import DataTable from "../../(components)/(ui)/data-table";
import { Category, TableColumn } from "../../(types)/tables-type";
import Image from "next/image";

const categoryDataColumns: TableColumn<Category>[] = [
  {
    key: "name",
    label: "Nom",
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
    key: "products",
    label: "PRODUITS",
  },
  {
    key: "date",
    label: "DATE DE CRÉATION",
    render: () => (
      <div>
        <div>22/01/2025</div>
        <div className="text-xs text-gray-400">10:00</div>
      </div>
    ),
  },
  {
    key: "status",
    label: "STATUT",
    render: (item) => (
      <span
        className={`px-3 py-1 text-xs rounded-full ${
          item.status === "active"
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-500"
        }`}
      >
        {item.status === "active" ? "Actif" : "Inactif"}
      </span>
    ),
  },
  {
    key: "action",
    label: "ACTION",
    actions: (item) => [
      {
        label: "Suspendre",
        onClick: () => console.log("suspend", item),
        show: (i) => i.status === "active",
      },
      {
        label: "Activer",
        onClick: () => console.log("activate", item),
        show: (i) => i.status === "inactive",
      },
      {
        label: "Suprimer",
        onClick: () => console.log("delete", item),
        show: (i) => i.status === "inactive",
      },
    ],
  },
];

const data: Category[] = Array.from({ length: 23 }, (_, i) => ({
  name: `Category ${i + 1}`,
  products: i * 3 + 10,
  date: "22/01/2025",
  status: i % 2 === 0 ? "active" : "inactive",
  image: "/default-avatar.svg",
}));

export default function CategoryTable() {
  return (
    <DataTable
      columns={categoryDataColumns}
      data={data}
      gridTemplate="2fr 1fr 2fr 1fr 40px"
    />
  );
}
