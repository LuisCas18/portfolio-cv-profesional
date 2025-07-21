'use client';

import React from "react";
import { GraduationCap, Award, Calendar, MapPin, BookOpen, ExternalLink, CheckCircle } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: 'Ingeniería en Sistemas Computacionales',
            institution: 'Instituto Tecnológico de México',
            location: 'Villahermosa, Tabasco. México',
            period: '2017 - 2021',
            status: 'Titulado',
            description: 'Especialización en desarrollo de software y arquitecturas de sistemas. Incluye proyectos de desarrollo web y aplicaciones móviles.',
            highlights: [
                // 'Promedio: 9.2/10',
                // 'Mejor proyecto de tesis 2022',
                // 'Participación en hackathons universitarios'
            ]
        },
    ];

    const certifications = [
        {
            name: 'Certificado Profesional de Desarrollador Front-End',
            issuer: 'Meta (Facebook)',
            platform: 'Coursera',
            date: 'En curso',
            status: 'in-progress',
            description: 'Programa profesional completo de desarrollo front-end con React y tecnologías modernas',
            image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
            link: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
            courses: [
                {
                    name: 'Introduction to Front-End Development',
                    completed: true,
                    date: '11 de agosto de 2024',
                    link: 'https://www.coursera.org/account/accomplishments/verify/PU2VN68BZBOR',
                    skills: ['HTML', 'CSS', 'Diseño web responsivo', 'UI', 'Herramientas de desarrollo web'],
                    description: 'Fundamentos del desarrollo web y diferencias entre roles front-end, back-end y fullstack'
                },
                {
                    name: 'Programming with JavaScript',
                    completed: true,
                    date: '24 de agosto de 2024',
                    link: 'https://www.coursera.org/account/accomplishments/verify/FQUDUXJ2IL63',
                    skills: ['JavaScript', 'Programación orientada a objetos', 'Desarrollo front-end', 'TDD (Jest)'],
                    description: 'Programación moderna con JavaScript, pruebas unitarias y manipulación de estructuras de datos'
                },
                {
                    name: 'Version Control',
                    completed: true,
                    date: '1 de septiembre de 2024',
                    link: 'https://www.coursera.org/account/accomplishments/verify/J38QMJG6BNT7',
                    skills: ['Git', 'GitHub', 'Bash', 'Desarrollo web', 'Control de versiones'],
                    description: 'Sistemas de control de versiones, trabajo colaborativo en código y flujo de trabajo con GitHub'
                }
            ]
        },
        {
            name: 'Python Essentials 1',
            issuer: 'Cisco Networking Academy',
            date: 'Junio 2025',
            status: 'completed',
            description: 'Certificado en fundamentos de programación informática y desarrollo de habilidades de codificación con Python',
            image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
            link: 'https://www.credly.com/badges/d27de225-6639-4bc3-8c35-19aebea62e4d/public_url',
            credentialId: '52c39bb7-cd32-4b80-8626-c7639b915d5c',
            skills: ['Python', 'Programación básica', 'Estructuras de datos', 'Algoritmos', 'Lógica de programación'],
            badge: true
        },
        // {
        //   name: 'AWS Certified Developer',
        //   issuer: 'Amazon Web Services',
        //   date: '2023',
        //   status: 'completed',
        //   image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
        //   link: '#'
        // },
        // {
        //   name: 'Node.js Certification',
        //   issuer: 'OpenJS Foundation',
        //   date: '2022',
        //   status: 'completed',
        //   image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
        //   link: '#'
        // },
        // {
        //   name: 'MongoDB Certified Developer',
        //   issuer: 'MongoDB University',
        //   date: '2022',
        //   status: 'completed',
        //   image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
        //   link: '#'
        // }
    ];

    // const courses = [
    //     'Advanced React Patterns - Kent C. Dodds',
    //     'Node.js Microservices - Udemy',
    //     'AWS Cloud Practitioner - A Cloud Guru',
    //     'Docker & Kubernetes - Pluralsight',
    //     'GraphQL with React - Apollo',
    //     'TypeScript Masterclass - Zero to Hero'
    // ];

    return (
        <section id="education" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Educación y <span className="text-primary-600">Certificaciones</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Mi formación académica y desarrollo profesional continuo
                    </p>
                </div>

                {/* Education Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center space-x-3">
                        <GraduationCap className="text-primary-600" size={28} />
                        <span>Formación Académica</span>
                    </h3>

                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                                        <p className="text-lg font-semibold text-primary-600 mb-2">{edu.institution}</p>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                                            <div className="flex items-center space-x-1">
                                                <Calendar size={16} />
                                                <span>{edu.period}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <MapPin size={16} />
                                                <span>{edu.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                        {edu.status}
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-4 leading-relaxed">{edu.description}</p>

                                {/* <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Logros destacados:</h5>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center space-x-2 text-gray-600">
                        <Trophy size={16} className="text-accent-600 flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center space-x-3">
                        <Award className="text-secondary-600" size={28} />
                        <span>Certificaciones Profesionales</span>
                    </h3>

                    <div className="space-y-8">
                        {/* Cisco Python Certificate - Featured */}
                        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200 shadow-lg">
                            <div className="flex flex-col lg:flex-row gap-8">
                                <div className="lg:w-1/3">
                                    <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <div className="text-6xl mb-2">🐍</div>
                                            <div className="text-lg font-bold">Python</div>
                                            <div className="text-sm opacity-80">Cisco Academy</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                                            <CheckCircle size={14} />
                                            <span>Completado</span>
                                        </span>
                                        <div className="flex flex-col items-end space-y-1">
                                            <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-xs font-medium">
                                                Badge Course
                                            </span>
                                            <a
                                                href={certifications[1].link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-cyan-600 hover:text-cyan-700 text-xs font-medium flex items-center space-x-1"
                                            >
                                                <span>Ver en Credly</span>
                                                <ExternalLink size={12} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:w-2/3">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{certifications[1].name}</h4>
                                    <p className="text-lg text-cyan-600 font-semibold mb-1">{certifications[1].issuer}</p>
                                    <p className="text-gray-600 mb-2">Expedición: {certifications[1].date}</p>
                                    {certifications[1].credentialId && (
                                        <p className="text-sm text-gray-500 mb-4">ID de credencial: {certifications[1].credentialId}</p>
                                    )}
                                    <p className="text-gray-600 mb-6 leading-relaxed">{certifications[1].description}</p>

                                    <div className="mb-4">
                                        <h5 className="font-semibold text-gray-900 mb-3">Habilidades desarrolladas:</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {certifications[1]?.skills?.map((skill, i) => (
                                                <span key={i} className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                                        <h6 className="font-bold text-gray-900 mb-2">Certificado Fundamentos de Python 1</h6>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Aprenda los conceptos fundamentales de la programación informática y comience a
                                            desarrollar habilidades de codificación con el lenguaje de programación Python.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Meta Front-End Certificate - Featured */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 shadow-lg">
                            <div className="flex flex-col lg:flex-row gap-8">
                                <div className="lg:w-1/3">
                                    <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg overflow-hidden mb-4">
                                        <img
                                            src={certifications[0].image}
                                            alt={certifications[0].name}
                                            className="w-full h-full object-cover opacity-80"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                                            <BookOpen size={14} />
                                            <span>En curso</span>
                                        </span>
                                        <a
                                            href={certifications[0].link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1"
                                        >
                                            <span>Ver programa</span>
                                            <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </div>

                                <div className="lg:w-2/3">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{certifications[0].name}</h4>
                                    <p className="text-lg text-blue-600 font-semibold mb-1">{certifications[0].issuer}</p>
                                    <p className="text-gray-600 mb-4">{certifications[0].platform} • {certifications[0].date}</p>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{certifications[0].description}</p>

                                    <h5 className="font-semibold text-gray-900 mb-4">Cursos completados:</h5>
                                    <div className="space-y-4">
                                        {certifications[0]?.courses?.map((course, i) => (
                                            <div key={i} className="bg-white rounded-lg p-4 border border-gray-200">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="flex-1">
                                                        <div className="flex items-center space-x-2 mb-1">
                                                            <CheckCircle className="text-green-500" size={18} />
                                                            <h6 className="font-bold text-gray-900">{course.name}</h6>
                                                        </div>
                                                        <p className="text-sm text-gray-600 mb-2">Finalizado: {course.date}</p>
                                                        <p className="text-sm text-gray-600 leading-relaxed mb-3">{course.description}</p>
                                                    </div>
                                                    <a
                                                        href={course.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-1 ml-4"
                                                    >
                                                        <span>Verificar</span>
                                                        <ExternalLink size={12} />
                                                    </a>
                                                </div>

                                                <div>
                                                    <p className="text-xs font-medium text-gray-700 mb-2">Habilidades adquiridas:</p>
                                                    <div className="flex flex-wrap gap-1">
                                                        {course.skills.map((skill, j) => (
                                                            <span key={j} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Other Certifications */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {certifications.slice(2).map((cert, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                                    <div className="h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg mb-4 overflow-hidden">
                                        <img
                                            src={cert.image}
                                            alt={cert.name}
                                            className="w-full h-full object-cover opacity-80"
                                        />
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-2 text-sm">{cert.name}</h4>
                                    <p className="text-gray-600 text-xs mb-2">{cert.issuer}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">{cert.date}</span>
                                        <a
                                            href={cert.link}
                                            className="text-primary-600 hover:text-primary-700 text-xs font-medium"
                                        >
                                            Ver certificado
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Courses Section */}
                {/* <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center space-x-3">
                    <BookOpen className="text-accent-600" size={28} />
                    <span>Cursos y Capacitaciones Adicionales</span>
                </h3>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {courses.map((course, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-300">
                        <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm font-medium">{course}</span>
                        </div>
                    ))}
                    </div>
                </div>
                </div> */}

                {/* Learning Progress */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Progreso de Aprendizaje Continuo</h3>
                    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 border border-primary-100">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="text-white" size={24} />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">3 Cursos Meta</h4>
                                <p className="text-gray-600 text-sm">Certificado Profesional Front-End en progreso</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">🐍</span>
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">Python Essentials</h4>
                                <p className="text-gray-600 text-sm">Certificación Cisco Networking Academy</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BookOpen className="text-white" size={24} />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">Aprendizaje Activo</h4>
                                <p className="text-gray-600 text-sm">Enfoque en tecnologías modernas de desarrollo</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="text-white" size={24} />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">Certificaciones Verificables</h4>
                                <p className="text-gray-600 text-sm">Enlaces directos a certificados oficiales</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Learning Philosophy */}
                {/* <div className="text-center">
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 border border-primary-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Filosofía de Aprendizaje</h3>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Creo firmemente en el aprendizaje continuo y la mejora constante. La tecnología evoluciona 
                rápidamente, por lo que mantengo una mentalidad de crecimiento y busco constantemente 
                nuevas oportunidades para expandir mis conocimientos y habilidades. Mi participación activa 
                en certificaciones de Meta y Cisco demuestra mi compromiso con mantenerme actualizado 
                en las tecnologías más demandadas del mercado, desde desarrollo front-end hasta programación 
                con Python.
                </p>
            </div>
            </div> */}
            </div>
        </section>
    );
};

export default Education;