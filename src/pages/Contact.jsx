import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    const whatsappNumber = "919890938047"; // Without + symbol

    const whatsappMessage = `
Hello, I have an enquiry.

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="w-full bg-white pb-20 pt-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Have a question about solar installation or pricing? Our team will
            be happy to assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border">
            <h2 className="text-xl font-semibold text-slate-800 mb-6">
              Send a Message
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400"
              />

              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-3 rounded-md hover:bg-slate-800 transition"
              >
                Send Message on WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="text-slate-700" size={22} />
              <div>
                <h4 className="font-medium text-slate-900">Phone</h4>
                <p className="text-slate-600 text-sm">+91 9890938047</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-slate-700" size={22} />
              <div>
                <h4 className="font-medium text-slate-900">Email</h4>
                <p className="text-slate-600 text-sm">
                  solarwaves2025@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-slate-700" size={22} />
              <div>
                <h4 className="font-medium text-slate-900">Address</h4>
                <p className="text-slate-600 text-sm">
                  Block No. 143, Sheela Complex, Wadi, Nagpur.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl overflow-hidden border">
              <iframe
                title="Nagpur Location"
                src="https://www.google.com/maps?q=Block%20No%20143%2C%20Sheela%20Complex%2C%20Wadi%2C%20Nagpur%2C%20Maharashtra%20440023%2C%20India&output=embed"
                className="w-full h-80"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}