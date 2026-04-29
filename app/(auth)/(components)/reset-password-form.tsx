"use client";

import { Eye } from "lucide-react";
import { useState } from "react";

export default function ResetPasswordForm() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.oldPassword || !form.newPassword || !form.confirmPassword) {
      return "All fields are required";
    }

    if (form.newPassword.length < 6) {
      return "Password must be at least 6 characters";
    }

    if (form.newPassword !== form.confirmPassword) {
      return "Passwords do not match";
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        body: JSON.stringify({
          oldPassword: form.oldPassword,
          newPassword: form.newPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess("Password updated successfully");
      setForm({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl max-w-md">
      <label htmlFor="" className="mb-2">
        Ancien mot de passe
      </label>
      <div className="relative">
        <input
          type={showOldPassword ? "text" : "password"}
          name="oldPassword"
          placeholder="Ancien mot de passe"
          value={form.oldPassword}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Eye
          size={18}
          onClick={() => setShowOldPassword(!showOldPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
        />
      </div>

      <label htmlFor="" className="mb-2">
        Nouveau mot de passe
      </label>
      <div className="relative">
        <input
          type={showNewPassword ? "text" : "password"}
          name="newPassword"
          placeholder="Nouveau mot de passe"
          value={form.newPassword}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Eye
          size={18}
          onClick={() => setShowNewPassword(!showNewPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
        />
      </div>

      <label htmlFor="" className="mb-4">
        Confirmer le mot de passe
      </label>
      <div className="relative">
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirmez le mot de passe"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Eye
          size={18}
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-primary w-40 flex items-center justify-center cursor-pointer text-white px-4 py-2 rounded-xl"
        >
          Modifier
        </button>
      </div>
    </form>
  );
}
