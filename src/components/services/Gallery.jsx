import { Play } from "lucide-react";

export default function Gallery() {
  return (
    <section
      className="relative py-20 bg-slate-50 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/simple-blue-white-background-with-text-space_1017-46764.jpg?semt=ais_rp_progressive&w=740&q=80')",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm">
            SolarWaves Gallery
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
            Our Solar Installations & Projects
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Take a look at some of our successful solar installations and
            projects delivering clean and sustainable energy solutions.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Image 1 */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg" data-aos="zoom-in">
            <img
              src="/gallery1.jpeg"
              className="w-full h-[300px] sm:h-[330px] lg:h-[370px] object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* Image 2 */}
          <div
            className="group relative overflow-hidden rounded-xl shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img
              src="/gallery2.jpeg"
              className="w-full h-[300px] sm:h-[330px] lg:h-[370px] object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* Image 3 */}
          <div
            className="group relative overflow-hidden rounded-xl shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src="/gallery3.jpeg"
              className="w-full h-[300px] sm:h-[330px] lg:h-[370px] object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* Image 4 */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg" data-aos="zoom-in">
            <img
              src="/gallery5.jpeg"
              className="w-full h-[280px] sm:h-[320px] lg:h-[350px] object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* Video */}
          <div
            className="group relative overflow-hidden rounded-xl shadow-lg sm:col-span-2"
            data-aos="fade-left"
          >
            <video
              src="/gallery4.mp4"
              controls
              className="w-full h-[280px] sm:h-[320px] lg:h-[350px] object-cover"
            />

            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-orange-500 p-4 rounded-full text-white opacity-80">
                <Play size={28} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}