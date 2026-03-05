import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChooseUsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const points = [
    "Government Certified: Authorized MNRE/DISCOM vendor ensuring subsidy eligibility and faster approvals.",
    "Specialized in On-Grid, Off-Grid & Hybrid energy generation systems.",
    "Dedicated Project Team ensuring precision engineering and timely execution.",
    "Engineering Excellence with CAD layouts, 3D shading & yield simulation reports.",
    "Technology-Assisted site assessment & real-time remote monitoring."
  ];

  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/solar.jpg')"
      }}
    >
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* Decorative Orange Shape */}
      <div className="hidden lg:block absolute left-0 top-0 h-full w-1/4 bg-orange-500 skew-x-[-15deg] -translate-x-24 opacity-90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left Content */}
        <div
          data-aos="fade-right"
          className="bg-white/95 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl border-l-4 border-orange-500"
        >
          <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6 leading-snug">
            Why Choose <span className="text-gray-900">SolarWaves</span>
          </h2>

          <ul className="space-y-4">
            {points.map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="text-orange-500 font-bold text-lg">✔</span>
                <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="bg-white/95 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl border-t-4 border-blue-900"
        >
          <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6 leading-snug">
            Comprehensive <span className="text-gray-900">Solar EPC</span> Solutions
          </h3>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
            SolarWaves delivers high-performance solar energy solutions
            for residential, commercial, and industrial sectors. Our
            engineering-first approach ensures structural safety,
            optimized output, and long-term reliability.
          </p>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
            From feasibility study and site survey to procurement,
            installation, testing, and commissioning — we handle
            complete turnkey EPC execution under strict quality control.
          </p>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            With certified components, government compliance, and
            intelligent monitoring systems, we guarantee sustainable
            energy savings and superior ROI for every project.
          </p>

          {/* Highlight Stats */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-center">
            <div className="bg-slate-50 rounded-xl p-4 shadow-sm">
              <h4 className="text-xl font-bold text-orange-500">25+</h4>
              <p className="text-xs text-slate-600">Years Performance Warranty</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 shadow-sm">
              <h4 className="text-xl font-bold text-blue-900">100%</h4>
              <p className="text-xs text-slate-600">MNRE Compliant Systems</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}