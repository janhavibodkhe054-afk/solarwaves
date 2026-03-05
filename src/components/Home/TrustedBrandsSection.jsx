import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TrustedBrandsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const solarPanels = [
    {
      name: "Adani Solar",
      logo: "/adani.jpg",
    },
    {
      name: "Waaree Energies",
      logo: "/waaree.png",
    },
    {
      name: "Reliance New Energy",
      logo: "/reliance.jpg",
    },
    {
      name: "Vikram Solar",
      logo: "/vikram.webp",
    },
    {
      name: "Tata Power Solar",
      logo: "tata.jpg",
    },
  ];

  const inverters = [
    {
      name: "Huawei",
      logo: "/huawei.jpg",
    },
    {
      name: "Growatt",
      logo: "/Growatt.jpg",
    },
    {
      name: "Polycab",
      logo: "/polycab.jpg",
    },
    {
      name: "UTL Solar",
      logo: "/utl.png",
    },
    {
      name: "Obits Solar",
      logo: "/logo.png",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
            Our Trusted{" "}
            <span className="text-orange-500">Technology Partners</span>
          </h2>

          <div className="w-20 h-1 bg-orange-500 mx-auto my-4 rounded-full"></div>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            We collaborate with globally recognized manufacturers to ensure
            certified components, 25+ year performance reliability, and
            long-term operational excellence for every installation.
          </p>
        </div>

        {/* Solar Panel Brands */}
        <BrandGroup title="Solar Panel Manufacturers" brands={solarPanels} />

        {/* Inverter Brands */}
        <BrandGroup title="Inverter Technology Partners" brands={inverters} />
      </div>
    </section>
  );
}

/* Brand Group */
function BrandGroup({ title, brands }) {
  return (
    <div className="mb-14 md:mb-20">
      <h3
        className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 text-center mb-8"
        data-aos="fade-right"
      >
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-8">
        {brands.map((brand, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="group bg-white border border-slate-200 rounded-2xl p-5 md:p-6 
             flex flex-col items-center justify-center 
             transition-all duration-500 
             hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="h-16 flex items-center justify-center overflow-hidden">
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-14 object-contain transition-all duration-500 
                 group-hover:scale-110"
              />
            </div>

            <p className="text-xs sm:text-sm font-medium text-slate-700 mt-4 text-center">
              {brand.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
