'use client';

import React from "react";
import { Code, Database, Globe, Wrench, Zap, Server } from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            title: 'Lenguajes de Programación',
            icon: Code,
            color: 'primary',
            skills: [
                { name: 'PHP', level: 95 },
                { name: 'JavaScript', level: 90 },
                { name: 'Python', level: 60 },
                { name: 'HTML5', level: 95 },
                { name: 'CSS3', level: 90 },
                { name: 'jQuery', level: 85 },
                { name: 'AJAX/JSON', level: 88 }
            ]
        },
        {
            title: 'Frameworks y Librerías',
            icon: Globe,
            color: 'secondary',
            skills: [
                { name: 'Laravel', level: 95 },
                { name: 'Livewire', level: 90 },
                { name: 'CodeIgniter 3 & 4', level: 92 },
                { name: 'Yii2', level: 85 },
                { name: 'Tailwind CSS', level: 90 },
                { name: 'Bootstrap', level: 88 },
                { name: 'Alpine.js', level: 85 }
            ]
        },
        {
            title: 'Bases de Datos',
            icon: Database,
            color: 'accent',
            skills: [
                { name: 'MySQL', level: 95 },
                { name: 'PostgreSQL', level: 85 },
                { name: 'SQLite', level: 80 },
                { name: 'MongoDB', level: 70 }
            ]
        },
        {
            title: 'DevOps y Infraestructura',
            icon: Server,
            color: 'primary',
            skills: [
                { name: 'Docker', level: 80 },
                // { name: 'Kubernetes', level: 70 },
                { name: 'Nginx', level: 85 },
                { name: 'Apache', level: 90 },
                { name: 'Git', level: 95 },
                { name: 'CI/CD', level: 75 }
            ]
        },
        {
            title: 'Herramientas y Tecnologías',
            icon: Wrench,
            color: 'secondary',
            skills: [
                { name: 'Composer', level: 90 },
                { name: 'npm', level: 85 },
                { name: 'Webpack', level: 80 },
                { name: 'Bash/Shell Scripting', level: 75 },
                { name: 'REST APIs', level: 90 },
                { name: 'JSON/XML', level: 85 },
                // { name: 'GraphQL', level: 70 },
                { name: 'GitHub', level: 90 },
                { name: 'Trello', level: 88 },
                { name: 'ClickUp', level: 85 },
                { name: 'Slack', level: 90 },
                { name: 'Scrum', level: 85 }
            ]
        },
        {
            title: 'Sistemas & Hosting',
            icon: Server,
            color: 'primary',
            skills: [
                { name: 'Windows', level: 90 },
                { name: 'CentOS', level: 85 },
                { name: 'VPS Linux', level: 88 },
                { name: 'Gestión DNS', level: 85 },
                { name: 'Hosting', level: 87 }
            ]
        },
    ];

    const getColorClasses = (color: string) => {
        const colors = {
            primary: {
                bg: 'from-primary-50 to-primary-100',
                border: 'border-primary-200',
                icon: 'bg-primary-600',
                bar: 'bg-primary-600',
                text: 'text-primary-600'
            },
            secondary: {
                bg: 'from-secondary-50 to-secondary-100',
                border: 'border-secondary-200',
                icon: 'bg-secondary-600',
                bar: 'bg-secondary-600',
                text: 'text-secondary-600'
            },
            accent: {
                bg: 'from-accent-50 to-accent-100',
                border: 'border-accent-200',
                icon: 'bg-accent-600',
                bar: 'bg-accent-600',
                text: 'text-accent-600'
            }
        };
        return colors[color as keyof typeof colors];
    };

    const specializations = [
        {
            title: 'Desarrollo Fullstack',
            description: 'Sistemas web completos desde frontend hasta backend',
            icon: '🚀',
            technologies: ['Laravel', 'Livewire', 'MySQL', 'Tailwind CSS']
        },
        {
            title: 'Sistemas Empresariales',
            description: 'ERP, CRM y sistemas de gestión a medida',
            icon: '🏢',
            technologies: ['CodeIgniter', 'Yii2', 'PHP', 'Bootstrap']
        },
        {
            title: 'Certificaciones Digitales',
            description: 'Sistemas de certificación con validación anti-fraude',
            icon: '📋',
            technologies: ['TCPDF', 'APIs REST', 'Validación Online']
        },
        {
            title: 'Automatización',
            description: 'Procesos automatizados y optimización de flujos',
            icon: '⚡',
            technologies: ['AJAX', 'JSON', 'Alpine.js', 'jQuery']
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Mis <span className="text-primary-600">Habilidades</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stack tecnológico especializado en desarrollo web empresarial y sistemas escalables.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        const colors = getColorClasses(category.color);

                        return (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${colors.bg} rounded-xl p-6 ${colors.border} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                            >
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center`}>
                                        <Icon className="text-white" size={24} />
                                    </div>
                                    <h3 className={`text-xl font-semibold ${colors.text}`}>
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium text-gray-700">
                                                    {skill.name}
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-white rounded-full h-2 shadow-inner">
                                                <div className={`h-2 ${colors.bar} rounded-full transition-all duration-1000 ease-out`} style={{ width: `${skill.level}%` }}>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Specializations */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Especializaciones
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {specializations.map((spec, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:translate-y-1">
                                <div className="text-center mb-4">
                                    <div className="text-4xl mb-3">{spec.icon}</div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{spec.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{spec.description}</p>
                                </div>
                                <div className="flex flex-wrap gap-1 justify-center">
                                    {spec.technologies.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs font-medium ">{tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Technologies */}
                <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-8">
                        Stack Tecnológico Completo
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'Laravel 12', 'Livewire', 'CodeIgniter 3 & 4', 'Yii2', 'PHP', 'JavaScript',
                            'MySQL', 'SQLite', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap',
                            'Alpine.js', 'jQuery', 'AJAX', 'JSON', 'APIs RESTful', 'TCPDF',
                            'GitHub', 'Trello', 'ClickUp', 'Slack', 'Scrum', 'Windows', 'CentOS',
                            'VPS Linux', 'DNS', 'Hosting', 'Wireframing', 'Debugging',
                            'Web Responsivo', 'Adobe Photoshop'
                        ].map((tech, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm border border-gray-200 hover:shadow-md hover:border-primary-300 transition-all duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Methodology Section */}
                <div className="mt-16 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 border border-primary-100">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Metodología de Trabajo</h3>
                        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                            Utilizo metodologías ágiles (Scrum) para garantizar entregas eficientes y de calidad.
                            Mi enfoque se centra en el desarrollo de soluciones escalables, seguras y fáciles de mantener,
                            con especial atención en la automatización de procesos y la optimización del rendimiento.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Zap className="text-white" size={24} />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Desarollo Ágil</h4>
                                <p className="text-gray-600 text-sm">Metodológia Scrum para entregas rápidas y eficientes.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Database className="text-white" size={24} />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Arquitectura Escalable</h4>
                                <p className="text-gray-600 text-sm">Sistemas diseñados para crecer con el negocio.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Wrench className="text-white" size={24} />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Automatización</h4>
                                <p className="text-gray-600 text-sm">Proceso optimizados y automatizados.</p>
                            </div>
                            {/* <div className="text-center">
                                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Smartphone className="text-white" size={24} />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Responsividad</h4>
                                <p className="text-gray-600 text-sm">Diseños Web responsivos adaptados a los equipos.</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills;