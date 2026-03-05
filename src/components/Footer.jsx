import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0a0f1c] via-[#0f172a] to-[#020617] text-white overflow-hidden">

      {/* Top Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ===== Brand Section ===== */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-wide">
              <span className="text-white">Solar</span>
              <span className="text-white">Waves</span>
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed">
              Delivering innovative and sustainable solar energy 
              solutions for residential, commercial, and industrial sectors across India.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {[Facebook, Linkedin, Instagram].map((Icon, index) => (
                <div
                  key={index}
                  className="group w-10 h-10 rounded-xl bg-slate-800/70 
                             border border-slate-700 flex items-center justify-center
                             hover:bg-blue-600 transition-all duration-300
                             hover:-translate-y-1 cursor-pointer"
                >
                  <Icon size={18} className="group-hover:text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* ===== Quick Links ===== */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute left-0 -bottom-2 w-12 h-[2px] bg-orange-500"></span>
            </h3>

            <ul className="space-y-4 text-sm text-slate-400">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Product", path: "/products" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className="hover:text-orange-400 transition duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Services Section (Replaced Newsletter) ===== */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Our Services
              <span className="absolute left-0 -bottom-2 w-12 h-[2px] bg-orange-500"></span>
            </h3>

            <ul className="space-y-4 text-sm text-slate-400">
              <li className="hover:text-orange-400 transition">On-Grid Solar Systems</li>
              <li className="hover:text-orange-400 transition">Off-Grid Solar Systems</li>
              <li className="hover:text-orange-400 transition">Hybrid Solar Solutions</li>
              <li className="hover:text-orange-400 transition">Solar Maintenance</li>
              <li className="hover:text-orange-400 transition">Energy Consultation</li>
            </ul>
          </div>

          {/* ===== Contact Info ===== */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact
              <span className="absolute left-0 -bottom-2 w-12 h-[2px] bg-orange-500"></span>
            </h3>

            <div className="space-y-5 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 mt-1" />
                <p>Block No. 143, Sheela Complex, Wadi, Nagpur.</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500" />
                <p>+91 9890938047</p>
              </div>

              <div className="flex items-center gap-3 break-all">
                <Mail size={18} className="text-orange-500" />
                <p>solarwaves2025@gmail.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="border-t border-slate-800 mt-14 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} SolarWaves Green Energy Enterprises. 
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}