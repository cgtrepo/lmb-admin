import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function LmbHomeFooter() {
  return (
    <footer className="bg-primary text-white px-8 md:px-16 py-5">
      <div className="sm:max-w-360 sm:mx-auto flex p-4 sm:p-0 sm:space-y-0 space-y-4 flex-col justify-center">
        <div className="sm:flex-none sm:h-4 sm:flex hidden">&ensp;</div>

        <div className="flex flex-row items-center justify-center sm:justify-start">
          <p className="text-sm text-center md:text-left">
            COPYRIGHT © 2026 LMB | DESIGN BY &nbsp;
            <Link
              href="https://aftgroup.org/"
              target="_blank"
              className="font-bold"
            >
              AFT GROUP
            </Link>
          </p>
        </div>

        <div className="flex justify-center items-end sm:justify-end gap-6 text-lg">
          <a href="#" className="hover:opacity-80">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:opacity-80">
            <FaInstagram />
          </a>
          <a href="#" className="hover:opacity-80">
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
}
