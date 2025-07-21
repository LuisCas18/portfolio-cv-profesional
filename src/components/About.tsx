'use client';

import React from "react";
import { MapPin, Calendar, Award, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Acerca de <span className="text-primary-600">Mí</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desarrollador Fullstack especializado en soluciones empresariales escalables y seguras
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Info Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Mi Especialidad</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Desarrollo de sistemas web responsivos, accesibles y escalables para la gestión de personal, 
                operaciones internas y certificaciones digitales en sectores tecnológico, petrolero, comercial e industrial.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="text-primary-600" size={20} />
                  <span className="font-medium text-gray-900">Ubicación</span>
                </div>
                <p className="text-gray-600">Ciudad de México, México</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="text-secondary-600" size={20} />
                  <span className="font-medium text-gray-900">Experiencia</span>
                </div>
                <p className="text-gray-600">6 años</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl p-6 border border-accent-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Especialidades Técnicas</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Laravel & Livewire',
                  'CodeIgniter & Yii2',
                  'APIs REST',
                  'Tailwind CSS',
                  'Alpine.js',
                  'Automatización'
                ].map((specialty, index) => (
                  <span key={index} className="text-sm bg-white px-3 py-1 rounded-full text-gray-700 border border-gray-200">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Description */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Soy un desarrollador Fullstack con 6 años de experiencia especializado en el desarrollo 
                de sistemas web responsivos, accesibles y escalables. He trabajado en proyectos empresariales 
                privados en sectores tecnológico, petrolero, comercial e industrial, liderando soluciones 
                fullstack a medida, seguras y fáciles de mantener.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Mi experiencia abarca desde la gestión de personal y operaciones internas hasta el desarrollo 
                de certificaciones digitales. Tengo sólida experiencia en frameworks como Laravel, Livewire, 
                CodeIgniter y Yii2, así como dominio de herramientas modernas como Tailwind CSS, Alpine.js 
                y consumo de APIs REST.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Además, cuento con amplia experiencia en diseño de sitios web administrables (landing pages, 
                portales corporativos, servicios profesionales y blogs), automatización de procesos y 
                generación de certificados con validación en línea.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { number: '50+', label: 'Proyectos' },
                { number: '6', label: 'Años Exp.' },
                { number: '15+', label: 'Tecnologías' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;