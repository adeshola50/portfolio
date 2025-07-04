import React from 'react';

const links = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
    return (
        <nav className="hidden md:block fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
                    Adeshola
                </h1>

                {/* Desktop links */}
                <ul className="flex space-x-8">
                    {links.map(({ id, label }) => (
                        <li key={id}>
                            <a href={`#${id}`} className="hover:text-teal-400 transition">
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}