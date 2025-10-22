"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add actual form submission logic here
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative md:h-[70vh] h-[60vh] flex items-center justify-center bg-gray-100 pt-20 mt-8">
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-normal text-black mb-8 font-baskervville">
            CONTACTO
          </h1>

          {/* Contact Information - Subtle in Header */}
          <div className="gap-8 text-center">
            <div className="space-y-2">
              <address className="text-sm text-gray-700 not-italic">
                Av. Prolongación Reforma 1190
                <br />
                oficina 2709. Col. Cruz Manca
                <br />
                Santa Fe, CDMX
              </address>
            </div>

            <div className="space-y-2 mt-4">
              <div className="text-sm md:flex md:gap-5">
                <a
                  href="mailto:lucila@lucilaaguilar.com"
                  className="flex items-center justify-center gap-2 hover:text-black transition-colors duration-200 md:mb-0 mb-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  lucila@lucilaaguilar.com
                </a>
                <a
                  href="mailto:jorge@lucilaaguilar.com"
                  className="flex items-center justify-center gap-2 hover:text-black transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  jorge@lucilaaguilar.com
                </a>
              </div>
              <a
                href="tel:+525559257655"
                className="flex items-center justify-center gap-2 hover:text-black transition-colors duration-200 text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                + 52 (55) 5925 7655
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl font-normal text-black mb-8 font-baskervville">
            Cuestionario
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nombre *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                placeholder="Tu nombre completo"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Correo Electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                placeholder="tu@email.com"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                placeholder="+52 (55) 1234 5678"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mensaje *
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-800 px-8 py-4 transition-all duration-200 font-medium uppercase tracking-wider"
            >
              Enviar Mensaje
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4">* Campos obligatorios</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
