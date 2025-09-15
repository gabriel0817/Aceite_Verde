import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#104e0f] text-white w-full fixed top-0 left-0 z-50 h-14 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold">
          Aceite Verde
        </Link>

        {/* Links escritorio */}
        <div className="hidden md:flex justify-end items-center space-x-12 text-lg font-semibold">
          <Link to="/" className="hover:text-yellow-300 transition">
            Inicio
          </Link>
          <Link to="/contacto" className="hover:text-yellow-300 transition">
            Contacto
          </Link>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden focus:outline-none text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden bg-[#104e0f] px-4 pb-4 flex flex-col space-y-4 text-lg">
          <Link
            to="/"
            className="hover:text-yellow-300 transition"
            onClick={() => setOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to="/contacto"
            className="hover:text-yellow-300 transition"
            onClick={() => setOpen(false)}
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}
