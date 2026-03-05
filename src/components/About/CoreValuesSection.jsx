export default function CoreValuesSection() {
  const values = [
    {
      title: "Integrity",
      text: "No hidden costs — complete transparency in every project.",
    },
    {
      title: "Quality",
      text: "Use of certified components and proven installation standards.",
    },
    {
      title: "Innovation",
      text: "Technology-driven design and execution.",
    },
    {
      title: "Sustainability",
      text: "Long-term environmental and economic benefits.",
    },
    {
      title: "Customer Commitment",
      text: 'Treating every client as a "Business Family Member" with lifelong support.',
    },
  ];

  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          Our <span className="text-gray-900">Core Values</span>
        </h2>

        {/* Grid Layout → First row 3 cards, second row 2 centered */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* First Row → 3 Cards */}
          {values.slice(0, 3).map((item, index) => (
            <div key={index} className="md:col-span-2">
              <ValueCard {...item} />
            </div>
          ))}

          {/* Empty Spacer for Center Alignment */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Second Row → 2 Cards Centered */}
          {values.slice(3).map((item, index) => (
            <div key={index} className="md:col-span-2">
              <ValueCard {...item} />
            </div>
          ))}

          <div className="hidden md:block md:col-span-1"></div>
        </div>
      </div>
    </section>
  );
}

/* Card Component */
function ValueCard({ title, text }) {
  return (
    <div className="h-full bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-900 hover:shadow-2xl transition duration-300 hover:-translate-y-2">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>

      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}
