import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="relative w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/herohome.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Small Tagline */}
        <p
          data-aos="fade-down"
          className="text-xs sm:text-sm md:text-base font-semibold tracking-[3px] uppercase mb-4 text-gray-900"
        >
          SolarWaves Green Energy Enterprises
        </p>

        {/* Main Heading */}
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6"
        >
          Your Trusted Partner <br className="hidden sm:block" />
          for a <span className="text-orange-500">Greener Tomorrow</span>
        </h1>

        {/* Sub Info */}
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          An MNRE & DISCOM Approved Vendor delivering reliable solar solutions
          for homes, businesses, and industries across India.
        </p>

        {/* Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/Brochure.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg transition duration-300"
          >
            Download Brochure
          </a>

          <a
            onClick={() => navigate("/products")}
            className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 border-2 border-white hover:border-orange-500 hover:text-orange-400 text-white font-semibold rounded-lg transition duration-300"
          >
            View Our Products
          </a>
        </div>

        {/* Approval Badge */}
        <div
          data-aos="zoom-in"
          data-aos-delay="800"
          className="mt-10 inline-block bg-white/10 backdrop-blur-md border border-orange-500/40 px-5 sm:px-6 py-3 rounded-lg"
        >
          <p className="text-xs sm:text-sm tracking-wide">
            ✅ MNRE & DISCOM Approved Vendor
          </p>
        </div>
      </div>
    </section>
  );
}
