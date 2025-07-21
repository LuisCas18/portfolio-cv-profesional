'use client';

import React from "react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary-200 to-secondary-200 opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-accent-200 to-primary-200 opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8 animate-slide-down">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-600">LC</span>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              <span className="block">Hola, soy</span>
              <span className="block bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">Luis Eduardo Castro Bautista</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
              Desarrollador <span className="font-semibold text-primary-600">Fullstack</span> con 6 años de experiencia
              en el desarrollo de sistemas web responsivos, escalables y seguros para empresas de diversos sectores.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button onClick={scrollToAbout} className="px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2">
                <span>Ver mi trabajo</span>
                <ArrowDown size={18} />
              </button>

              <a href="/assets/docs/CV 2025 - Luis Eduardo Castro Bautista.pdf"
                download
                className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <Download size={18} />
                <span>Descargar CV</span>
              </a>
            </div>

            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: 'https://github.com/LuisCas18', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/luis-eduardo-castro-bautista-7b49b0211/', label: 'LinkedIn' },
                { icon: Mail, href: '#contact', label: 'Email' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero;