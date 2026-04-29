"use client";

import { useState } from "react";
import RowActionsDropdown from "./row-actions-dropdown";
import { DataTableProps } from "../../(types)/tables-type";

export default function DataTable<T>({
  columns,
  data,
  gridTemplate,
  pageSize = 5,
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / pageSize);

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  const paginatedData = data.slice(start, end);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* HEADER */}
      <div
        className="hidden md:grid bg-[#f9fafb] px-6 py-6 text-sm text-gray-500 font-medium border-b border-gray-200"
        style={{ gridTemplateColumns: gridTemplate }}
      >
        {columns.map((col, i) => (
          <span key={i}>{col.label}</span>
        ))}
      </div>

      {/* ROWS */}
      {paginatedData.map((item, dataIndex) => (
        <div
          key={dataIndex}
          className="border-b md:border-gray-200 last:border-none px-6 py-4"
        >
          {/* DESKTOP SESSION */}
          <div
            className="hidden md:grid items-center"
            style={{ gridTemplateColumns: gridTemplate }}
          >
            {columns.map((col, columnsIndex) => (
              <div key={columnsIndex}>
                {col.actions ? (
                  <RowActionsDropdown item={item} actions={col.actions} />
                ) : col.render ? (
                  col.render(item)
                ) : (
                  (item[col.key] as React.ReactNode)
                )}
              </div>
            ))}
          </div>

          {/* MOBILE SESSION */}
          <div className="md:hidden space-y-3">
            {columns.map((col, columnsIndex) => (
              <div key={columnsIndex} className="flex justify-between text-sm">
                <span className="text-gray-500">
                  {col.mobileLabel || col.label}
                </span>
                <span>
                  {col.actions ? (
                    <RowActionsDropdown item={item} actions={col.actions} />
                  ) : col.render ? (
                    col.render(item)
                  ) : (
                    (item[col.key] as React.ReactNode)
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* PAGINATE SESSION */}
      <div className="flex items-center justify-center gap-2 py-4">
        {/* PREV */}
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="px-3 py-1 cursor-pointer text-gray-400 hover:text-black"
        >
          ‹
        </button>

        {/* PAGES */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 rounded-lg cursor-pointer flex items-center justify-center text-sm transition ${
              currentPage === page
                ? "bg-[#4E6E97] text-white shadow"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        {/* NEXT */}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          className="px-3 py-1 text-gray-400 cursor-pointer hover:text-black"
        >
          ›
        </button>
      </div>
    </div>
  );
}
