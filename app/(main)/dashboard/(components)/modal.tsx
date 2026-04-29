"use client";

import { useEffect } from "react";
import { ModalProps } from "../(types)/dashboard-type";

export default function Modal({
  name,
  isOpen,
  onClose,
  children,
  width = "600px",
  height = "500px",
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      <div className="relative flex items-center justify-center min-h-screen p-4">
        <div
          className="relative bg-white rounded-xl shadow-xl flex flex-col overflow-hidden"
          style={{
            width,
            height,
          }}
        >
          <div className="bg-primary text-white p-6 flex justify-between rounded-br-2xl rounded-bl-2xl items-center shrink-0">
            <h3 className="text-lg font-semibold">{name}</h3>
            <button
              onClick={onClose}
              className="hover:text-black cursor-pointer"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 bg-[#f5f6ff] overflow-y-auto p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
