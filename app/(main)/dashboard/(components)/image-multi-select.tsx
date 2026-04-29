"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Upload, X } from "lucide-react";
import { ImageItems } from "../(types)/dashboard-type";

export default function ImageMultiSelect() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<ImageItems[]>([]);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImageTab: ImageItems[] = Array.from(files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImageTab]);

    if (inputRef.current) inputRef.current.value = "";
  };

  const handleRemove = (index: number) => {
    setImages((prev) => prev.filter((p, i) => i !== index));
  };

  const handleReplace = (index: number) => {
    inputRef.current?.click();

    const handler = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (!file) return;

      const updated = [...images];
      updated[index] = {
        file,
        preview: URL.createObjectURL(file),
      };

      setImages(updated);

      if (inputRef.current) {
        inputRef.current.value = "";
        inputRef.current.removeEventListener("change", handler);
      }
    };

    inputRef.current?.addEventListener("change", handler);
  };

  const formatSize = (size: number) => {
    return (size / 1024 / 1024).toFixed(2) + " MB";
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-lg font-medium">Images du produit</p>

      {/* MAIN UPLOAD BOX */}
      <div
        onClick={handleClick}
        className="w-60 h-40 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition"
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleChange}
          className="hidden"
        />

        <Upload size={28} className="text-gray-400" />
        <span className="text-sm mt-1 text-blue-500">Ajouter des images</span>
        <span className="text-xs text-gray-400">Max 5MB par image</span>
      </div>

      {/* IMAGES LIST */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-xl">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full border rounded-xl overflow-hidden p-2"
          >
            <Image
              src={img.preview}
              alt="preview"
              width={1}
              height={1}
              className="object-cover w-full h-40"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition flex items-center justify-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleReplace(index);
                }}
                className="bg-white text-black cursor-pointer px-3 py-1 rounded text-sm"
              >
                Remplacer
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(index);
                }}
                className="bg-red-500 text-white cursor-pointer p-2 rounded-full"
              >
                <X size={16} />
              </button>
            </div>

            {/* FILE INFO */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs px-2 py-1 truncate">
              {img.file.name} — {formatSize(img.file.size)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
