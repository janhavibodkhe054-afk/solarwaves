import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroServices() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-white overflow-hidden pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-14 lg:gap-20">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right">

          <p className="text-xs sm:text-sm uppercase tracking-[4px] text-orange-500 mb-4">
            Solar Expertise
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            Engineering the
            <span className="block font-light">
              Future of Clean Energy
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
            From residential rooftops to industrial MW-scale plants,
            we design and deliver high-performance solar solutions
            built for long-term efficiency and reliability.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">

            <button
              data-aos="fade-up"
              data-aos-delay="200"
              onClick={() => navigate("/products")}
              className="px-6 sm:px-7 py-3 bg-orange-500 text-white rounded-xl 
                         shadow-md hover:shadow-lg hover:bg-orange-600 
                         transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Products
              <ArrowRight size={18} />
            </button>

            <button
              data-aos="fade-up"
              data-aos-delay="300"
              onClick={() => navigate("/contact")}
              className="px-6 sm:px-7 py-3 border border-gray-300 rounded-xl 
                         hover:border-gray-500 transition-all duration-300"
            >
              Get Consultation
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">

          {/* Dotted Pattern */}
          <div
            data-aos="zoom-in"
            className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 
                       w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80
                       bg-[radial-gradient(#ED7213_1.2px,transparent_1.2px)]
                       [background-size:18px_18px] opacity-80 rounded-3xl"
          ></div>

          {/* Back Image */}
          <div data-aos="fade-left" className="relative group z-10">
            <img
              src="/Heroservices.avif"
              alt="Solar Plant"
              className="w-[260px] sm:w-[320px] md:w-[360px] 
                         h-[340px] sm:h-[420px] md:h-[460px] 
                         object-cover rounded-3xl shadow-2xl 
                         transition-all duration-500 group-hover:scale-[1.03]"
            />
          </div>

          {/* Front Image */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="absolute bottom-[-20px] left-[-10px] 
                       sm:bottom-[-30px] sm:left-[-20px] 
                       animate-float z-20"
          >
            <img
              src="/Aboutservices1.jpg"
              alt="Solar Rooftop"
              className="w-[200px] sm:w-[240px] md:w-[280px] 
                         h-[260px] sm:h-[300px] md:h-[340px] 
                         object-cover rounded-3xl shadow-2xl 
                         border-[6px] border-white 
                         transition-all duration-500 hover:scale-105"
            />

            {/* Glass Badge */}
            <div className="absolute -bottom-5 right-4 backdrop-blur-md 
                            bg-white/80 px-4 py-2 sm:px-5 sm:py-3 
                            rounded-xl shadow-lg">
              <p className="text-xs sm:text-sm font-semibold text-gray-900">
                25+ Year Performance
              </p>
              <p className="text-[10px] sm:text-xs text-gray-600">
                Engineered for durability
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 5s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}