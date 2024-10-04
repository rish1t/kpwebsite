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
        <nav className="bg-[#FEE6E1] p-4 shadow-md fixed w-full z-50">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        {/* Logo placeholder */}
                        <div className="w-10 h-10 bg-[#F27708] rounded-full mr-4"></div>
                        {/* <div className='w-30 h-5 text-[#111111] font-bold mr-4'>KP</div> */}
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