export default function VisionMissionSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* Vision */}
        <div className="border-l-4 border-sky-500 pl-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Our Vision
          </h3>

          <p className="text-slate-600 leading-relaxed">
            To empower a sustainable future by providing innovative solar
            solutions that make clean energy accessible, affordable, and
            reliable for every household and industry.
          </p>
        </div>

        {/* Mission */}
        <div className="border-l-4 border-orange-500 pl-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Our Mission
          </h3>

          <p className="text-slate-600 leading-relaxed">
            To deliver high-quality, MNRE-approved solar systems through expert
            design and technology, helping our clients reduce energy costs while
            building a greener tomorrow together.
          </p>
        </div>

      </div>
    </section>
  );
}