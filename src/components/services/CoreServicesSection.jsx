import { Home, Building2, Factory, Tractor } from "lucide-react";

export default function CoreServicesSection() {
  const services = [
    {
      icon: <Home size={24} />,
      title: "Residential Solar Solutions",
      desc: "Smart solar systems designed for homeowners seeking energy savings and long-term sustainability.",
      points: [
        "On-grid systems",
        "Off-grid systems",
        "Hybrid systems",
        "Net metering support",
        "Rooftop solar solutions",
        "Energy independence systems",
      ],
    },
    {
      icon: <Building2 size={24} />,
      title: "Commercial Solar Solutions",
      desc: "Optimized solar installations for institutions and businesses aiming to reduce operational energy costs.",
      points: [
        "Schools, Hospitals, Banks",
        "Detailed load analysis",
        "Rooftop & ground systems",
        "CAPEX & RESCO models",
        "Energy optimization planning",
      ],
    },
    {
      icon: <Factory size={24} />,
      title: "Industrial Solar Solutions",
      desc: "High-capacity solar EPC services for energy-intensive manufacturing units.",
      points: [
        "Textile industries",
        "Automobile industries",
        "Brewing units",
        "Paper mills",
        "MW-level installations",
        "Grid interconnection",
      ],
    },
    {
      icon: <Tractor size={24} />,
      title: "Agricultural Solar Solutions",
      desc: "Reliable solar systems empowering rural and farming communities.",
      points: [
        "Solar water pumps",
        "Rural electrification",
        "Hybrid supply systems",
        "Decentralized power solutions",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#faf8f4] to-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className="text-center mb-16 sm:mb-20 md:mb-24"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-tight">
            Integrated Solar
            <span className="block font-semibold text-orange-500">
              Energy Services
            </span>
          </h2>

          <div className="w-16 sm:w-20 h-[2px] bg-orange-500 mx-auto mt-5 sm:mt-6"></div>

          <p className="mt-5 sm:mt-6 text-gray-600 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Comprehensive EPC services tailored for residential, commercial,
            industrial, and agricultural sectors.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14">

          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 md:p-10
                         shadow-md hover:shadow-2xl transition duration-500 
                         border border-gray-100 overflow-hidden"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center 
                              rounded-2xl bg-orange-50 text-orange-500 mb-5 sm:mb-6
                              group-hover:bg-orange-500 group-hover:text-white 
                              transition duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">
                {service.desc}
              </p>

              {/* Points */}
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {service.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start text-gray-700 text-xs sm:text-sm"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 
                              bg-orange-500 rounded-b-3xl
                              group-hover:w-full transition-all duration-500">
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}