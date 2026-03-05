export default function AboutHero() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/Abouthero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Building a Brighter Energy Future
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Delivering reliable solar solutions with precision and performance.
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Who We Are
          </h2>

          <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6">
            SolarWaves is a dedicated solar energy solutions provider focused on
            delivering efficient and cost-effective renewable systems for
            residential, commercial, and industrial clients. Our team combines
            technical expertise with quality workmanship to ensure long-term
            energy performance.
          </p>

          <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
            From site assessment to installation and after-sales support,
            we prioritize transparency, reliability, and customer satisfaction
            in every project we undertake.
          </p>

        </div>
      </section>
    </>
  );
}