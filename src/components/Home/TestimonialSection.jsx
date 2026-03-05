import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Quote } from "lucide-react";

export default function TestimonialSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const testimonials = [
    {
      name: "Rahul Deshmukh",
      text: "SolarWaves Nagpur provided excellent installation service. The team was professional and the system performance is outstanding.",
      location: "Nagpur, Maharashtra",
    },
    {
      name: "Sneha Patil",
      text: "Very satisfied with the solar panel quality and after-sales support. Highly recommended!",
      location: "Pune, Maharashtra",
    },
    {
      name: "Amit Jadhav",
      text: "The entire process was smooth from survey to installation. Great work by SolarWaves Nagpur.",
      location: "Amravati, Maharashtra",
    },
    {
      name: "Priya Kulkarni",
      text: "Good pricing and reliable service. My electricity bill has reduced significantly after installation.",
      location: "Nashik, Maharashtra",
    },
    {
      name: "Sanket More",
      text: "Excellent technical team and timely installation. Very happy with the service quality.",
      location: "Chandrapur, Maharashtra",
    },
    {
      name: "Pooja Shinde",
      text: "SolarWaves Nagpur made the solar installation process simple and affordable for us.",
      location: "Kolhapur, Maharashtra",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            What Our Clients Say About{" "}
            <span className="text-gray-900">
              SolarWaves Nagpur
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by homeowners and businesses across Maharashtra for reliable and performance-driven solar solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between border"
            >
              {/* Quote Icon */}
              <Quote className="text-orange-400 mb-4" size={28} />

              {/* Text */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                "{item.text}"
              </p>

              {/* Client Info */}
              <div className="mt-auto">
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                  {item.name}
                </h4>
                <p className="text-xs sm:text-sm text-orange-500">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}