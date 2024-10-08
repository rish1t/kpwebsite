'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { name: 'HOME', href: '/' },
        { name: 'ACADEMY', href: '/academy' },
        { name: 'GALLERY', href: '/gallery' },
        { name: 'CONTACT US', href: '/contact' },
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isMenuOpen) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [isMenuOpen])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    return (
        <nav className="bg-[#ffffff] p-4 fixed w-full z-50">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                    <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="fill-orange-500">
                    <path
                        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                </svg>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-[#111111] hover:text-[#F27708] font-medium transition-colors duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-[#F27708] hover:text-[#F89134] focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div>
                    {/* Overlay */}
                    <div
                        className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        onClick={() => setIsMenuOpen(false)} // Close the menu when the overlay is clicked
                    />

                    {/* Sidebar */}
                    <div
                        className={`fixed top-0 right-0 h-full w-64 bg-[#FDFBF9] shadow-lg transform transition-transform duration-300 ease-in-out backdrop-blur-md drop-shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
                    >
                        <div className="flex flex-col space-y-6 mt-16 p-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-[#111111] hover:text-[#F27708] font-medium transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Overlay */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 z-40 md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>
                )}
            </div>
        </nav>
    )
}