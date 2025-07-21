'use client';

import React from "react";
import { Briefcase, Calendar, MapPin, ExternalLink, ArrowRight, Users, Code, Database } from 'lucide-react';

const Experience = () => {

    const experiences = [
        {
            id: 1,
            title: 'Gerente de Software',
            company: 'SICCOMS – Sistemas Integrales en Consultoría, Comercialización y Servicios',
            location: 'Villahermosa, Tabasco. México',
            period: 'Mayo 2022 - Actualidad',
            type: 'Tiempo completo',
            description: 'Lidero la arquitectura y desarrollo de sistemas internos y externos, coordinando las fases de análisis, diseño, desarrollo, pruebas e implementación. Gestiono flujos de trabajo en equipo mediante metodologías ágiles (Scrum).',
            achievements: [
                'Lideré la migración de sistemas legacy y automatización de procesos críticos',
                'Supervisé mejoras de rendimiento en plataformas empresariales',
                'Coordiné equipos usando Slack, ClickUp, Trello y GitHub bajo metodologías ágiles',
                'Desarrollé soluciones fullstack para sectores médico, industrial y logístico'
            ],
            technologies: ['Laravel 12', 'CodeIgniter 3', 'Yii2', 'PHP', 'MySQL', 'Livewire', 'Tailwind CSS', 'Alpine.js', 'Bootstrap', 'jQuery'],
            tools: ['Slack', 'ClickUp', 'Trello', 'GitHub', 'VPS Linux', 'DNS'],
            featured: true,
            clients: [
                {
                    name: 'Laboratorios ABKA – Unidad de Servicios Médicos',
                    project: 'SIBCLOUD ERP Clínico',
                    description: 'Sistema ERP clínico completo con flujo de atención médica desde registro en tablet hasta emisión de certificados médicos únicos.',
                    achievements: [
                        'Migración de CodeIgniter 3 a Laravel 12 con Livewire',
                        'Diseño de flujo completo de atención médica digitalizada',
                        'Módulos especializados para audiometrías, historiales clínicos y certificados',
                        'Roles diferenciados para recepcionistas, médicos y administradores',
                        'Sistema de gestión documental tipo Google Drive con control de acceso'
                    ],
                    stack: ['Laravel', 'Livewire', 'Tailwind CSS', 'Flowbite', 'Alpine.js', 'MySQL']
                },
                {
                    name: 'Grupo Benítez',
                    project: 'Benitez Group V7.0 & Portal Web',
                    description: 'Sistema intranet para automatización de certificados de grúas y operadores con validación pública anti-fraude.',
                    achievements: [
                        'Automatización de certificados DC-3 en PDF con validación pública',
                        'Migración de dominio a VPS con mejoras de estabilidad y seguridad',
                        'Rediseño completo del sitio web benitezgroup.com.mx',
                        'Sistema de exámenes en línea con calificación crediticia automatizada',
                        'Módulo de validación pública para verificar autenticidad de certificados'
                    ],
                    stack: ['Yii2', 'PHP', 'MySQL', 'HTML5', 'CSS', 'JavaScript', 'Bootstrap', 'TCPDF', 'VPS Linux']
                },
                {
                    name: 'Logística Integral de Reforma Sureste (LIRSA)',
                    project: 'LIRSA V5.0 & Journey Management V6.0',
                    description: 'Migración y optimización de sistema intranet con módulo especializado validado por Halliburton.',
                    achievements: [
                        'Migración completa del sistema obsoleto 2019.Lirsa.net',
                        'Desarrollo de Journey Management V6.0 validado por Halliburton',
                        'Reducción del 65% en tiempo de operación y costos de mantenimiento',
                        'Mejoras significativas en estructura interna y experiencia de usuario'
                    ],
                    stack: ['CodeIgniter 3', 'PHP', 'MySQL', 'jQuery', 'Bootstrap', 'AJAX']
                }
            ]
        },
        {
            id: 2,
            title: 'Desarrollador Web Jr.',
            company: 'Hipercubica, Ingeniería & Sistemas',
            location: 'Villahermosa, Tabasco. México',
            period: 'Octubre 2021 - Marzo 2022',
            type: 'Tiempo completo',
            description: 'Desarrollé sistemas web empresariales y sitios corporativos para diversos clientes en sectores petrolero, tecnológico y comercial, enfocándome en automatización de procesos y optimización de flujos operativos.',
            achievements: [
                'Desarrollé sistemas intranet que redujeron tiempos operativos hasta en 75%',
                'Implementé módulos de punto de venta con emisión de tickets automatizada',
                'Creé formularios dinámicos con envío automatizado de correos',
                'Administré hosting, correos empresariales y gestión de archivos'
            ],
            technologies: ['CodeIgniter 3', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'TCPDF'],
            tools: ['Hosting cPanel', 'DNS', 'Mailer PHP'],
            featured: false,
            clients: [
                {
                    name: 'MAELF OIL SERVICES S.A. DE C.V.',
                    project: 'MAELF TEAM V5.0 & Portal Corporativo',
                    description: 'Sistema intranet completo para automatización de gestión de ventas y portal web para registro de capacitaciones.',
                    achievements: [
                        'Automatización de gestión de ventas (cotizaciones, pedidos y remisiones)',
                        'Generación automática de certificados en PDF',
                        'Módulo de punto de venta con emisión de tickets por sucursal',
                        'Optimización del flujo de documentación interna (reducción del 75%)',
                        'Desarrollo del sitio maelf.com con formularios especializados',
                        'Sistema de registro de empresas y participantes en capacitaciones'
                    ],
                    stack: ['CodeIgniter 3', 'PHP', 'MySQL', 'jQuery', 'Bootstrap', 'TCPDF']
                },
                {
                    name: 'Plan b Technologies',
                    project: 'Portal Web planbtech.mx',
                    description: 'Sitio web especializado en renta y mantenimiento de campers en Tabasco con sistema de contacto automatizado.',
                    achievements: [
                        'Rediseño completo del sitio web planbtech.mx',
                        'Implementación de formularios dinámicos con envío automatizado',
                        'Mejora del alcance comercial mediante automatización de contactos',
                        'Optimización de la experiencia de usuario para el sector turístico'
                    ],
                    stack: ['CodeIgniter 3', 'PHP', 'HTML', 'CSS', 'JavaScript', 'Mailer PHP']
                },
                {
                    name: 'ACEROS HENFAB',
                    project: 'Portal Corporativo aceroshenfab.com',
                    description: 'Sitio web corporativo para distribución de materiales de construcción con gestión integral de hosting.',
                    achievements: [
                        'Desarrollo completo del sitio web aceroshenfab.com',
                        'Especialización en distribución de materiales para construcción',
                        'Administración integral de hosting y correos empresariales',
                        'Control de archivos y facilitación de comunicación con clientes',
                        'Gestión de DNS y configuración de servicios de correo'
                    ],
                    stack: ['PHP', 'HTML', 'CSS', 'cPanel', 'DNS']
                }
            ]
        },
        {
            id: 3,
            title: 'Desarrollador Web Becario',
            company: 'Hipercubica, Ingeniería & Sistemas',
            location: 'Villahermosa, Tabasco. México',
            period: 'Agosto 2019 - Mayo 2020',
            type: 'Becario',
            description: 'Inicié mi carrera profesional desarrollando sitios web corporativos y sistemas de contacto automatizado, enfocándome en crear soluciones responsivas y optimizadas para diversos sectores empresariales.',
            achievements: [
                'Desarrollé mi primer sitio web corporativo completo y responsivo',
                'Implementé sistemas de contacto automatizado por servicio',
                'Optimicé sitios para carga rápida y accesibilidad móvil',
                'Aprendí administración de sitios web y gestión de contenido'
            ],
            technologies: ['CodeIgniter 3', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
            tools: ['cPanel', 'DNS', 'Hosting'],
            featured: false,
            clients: [
                {
                    name: 'Megaloading',
                    project: 'Portal Corporativo megaloading.net',
                    description: 'Sitio web corporativo enfocado en la oferta de servicios de Internet y videovigilancia para el estado de Tabasco.',
                    achievements: [
                        'Diseño y desarrollo completo del sitio web corporativo megaloading.net',
                        'Implementación de sistema de contacto automatizado por servicio',
                        'Envío de correos personalizados para impulsar alcance comercial',
                        'Desarrollo responsivo optimizado para dispositivos móviles',
                        'Sitio administrable con optimización para carga rápida',
                        'Enfoque en servicios de Internet y videovigilancia regional'
                    ],
                    stack: ['CodeIgniter 3', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript']
                }
            ]
        }
    ];

    const projects = [
        {
            title: 'SIBCLOUD ERP Clínico',
            description: 'Sistema ERP médico completo con flujo digitalizado de atención y certificaciones',
            image: '/assets/img/abka.png',
            technologies: ['Laravel', 'Livewire', 'Tailwind CSS', 'MySQL'],
            link: '#',
            client: 'Laboratorios ABKA'
        },
        {
            title: 'Sistema de Certificaciones',
            description: 'Plataforma de certificación para grúas y operadores con validación anti-fraude',
            image: '/assets/img/benitez.png',
            technologies: ['Yii2', 'PHP', 'TCPDF', 'MySQL'],
            link: '#',
            client: 'Grupo Benítez'
        },
        {
            title: 'MAELF TEAM V5.0',
            description: 'Sistema intranet para gestión de ventas y certificaciones en sector petrolero',
            image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
            technologies: ['CodeIgniter', 'PHP', 'MySQL', 'TCPDF'],
            link: '#',
            client: 'MAELF OIL SERVICES'
        },
        {
            title: 'Journey Management System',
            description: 'Sistema de gestión logística validado por Halliburton con optimización de procesos',
            image: '/assets/img/lirsa.png',
            technologies: ['CodeIgniter', 'jQuery', 'Bootstrap', 'MySQL'],
            link: '#',
            client: 'LIRSA'
        },
        {
            title: 'Portal Plan b Technologies',
            description: 'Sitio web para renta de campers con formularios dinámicos automatizados',
            image: '/assets/img/planb.png',
            technologies: ['CodeIgniter', 'PHP', 'Mailer PHP', 'JavaScript'],
            link: '#',
            client: 'Plan b Technologies'
        },
        {
            title: 'Portal Megaloading',
            description: 'Sitio corporativo para servicios de Internet y videovigilancia en Tabasco',
            image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
            technologies: ['CodeIgniter', 'PHP', 'MySQL', 'JavaScript'],
            link: '#',
            client: 'Megaloading'
        }
    ];

    return (
        <section id="experience" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Mi <span className="text-primary-600">Experiencia</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        6 años desarrollando soluciones empresariales para diversos sectores, desde sistemas ERP, Tecnológicos, Industriales, Logistica.
                    </p>
                </div>

                { /* Experience Timeline */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Trayectoria Profesional</h3>
                    <div className="relative">
                        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-600 to-secondary-600"></div>

                        {experiences.map((exp, index) => (
                            <div key={exp.id} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                                {/* Timeline dot */}
                                <div className={`absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 ${exp.featured ? 'bg-primary-600' : exp.type === 'Becario' ? 'bg-accent-600' : 'bg-secondary-600'} rounded-full border-4 border-white shadow-lg z-10`}></div>

                                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                    <div className={`bg-gradient-to-br ${exp.featured ? 'from-primary-50 to-secondary-50 border-primary-200' : exp.type === 'Becario' ? 'from-accent-50 to-orange-50 border-accent-200' : 'from-gray-50 to-white border-gray-200'} rounded-xl p-8 border shadow-lg hover:shadow-xl transition-all duration-300`}>
                                        <div className="flex items-start justify-between mb-6">
                                            <div>
                                                <h4 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h4>
                                                <p className="text-lg font-semibold text-primary-600 mb-3">{exp.company}</p>
                                                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                                                    <div className="flex items-center space-x-1">
                                                        <Calendar size={16} />
                                                        <span>{exp.period}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <MapPin size={16} />
                                                        <span>{exp.location}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Briefcase size={16} />
                                                        <span>{exp.type}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {exp.featured && (
                                                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                                    Actual
                                                </span>
                                            )}
                                            {exp.type === 'Becario' && (
                                                <span className="bg-accent-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                                    Inicio
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                                        {/* Main Achievements */}
                                        <div className="mb-6">
                                            <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                                                <ArrowRight size={18} className="text-primary-600 mr-2" />
                                                Logros principales:
                                            </h5>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start space-x-2 text-gray-600">
                                                        <ArrowRight size={14} className="text-secondary-600 mt-1 flex-shrink-0" />
                                                        <span className="text-sm">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Technologies */}
                                        <div className="mb-6">
                                            <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                                                <Code size={18} className="text-accent-600 mr-2" />
                                                Stack Tecnológico:
                                            </h5>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, i) => (
                                                    <span key={i} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Tools */}
                                        <div className="mb-8">
                                            <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                                                <Database size={18} className="text-secondary-600 mr-2" />
                                                Herramientas:
                                            </h5>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.tools.map((tool, i) => (
                                                    <span key={i} className="px-3 py-1 bg-secondary-50 rounded-full text-xs font-medium text-secondary-700 border border-secondary-200">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Client Projects */}
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                                                <Users size={18} className="text-primary-600 mr-2" />
                                                Proyectos por Cliente:
                                            </h5>
                                            <div className="space-y-6">
                                                {exp.clients.map((client, i) => (
                                                    <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                                                        <div className="mb-4">
                                                            <h6 className="text-lg font-bold text-gray-900 mb-1">{client.name}</h6>
                                                            <p className="text-primary-600 font-semibold mb-2">{client.project}</p>
                                                            <p className="text-gray-600 text-sm leading-relaxed">{client.description}</p>
                                                        </div>

                                                        <div className="mb-4">
                                                            <h5 className="font-medium text-gray-900 mb-2 block">Logros específicos:</h5>
                                                            <ul className="space-y-1">
                                                                {client.achievements.map((achievement, j) => (
                                                                    <li key={j} className="flex items-start space-x-2 text-gray-600">
                                                                        <ArrowRight size={12} className="text-accent-600 mt-1 flex-shrink-0" />
                                                                        <span className="text-xs">{achievement}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <h5 className="font-medium text-gray-900 mb-2 block">Stack específico:</h5>
                                                            <div className="flex flex-wrap gap-1">
                                                                {client.stack.map((tech, j) => (
                                                                    <span key={j} className="px-2 py-1 bg-accent-50 text-accent-700 rounded text-xs font-medium">
                                                                        {tech}
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
                            </div>
                        ))}
                    </div>
                </div>

                {/* Career Evolution */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Evolución Profesional</h3>
                    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 border border-primary-100">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-lg">2019</span>
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">Desarrollador Becario</h4>
                                <p className="text-gray-600 text-sm">Inicio en desarrollo web con sitios corporativos y sistemas básicos</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-lg">2021</span>
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">Desarrollador Jr.</h4>
                                <p className="text-gray-600 text-sm">Sistemas empresariales complejos y automatización de procesos</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-lg">2022</span>
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">Gerente de Software</h4>
                                <p className="text-gray-600 text-sm">Liderazgo técnico y arquitectura de sistemas escalables</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Projects */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Proyectos Destacados</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                                <div className="h-48 bg-gradient-to-br from-primary-500 to-secondary-500 relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium">
                                            {project.client}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.link}
                                        className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium text-sm"
                                    >
                                        <span>Ver detalles</span>
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Impact Summary */}
                <div className="mt-16 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 border border-primary-100">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Impacto en Números</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary-600 mb-2">75%</div>
                                <div className="text-sm text-gray-600">Reducción en tiempos operativos</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-secondary-600 mb-2">65%</div>
                                <div className="text-sm text-gray-600">Mejora en costos de mantenimiento</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-accent-600 mb-2">10+</div>
                                <div className="text-sm text-gray-600">Clientes empresariales</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary-600 mb-2">6</div>
                                <div className="text-sm text-gray-600">Sectores industriales</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Experience;