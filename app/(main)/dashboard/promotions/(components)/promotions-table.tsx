"use client";

import DataTable from "../../(components)/(ui)/data-table";
import { Promotion, TableColumn } from "../../(types)/tables-type";

const promotionDataColumns: TableColumn<Promotion>[] = [
  {
    key: "product",
    label: "PRODUIT",
    render: (item) => (
      <div className="flex items-center gap-3">{item.product}</div>
    ),
  },
  {
    key: "reduction",
    label: "REDUCTION",
    render: (item) => (
      <div className="flex items-center gap-3">{item.reduction}%</div>
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
        {item.status === "active" ? "Actif" : "Désactivé"}
      </span>
    ),
  },
  {
    key: "action",
    label: "ACTION",
    actions: (item) => [
      {
        label: "Modifier",
        onClick: () => console.log("suspend", item),
        show: (i) => i.status === "active",
      },
      {
        label: "Activer",
        onClick: () => console.log("activate", item),
        show: (i) => i.status === "inactive",
      },
      {
        label: "Désactiver",
        onClick: () => console.log("delete", item),
        show: (i) => i.status === "active",
      },
      {
        label: "Suprimer",
        onClick: () => console.log("delete", item),
        show: (i) => i.status === "inactive",
      },
    ],
  },
];

const data: Promotion[] = Array.from({ length: 23 }, (_, i) => ({
  product: `Product name ${i + 1}`,
  reduction: i * 3 + 10,
  status: i % 2 === 0 ? "active" : "inactive",
}));

export default function PromotionsTable() {
  return (
    <DataTable
      columns={promotionDataColumns}
      data={data}
      gridTemplate="1fr 2fr 2fr 40px"
    />
  );
}
