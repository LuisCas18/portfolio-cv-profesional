'use client';

import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Luis Eduardo Castro
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Desarrollador Full Stack apasionado por crear soluciones tecnológicas 
              innovadoras que hagan la diferencia en el mundo digital.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[
                { label: 'Inicio', href: '#home' },
                { label: 'Acerca', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Experiencia', href: '#experience' },
                { label: 'Educación', href: '#education' },
                { label: 'Contacto', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 luis.cas18@outlook.com</p>
              {/* <p>📱 +52 55 1234 5678</p> */}
              <p>📍 Villahermosa, Tabasco. México</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-gray-300 mb-4 md:mb-0">
              <span>Hecho con</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>usando NextJS + Tailwind CSS</span>
            </div>

            <div className="flex items-center space-x-4">
              <p className="text-gray-300">
                © {currentYear} Luis Eduardo Castro Bautista. Todos los derechos reservados.
              </p>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transform hover:-translate-y-1 transition-all duration-300"
                aria-label="Volver arriba"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary-600/10 to-secondary-600/10"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-accent-600/10 to-primary-600/10"></div>
      </div>
    </footer>
  );
};

export default Footer;