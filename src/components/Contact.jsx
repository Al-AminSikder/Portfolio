import React from "react";

function Contact() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto" id="contact">
      <h2 className="text-3xl font-bold text-indigo-900 mb-8">Contact</h2>
      <div className="bg-white/80 rounded-lg shadow p-6 space-y-4">
        <p className="text-lg">
          Email: <a href="mailto:dummy@email.com" className="text-cyan-700 underline">dummy@email.com</a>
        </p>
        <p className="text-lg">
          Phone: <a href="tel:+1234567890" className="text-cyan-700 underline">+1234567890</a>
        </p>
        <p className="text-lg">
          WhatsApp: <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline">Chat on WhatsApp</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;