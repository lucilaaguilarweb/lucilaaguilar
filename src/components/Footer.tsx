import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-normal mb-6 font-baskervville">
              Construyamos juntos un futuro regenerativo
            </h3>
            <p className="text-gray-400">
              Queremos colaborar con quienes creen en un diseño que une
              innovación, sostenibilidad y belleza.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-normal mb-4 font-baskervville mt-8">
                Contacto
              </h4>
              <a
                href="mailto:info@lucilaaguilar.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors !normal-case !no-underline"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@lucilaaguilar.com</span>
              </a>
            </div>

            <div>
              <h4 className="text-lg font-normal mb-4 font-baskervville">
                Dirección
              </h4>
              <a
                href="https://maps.google.com/?q=Av.+Prolongación+Reforma+1190,+oficina+2709.+Col.+Cruz+Manca,+Santa+Fe,+CDMX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors !normal-case !no-underline"
              >
                <svg
                  className="w-5 h-5 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div>Av. Prolongación Reforma 1190,</div>
                  <div>oficina 2709. Col. Cruz Manca, Santa Fe, CDMX.</div>
                </div>
              </a>
            </div>

            <div>
              <h4 className="text-lg font-normal mb-4 font-baskervville">
                Teléfono
              </h4>
              <a
                href="tel:+525559257655"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors !normal-case !no-underline"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+ 52 (55) 5925 7655</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href=" https://www.instagram.com/lucilaarq/?hl=es-la"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-black"
              >
                <Icon icon="mdi:instagram" className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/lucilarq/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-black"
              >
                <Icon icon="mdi:facebook" className="w-6 h-6" />
              </a>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 Lucila Aguilar Arquitectura. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
