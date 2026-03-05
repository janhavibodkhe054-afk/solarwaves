import { MapPin, HardHat, Settings, Zap, Clock } from "lucide-react";

export default function ProjectLifecycleSection() {
  const lifecycle = [
    {
      icon: <MapPin size={18} />,
      title: "Site Selection",
      desc: "Complete radiation and generation analysis based on local technology and terrain.",
    },
    {
      icon: <HardHat size={18} />,
      title: "Construction Supervision",
      desc: "Our engineers provide on-site supervision to ensure quality and timely procurement of all materials.",
    },
    {
      icon: <Settings size={18} />,
      title: "Hassle-Free Execution",
      desc: "Construction supervision by on-site engineers to ensure precision, regulatory compliance, and operational safety.",
    },
    {
      icon: <Zap size={18} />,
      title: "Power Evacuation",
      desc: "Expert planning for interconnection points with the State Transmission Utility (STU) for seamless grid integration.",
    },
    {
      icon: <Clock size={18} />,
      title: "Timeline Management",
      desc: "Strict scheduling to ensure project completion from pre-commissioning to final commissioning.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900">
            Project Lifecycle
            <span className="block font-semibold mt-1">
              & Execution
            </span>
          </h2>
          <div className="w-14 h-[2px] bg-slate-900 mx-auto mt-4"></div>
          <p className="mt-5 text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
            A structured execution methodology ensuring technical precision,
            regulatory compliance, and seamless delivery from feasibility study
            to final commissioning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[1px] h-full bg-slate-300"></div>

          <div className="space-y-8">
            {lifecycle.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Card */}
                <div
                  className={`w-full md:w-[46%] bg-slate-50 border border-slate-200 rounded-lg p-5 transition duration-300 hover:shadow-md ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-md bg-slate-900 text-white">
                      {step.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rounded-full border-2 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}