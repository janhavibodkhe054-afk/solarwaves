import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `relative px-3 lg:px-4 py-2 font-medium transition-all duration-300
     ${isActive ? "text-orange-500" : "text-slate-800"}
     hover:text-orange-500
     after:absolute after:left-0 after:-bottom-1 after:h-[2px]
     after:w-0 after:bg-orange-500 after:transition-all after:duration-300
     hover:after:w-full`;

  const whatsappNumber = "919890938047";
  const message = "Hello SolarWaves";

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-18 lg:h-20">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/Artboard 13.png"
            alt="SolarWaves Logo"
            className="h-10 sm:h-12 lg:h-24 w-auto object-contain transition-all duration-300"
          />

          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-wide leading-none">
            <span className="text-[#111729]">Solar</span>
            <span className="text-[#111729]">Waves</span>
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>
          <NavLink to="/services" className={navLinkStyle}>
            Services
          </NavLink>
          <NavLink to="/products" className={navLinkStyle}>
            Products
          </NavLink>
          <NavLink to="/contact" className={navLinkStyle}>
            Contact
          </NavLink>

          {/* CTA */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 lg:px-5 py-2 bg-orange-500 text-white rounded-lg
                       hover:bg-orange-600 transition-all duration-300
                       hover:scale-105 active:scale-95 shadow-md"
          >
            Get Quote
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-slate-900 transition-transform duration-300 hover:scale-110"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-slate-200 px-6 py-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <NavLink
              to="/"
              className={`${navLinkStyle} block w-full`}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={`${navLinkStyle} block w-full`}
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/services"
              className={`${navLinkStyle} block w-full`}
              onClick={() => setOpen(false)}
            >
              Services
            </NavLink>

            <NavLink
              to="/products"
              className={`${navLinkStyle} block w-full`}
              onClick={() => setOpen(false)}
            >
              Products
            </NavLink>

            <NavLink
              to="/contact"
              className={`${navLinkStyle} block w-full`}
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-3 bg-orange-500 text-white rounded-lg
                   hover:bg-orange-600 transition-all duration-300
                   active:scale-95 shadow-md"
              onClick={() => setOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
