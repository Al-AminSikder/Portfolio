import React from "react";

function Contact() {
  return (
    <section id="contacts" className="bg-[#1f232a] py-20 text-white max-w-6xl mx-auto px-6">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold mb-6 text-[#ff7867]">Contact</h2>
        <div className="bg-[#181f26] rounded-lg p-6 shadow">
          <p className="mb-2 text-gray-300">
            <span className="font-semibold text-[#ff7867]">Email:</span> <a href="mailto:dummy@email.com" className="hover:underline text-white">dummy@email.com</a>
          </p>
          <p className="mb-2 text-gray-300">
            <span className="font-semibold text-[#ff7867]">Phone:</span> <a href="tel:+1234567890" className="hover:underline text-white">+1234567890</a>
          </p>
          <p className="mb-2 text-gray-300">
            <span className="font-semibold text-[#ff7867]">WhatsApp:</span> <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">Chat on WhatsApp</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;