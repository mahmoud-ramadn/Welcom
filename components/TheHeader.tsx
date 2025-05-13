"use client"
import Image from "next/image";

import logo from '@/public/logo.webp';
import Link from "next/link";
import { useState } from "react";

function TheFooter() {
    const [isOpen, setIsOpen] = useState(false);

    const NavLinks = [
        {
            id: 1,
            title: 'Features',
            path: '/'
        },
        {
            id: 2,
            title: 'Pricing',
            path: '/'
        },
        {
            id: 3,
            title: 'Events',
            path: '/'
        },
        {
            id: 4,
            title: 'About',
            path: '/'
        },
        {
            id: 5,
            title: 'Blog',
            path: '/'
        },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="border-b border-gray-500 md:px-20">
            <div className="container py-5 flex items-center justify-between">
                <Image src={logo} alt="logo" loading='lazy' className="lg:scale-100 scale-95" />

                {/* Desktop Navigation */}
                <ul className="md:flex hidden items-center lg:gap-x-9 md:gap-x-3 lg:text-base text-sm">
                    {NavLinks.map((item, index) => (
                        <li key={index} className="hover:text-yellow-400 cursor-pointer transition-colors duration-150">
                            {item.title}
                        </li>
                    ))}
                </ul>

                {/* Mobile Burger Menu */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 flex flex-col items-end space-y-1.5">
                            <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
                            <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-5'}`}></span>
                            <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'}`}></span>
                        </div>
                    </button>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center md:space-x-6 space-x-3">
                    <Link href='#' className="md:text-base text-sm hover:text-yellow-400 transition-colors duration-150">Support</Link>
                    <Link href='#' className="md:text-base text-sm hover:text-yellow-400 transition-colors duration-150">Login</Link>
                    <button className="rounded-full bg-purple-700 hover:bg-purple-800 transition-colors duration-150 md:py-4 py-2 md:px-6 px-3">
                        Demo
                    </button>
                </div>
            </div>

            {/* Mobile Slide Menu */}
            <div className={`fixed inset-0 bg-black bg-opacity-90 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="container h-full flex flex-col justify-center items-start px-6 py-20">
                    <ul className="space-y-8 text-xl w-full">
                        {NavLinks.map((item, index) => (
                            <li key={index} className="border-b border-gray-700 pb-4 w-full">
                                <a href={item.path} className="hover:text-yellow-400 transition-colors duration-150 block">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-12 flex flex-col space-y-6 w-full">
                        <Link href='#' className="text-lg hover:text-yellow-400 transition-colors duration-150">Support</Link>
                        <Link href='#' className="text-lg hover:text-yellow-400 transition-colors duration-150">Login</Link>
                        <button className="rounded-full bg-purple-700 hover:bg-purple-800 transition-colors duration-150 py-4 px-6 w-full">
                            Demo
                        </button>
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="absolute top-6 right-6 text-white text-2xl"
                        aria-label="Close menu"
                    >
                        &times;
                    </button>
                </div>
            </div>
        </header>
    );
}

export default TheFooter;