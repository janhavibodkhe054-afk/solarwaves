import { FileCheck, Layers, Settings, Shield } from "lucide-react";

export default function DesignSection() {
  const services = [
    {
      icon: <FileCheck size={22} />,
      title: "Site Assessment",
      desc: "Detailed solar radiation mapping, terrain evaluation, and feasibility analysis to ensure optimal system performance and long-term reliability.",
    },
    {
      icon: <Layers size={22} />,
      title: "Design Customization",
      desc: "Preparation of Single Line Diagrams (SLD), detailed electrical layouts, and complete documentation management for permits and grid-interconnection / STU compliance.",
    },
    {
      icon: <Settings size={22} />,
      title: "Component Engineering",
      desc: "Comprehensive engineering of switchyards, protection systems, and balance-of-system integration to maintain operational efficiency and safety.",
    },
    {
      icon: <Shield size={22} />,
      title: "Regulatory Compliance",
      desc: "End-to-end handling of approvals, permits, and documentation for grid interconnection with State Transmission Utility (STU) authorities.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-slate-900 tracking-tight leading-tight">
            Engineering & Design
            <span className="block font-semibold mt-2">
              Excellence
            </span>
          </h2>

          <div className="w-24 h-[2px] bg-slate-900 mx-auto mt-6"></div>

          <p className="mt-8 text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We pride ourselves on technical precision, delivering
            structured engineering solutions that ensure performance,
            regulatory compliance, and long-term energy optimization.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-10 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.desc}
              </p>

              {/* Accent Line */}
              <div className="mt-8 h-[2px] w-0 bg-slate-900 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}