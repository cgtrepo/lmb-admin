"use client";

import { MoreVertical } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type ActionProps<T> = {
  item: T;
  actions: (item: T) => {
    label: string;
    onClick: (item: T) => void;
    show?: (item: T) => boolean;
  }[];
};

export default function RowActionsDropdown<T>({
  item,
  actions,
}: ActionProps<T>) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const visibleActions = actions(item).filter(
    (option) => !option.show || option.show(item),
  );

  return (
    <div className="relative" ref={ref}>
      {/* BUTTON */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 rounded-md hover:bg-gray-100"
      >
        {/* MoreDots icon */}
        <MoreVertical size={18} className="cursor-pointer" />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 overflow-hidden bg-white rounded-lg shadow-md z-50">
          {visibleActions.map((action, i) => (
            <button
              key={i}
              onClick={() => {
                action.onClick(item);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm cursor-pointer hover:text-white hover:bg-primary"
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
