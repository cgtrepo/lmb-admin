"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Bell, ChevronDown } from "lucide-react";
import Link from "next/link";
import { countries } from "../(data)/home-actions-data";
import { Country } from "../(types)/home-data-type";

export default function LmbHomeNavbar() {
  const [selected, setSelected] = useState<Country>(countries[0]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load saved country
  useEffect(() => {
    const saved = localStorage.getItem("country");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved) setSelected(JSON.parse(saved));
  }, []);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectCountry = (country: Country) => {
    setSelected(country);
    localStorage.setItem("country", JSON.stringify(country));
    setOpen(false);
  };

  return (
    <div className="w-full h-17.5 bg-primary mb-4 flex items-center justify-between px-6">
      <Link href="/">
        <Image
          src="/lmb-admin-logo.svg"
          alt="Lmb Logo"
          width={55}
          height={55}
          className="cursor-pointer"
        />
      </Link>

      {/* RIGHT */}
      <div className="flex items-center gap-6 relative">
        {/* Notification */}
        <div className="relative cursor-pointer">
          <Bell className="text-white" size={22} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Country Selector */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 cursor-pointer text-white"
          >
            <Image src={selected.flag} alt="flag" width={20} height={14} />
            <span>{selected.name}</span>
            <ChevronDown size={16} />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg z-50">
              {countries.map((country) => (
                <div
                  key={country.code}
                  onClick={() => selectCountry(country)}
                  className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
                >
                  <Image src={country.flag} alt="" width={20} height={14} />
                  <span className="text-sm">{country.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
