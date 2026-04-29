"use client";

import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { users } from "../../(data)/dashboard-data";
import { User } from "../../(types)/dashboard-type";

export default function AdminListTable() {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleEdit = (user: User) => {
    console.log("Edit", user);
  };

  const handleDelete = (user: User) => {
    console.log("Delete", user);
  };

  return (
    <div className="w-full">
      {/* HEADER (hidden on mobile) */}
      <div className="hidden md:grid grid-cols-[2fr_2fr_2fr_2fr_40px] py-3 text-sm text-gray-500 font-medium">
        <p>NOM COMPLET ADMIN</p>
        <p>EMAIL</p>
        <p>MOUVEMENT</p>
        <p>DATE & HEURE</p>
        <p></p>
      </div>

      {/* ROWS */}
      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="relative bg-white rounded-2xl shadow-md border border-gray-200 p-4 md:p-6"
          >
            {/* DESKTOP */}
            <div className="hidden md:grid grid-cols-[2fr_2fr_2fr_2fr_40px] items-center">
              <div className="flex items-center gap-3">
                <Image
                  src="/default-avatar.svg"
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-medium">{user.name}</span>
              </div>

              <p className="text-gray-600">{user.email}</p>

              <span
                className={`px-4 py-1 w-32 rounded-full text-sm font-medium ${
                  user.status === "connected"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-500"
                }`}
              >
                {user.status === "connected" ? "Connecter" : "Déconnecter"}
              </span>

              <p className="text-gray-600">{user.date}</p>

              {/* ACTION */}
              <div className="relative">
                <button
                  onClick={() =>
                    setOpenMenuId(openMenuId === user.id ? null : user.id)
                  }
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  <MoreHorizontal size={18} className="cursor-pointer" />
                </button>

                {openMenuId === user.id && (
                  <div
                    ref={menuRef}
                    className="absolute right-0 top-10 w-40 bg-white overflow-hidden shadow-md rounded-lg z-50"
                  >
                    <button
                      onClick={() => handleEdit(user)}
                      className="w-full text-left px-4 py-2 text-sm cursor-pointer hover:text-white hover:bg-primary"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(user)}
                      className="w-full text-left px-4 py-2 text-sm cursor-pointer hover:text-white hover:bg-primary"
                    >
                      Supprimer
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* MOBILE */}
            <div className="md:hidden flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Image
                    src="/default-avatar.svg"
                    alt="avatar"
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <span className="font-medium">{user.name}</span>
                </div>

                {/* ACTION */}
                <div className="relative">
                  <button
                    onClick={() =>
                      setOpenMenuId(openMenuId === user.id ? null : user.id)
                    }
                    className="p-2 rounded-md hover:bg-gray-100"
                  >
                    <MoreHorizontal size={18} className="cursor-pointer" />
                  </button>

                  {openMenuId === user.id && (
                    <div
                      ref={menuRef}
                      className="absolute right-0 mt-2 w-40 overflow-hidden bg-white rounded-lg shadow-md z-50"
                    >
                      <button
                        onClick={() => handleEdit(user)}
                        className="w-full text-left px-4 py-2 text-sm cursor-pointer hover:text-white hover:bg-primary"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => handleDelete(user)}
                        className="w-full text-left px-4 py-2 text-sm cursor-pointer hover:text-white hover:bg-primary"
                      >
                        Supprimer
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-sm text-gray-600">{user.email}</p>

              <div className="flex justify-between items-center">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    user.status === "connected"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {user.status === "connected" ? "Connecté" : "Déconnecté"}
                </span>

                <span className="text-xs text-gray-500">{user.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
