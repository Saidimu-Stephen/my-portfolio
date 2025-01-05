'use client'
import React, { useState } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-900  text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Branding */}
                <div className="text-2xl font-bold">
                    <a href="/" className="hover:underline">
                        Saidimu Stephen
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-sm font-medium">
                    <a
                        href="#about"
                        className="hover:underline hover:text-blue-400 transition"
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="hover:underline hover:text-blue-400 transition"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="hover:underline hover:text-blue-400 transition"
                    >
                        Contact
                    </a>
                    <a
                        href="https://github.com/Saidimu-Stephen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-blue-400 transition"
                    >
                        GitHub
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                    aria-label="Toggle Menu"
                >
                    {/* Menu Icon */}
                    {isMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="relative px-2 bg-green-400">
                    <div className="absolute    px-2 left-3/4 w-1/2">
                        <nav className="md:hidden  bg-gray-800">
                            <ul className="flex flex-col space-y-4 px-2 py-4 text-sm font-medium">
                                <li>
                                    <a
                                        href="#about"
                                        className="hover:underline hover:text-blue-400 transition"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#projects"
                                        className="hover:underline hover:text-blue-400 transition"
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        className="hover:underline hover:text-blue-400 transition"
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/Saidimu-Stephen"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline hover:text-blue-400 transition"
                                    >
                                        GitHub
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
