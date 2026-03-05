export default function SolarWaves() {
  return (
    <section className="w-full bg-[#f4f4f4] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* Left Image */}
        <div>
          <img
            src="/Abouthero.jpg"
            alt="Solar Installation"
            className="rounded-[40px] w-full h-[420px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          {/* Small Label */}
          <p className="text-sm tracking-widest text-amber-600 font-semibold mb-3">
            SOLARWAVES
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
            GREEN ENERGY{" "}
            <span className="font-semibold text-teal-800">
              SOLUTIONS
            </span>
          </h2>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed mb-5">
            SolarWaves Green Energy Enterprises is an MNRE & DISCOM approved
            vendor delivering high-performance solar power systems with a strong
            focus on quality, transparency, and customer-centric service. We
            operate under both CAPEX and RESCO models, giving our clients the
            flexibility to choose the most suitable investment approach.
          </p>

          <p className="text-slate-600 leading-relaxed mb-5">
            Our expertise spans on-grid, off-grid, and hybrid solar systems for
            residential, commercial, industrial, and agricultural applications.
            With advanced CAD-based layouts, 3D shading analysis, and bankable
            energy yield reports, we ensure optimized performance and long-term
            reliability.
          </p>

          <p className="text-slate-600 leading-relaxed">
            From site assessment and engineering design to procurement,
            execution, and grid interconnection compliance, SolarWaves provides
            comprehensive EPC solutions backed by strict quality policies and
            lifelong after-sales support.
          </p>
        </div>
      </div>
    </section>
  );
}