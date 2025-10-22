"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Single menu items array
  const menuItems = [
    { href: "/proyectos", label: "Proyectos" },
    { href: "/cocoon-project", label: "Cocoon Project" },
    { href: "/estudio", label: "Estudio" },
    { href: "/bambu", label: "Bambú" },
    { href: "/medios", label: "Medios" },
    { href: "/exposiciones", label: "Exposiciones" },
    { href: "/contacto", label: "Contacto" },
  ];

  // Single menu component with conditional styling
  const MenuItems = ({
    isMobile = false,
    onItemClick,
  }: {
    isMobile?: boolean;
    onItemClick?: () => void;
  }) => (
    <>
      {menuItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onItemClick}
          className={`font-montserrat transition-colors ${
            isMobile
              ? "block text-2xl font-normal text-gray-900 hover:text-gray-600"
              : "text-sm text-gray-700 hover:text-gray-900"
          }`}
        >
          {item.label}
        </a>
      ))}
    </>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo.png"
              alt="Lucila Aguilar"
              width={200}
              height={100}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <MenuItems />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6">
              <div className="text-xl font-normal text-gray-900 font-montserrat">
                Menú
              </div>
              <button
                onClick={closeMenu}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 px-6 py-8">
              <nav className="space-y-6">
                <MenuItems isMobile={true} onItemClick={closeMenu} />
              </nav>
            </div>

            {/* Menu Footer */}
            <div className="p-6 border-t border-gray-200">
              <div className="text-sm text-gray-500 font-montserrat">
                Lucila Aguilar Arquitectura
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
