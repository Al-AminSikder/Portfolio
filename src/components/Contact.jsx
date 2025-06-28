import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contacts"
      className="bg-[#1f232a] py-20 text-white max-w-7xl mx-auto px-6"
    >
      {/* Centered Heading */}
      <h2 className="text-4xl font-semibold mb-12 text-[#ff7867] text-center">
        Contact
      </h2>
      {/* Full-width, centered contact info */}
      <div className="flex justify-center">
        <div className="bg-[#181f26] rounded-lg p-8 shadow w-full max-w-3xl">
          <p className="mb-6 text-gray-300 text-lg text-center sm:text-left flex items-center justify-center sm:justify-start gap-3">
            <FaEnvelope className="text-[#ff7867]" size={24} />
            <span className="font-semibold text-[#ff7867] text-lg">Email:</span>{" "}
            <a href="mailto:dummy@email.com" className="hover:underline text-white text-lg">
              alamiskdr@gmail.com
            </a>
          </p>
          <p className="mb-6 text-gray-300 text-lg text-center sm:text-left flex items-center justify-center sm:justify-start gap-3">
            <FaPhone className="text-[#ff7867]" size={24} />
            <span className="font-semibold text-[#ff7867] text-lg">Phone:</span>{" "}
            <a href="tel:+1234567890" className="hover:underline text-white text-lg">
              +8801925323331
            </a>
          </p>
          <p className="mb-2 text-gray-300 text-lg text-center sm:text-left flex items-center justify-center sm:justify-start gap-3">
            <FaWhatsapp className="text-[#25d366]" size={24} />
            <span className="font-semibold text-[#ff7867] text-lg">WhatsApp:</span>{" "}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-white text-lg"
            >
              Chat on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;