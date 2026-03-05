import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle, ShieldCheck } from "lucide-react";

export default function ProductsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const products = [
    {
      title: "Solar PV Modules",
      subtitle: "High-Efficiency Tier-1 Certified Panels",
      image: "/product1.jpg",
      details: [
        "Tier-1 global brand sourcing",
        "25-year linear performance warranty",
        "N-Type & Mono PERC technologies",
        "BIS & MNRE approved modules",
        "Anti-PID & low degradation cells",
      ],
      specs: [
        "Power Range: 400Wp – 700Wp",
        "Module Efficiency: 20% – 23%",
        "Annual Degradation: <0.5%",
        "Operating Temp: -40°C to +85°C",
      ],
    },
    {
      title: "Solar Inverter Systems",
      subtitle: "Advanced Grid & Hybrid Power Electronics",
      image: "/product2.jpg",
      details: [
        "String, Central & Hybrid inverters",
        "Grid-tied & battery-ready systems",
        "Smart WiFi monitoring",
        "Remote performance tracking",
        "Integrated surge & overload protection",
      ],
    },
    {
      title: "Hybrid Wind-Solar Systems",
      subtitle: "Integrated Renewable Energy Solutions",
      image: "/product3.jpg",
      details: [
        "Wind + Solar synchronized systems",
        "Battery storage integration",
        "Continuous power optimization",
        "Load balancing automation",
      ],
    },
    {
      title: "Solar Water Heating Systems",
      subtitle: "Thermal Energy for Domestic & Industrial Use",
      image: "/product5.jpg",
      details: [
        "Domestic rooftop systems",
        "Industrial thermal applications",
        "Capacity range: 100 LPD – 5000 LPD",
        "Up to 70% electricity savings",
      ],
    },
    {
      title: "Solar Street Lighting",
      subtitle: "Autonomous Public Infrastructure Lighting",
      image: "/product6.jpg",
      details: [
        "All-in-one LED systems",
        "Lithium battery backup",
        "Public roads & campus lighting",
        "Maintenance-free operation",
      ],
    },
    {
      title: "Solar Water Pumping Systems",
      subtitle: "Agricultural Irrigation Solutions",
      image: "/product7.avif",
      details: [
        "DC & AC submersible pumps",
        "MNRE subsidy eligible",
        "Agricultural irrigation systems",
        "High efficiency motor drives",
      ],
    },
    {
      title: "BOS (Balance of System) Materials",
      subtitle: "Complete System Infrastructure",
      image: "/product8.jpg",
      details: [
        "Hot dip galvanized mounting structures",
        "UV resistant DC cabling",
        "AC/DC protection panels",
        "Earthing & lightning protection",
        "Switchgear & safety systems",
      ],
    },
  ];

  return (
    <div className="bg-[#f9fafb]">

      {/* HEADER */}
      <section className="py-16 sm:py-20 md:py-24 text-center bg-white">
        <h1
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900"
        >
          Solar Products & Integrated Energy Systems
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-4 text-gray-600 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed px-4"
        >
          Comprehensive renewable energy product portfolio including
          photovoltaic modules, inverters, hybrid systems,
          pumping solutions, thermal systems, and certified BOS materials.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14 sm:space-y-16">

        {products.map((product, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className={`bg-white rounded-2xl shadow-sm border 
                        p-5 sm:p-6 md:p-8 
                        grid lg:grid-cols-3 gap-6 md:gap-8 items-center 
                        transition duration-500 hover:shadow-xl`}
          >
            {/* Image */}
            <div
              className={`lg:col-span-1 ${
                index % 2 !== 0 ? "lg:order-2" : ""
              }`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="rounded-xl h-48 sm:h-56 md:h-60 w-full object-cover 
                           transition duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div
              className={`lg:col-span-2 ${
                index % 2 !== 0 ? "lg:order-1" : ""
              }`}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                {product.title}
              </h2>

              <p className="text-orange-500 text-xs sm:text-sm font-medium mb-4">
                {product.subtitle}
              </p>

              <ul className="grid sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 mb-5">
                {product.details.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle
                      size={16}
                      className="text-orange-500 mt-1 flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {product.specs && (
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border text-xs sm:text-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Technical Specifications
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2 text-gray-700">
                    {product.specs.map((spec, i) => (
                      <div key={i}>{spec}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

      </section>

      {/* PROCUREMENT SECTION */}
      <section className="bg-orange-50 py-12 sm:py-16 border-t">
        <div
          data-aos="zoom-in"
          className="max-w-xl sm:max-w-3xl md:max-w-4xl mx-auto text-center px-4 sm:px-6"
        >
          <ShieldCheck size={36} className="text-orange-500 mx-auto mb-4" />

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Procurement & Premium Sourcing Assurance
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
            We source exclusively from top-tier manufacturers ensuring certified
            components, MNRE compliance, strict quality assurance, and optimized
            procurement pricing for long-term renewable energy projects.
          </p>
        </div>
      </section>

    </div>
  );
}