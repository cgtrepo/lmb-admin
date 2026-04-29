"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Upload, X } from "lucide-react";

export default function ImageUpload() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const formatSize = (size: number) => {
    return (size / 1024 / 1024).toFixed(2) + " MB";
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-lg font-medium">Image de la catégorie</p>

      {/* Upload Box */}
      <div
        onClick={!preview ? handleClick : undefined}
        className="relative w-60 h-40 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden hover:border-gray-400 transition"
      >
        {/* Hidden input */}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />

        {/* No image */}
        {!preview && (
          <div className="flex flex-col items-center text-gray-400">
            <Upload size={28} />
            <span className="text-sm mt-1 text-blue-500">Image</span>
            <span className="text-xs">Taille maximal: 5MB</span>
          </div>
        )}

        {/* Preview */}
        {preview && (
          <>
            <Image src={preview} alt="preview" fill className="object-cover" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition flex items-center justify-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick();
                }}
                className="bg-white text-black px-3 py-1 rounded text-sm"
              >
                Remplacer
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove();
                }}
                className="bg-red-500 text-white p-2 rounded-full"
              >
                <X size={16} />
              </button>
            </div>
          </>
        )}
      </div>

      {/* File size */}
      {file && (
        <p className="text-sm text-gray-500">
          {file.name} — {formatSize(file.size)}
        </p>
      )}
    </div>
  );
}
