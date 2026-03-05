import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-40 sm:w-60 md:w-72 h-40 sm:h-60 md:h-72 bg-sky-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 sm:w-60 md:w-72 h-40 sm:h-60 md:h-72 bg-orange-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">
          {/* Section Label */}
          <p className="text-sky-600 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            About SolarWaves
          </p>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight mb-5">
            Powering Nagpur with{" "}
            <span className="text-gray-900">Reliable & Affordable</span> Solar
            Energy
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-5">
            SolarWaves Green Energy Enterprises is a proprietorship firm based
            in{" "}
            <span className="font-semibold text-sky-700">
              Nagpur, Maharashtra
            </span>
            , operating with a clear focus on quality-driven solar installations
            and customer-centric service.
          </p>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            The firm is legally registered under GST and operates with complete
            transparency and compliance. We specialize in delivering
            high-performance solar power systems that bridge the gap between
            technical excellence and affordable clean energy.
          </p>

          {/* Models Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-5 sm:p-6 bg-white border-t-4 border-orange-500 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                CAPEX Model
              </h3>
              <p className="text-slate-600 text-sm sm:text-base">
                Direct ownership solution providing long-term ROI and complete
                system control for businesses and homeowners.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-white border-t-4 border-sky-500 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                RESCO Model
              </h3>
              <p className="text-slate-600 text-sm sm:text-base">
                Flexible zero or low upfront investment model allowing clients
                to switch to solar energy with financial ease.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="home1.png"
              alt="Solar Installation"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[420px] object-cover"
            />
          </div>
          <button
            onClick={() => navigate("/about")}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl
                       hover:bg-blue-700 hover:scale-105 active:scale-95
                       transition-all duration-300 shadow-md"
          >
            Learn More About Us →
          </button>
        </div>
      </div>
    </section>
  );
}
