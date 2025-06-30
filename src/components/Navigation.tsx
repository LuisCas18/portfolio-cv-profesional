'use client';

import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Code, Briefcase, GraduationCap, Mail } from "lucide-react";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navItems = [
        { id: 'home', label: 'Inicio', icon: Home },
        { id: 'about', label: 'Acerca', icon: User },
        { id: 'skills', label: 'Skills', icon: Code },
        { id: 'experience', label: 'Experiencia', icon: Briefcase },
        { id: 'education', label: 'Educación', icon: GraduationCap },
        { id: 'contact', label: 'Contacto', icon: Mail }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const section = navItems.map(item => item.id);
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); 
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"></h1>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navigation;


