import {
  Settings,
  Wrench,
  Scale,
  Target,
  Sun,
  ShieldCheck,
  Cog,
  LineChart,
} from "lucide-react";

export default function TechnologyQualitySection() {
  const items = [
    {
      icon: <Settings size={28} />,
      title: "Detailed Engineering",
    },
    {
      icon: <Sun size={28} />,
      title: "Installation & Commissioning",
    },
    {
      icon: <Wrench size={28} />,
      title: "O&M",
    },
    {
      icon: <Scale size={28} />,
      title: "Ethical Business Policies",
    },
    {
      icon: <Target size={28} />,
      title: "Long Term Approach",
    },
    {
      icon: <Cog size={28} />,
      title: "Integrated Standard EPC Solution",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Advanced Quality Standards",
    },
    {
      icon: <LineChart size={28} />,
      title: "Performance Optimization",
    },
  ];

  return (
    <section className="w-full bg-[#f3f3f3] py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-10">
          Technology &{" "}
          <span className="font-semibold text-teal-800">quality</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-br-[40px] rounded-t-lg shadow-sm hover:shadow-md transition duration-300 text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 text-teal-800">
                {item.icon}
              </div>

              {/* Text */}
              <p className="text-sm font-medium text-slate-700 leading-snug">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}