'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaShoppingCart, FaPhoneAlt, FaUserAlt } from 'react-icons/fa'; // Importing icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Rental Services */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold hover:text-yellow-500 transition duration-300">
            Rental Services
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/about" className="flex items-center hover:text-yellow-400 transition duration-300">
            <FaInfoCircle className="mr-2" /> About
          </Link>
          <Link href="/rentals" className="flex items-center hover:text-yellow-400 transition duration-300">
            <FaShoppingCart className="mr-2" /> Rentals
          </Link>
          <Link href="/contactus" className="flex items-center hover:text-yellow-400 transition duration-300">
            <FaPhoneAlt className="mr-2" /> Contact Us
          </Link>
          <Link href="/auth/login" className="flex items-center hover:text-yellow-400 transition duration-300">
            <FaUserAlt className="mr-2" /> Login
          </Link>
          <Link href="/auth/signup" className="flex items-center hover:text-yellow-400 transition duration-300">
            <FaUserAlt className="mr-2" /> Sign Up
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Link href="/contactus" className="mr-4 flex items-center hover:text-yellow-400 transition duration-300">
            <FaPhoneAlt className="mr-2" /> Contact Us
          </Link>
          <button onClick={toggleMenu} className="text-white">
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Slide-in) */}
      <div
        className={`${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 left-0 w-3/4 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out z-50 p-6`}
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-yellow-500 transition duration-300">
            Rental Services
          </Link>
          <button onClick={closeMenu} className="text-white">
            <FaTimes className="text-2xl" />
          </button>
        </div>

        <nav className="mt-6 space-y-4">
          <Link href="/about" onClick={closeMenu} className="flex items-center ps-6 py-2 rounded-md bg-gray-700 hover:bg-gray-900 hover:text-yellow-400 transition duration-300">
            <FaInfoCircle className="mr-2" /> About
          </Link>
          <Link href="/rentals" onClick={closeMenu} className="flex items-center ps-6 py-2 rounded-md bg-gray-700 hover:bg-gray-900 hover:text-yellow-400 transition duration-300">
            <FaShoppingCart className="mr-2" /> Rentals
          </Link>
          <Link href="/contactus" onClick={closeMenu} className="flex items-center ps-6 py-2 rounded-md bg-gray-700 hover:bg-gray-900 hover:text-yellow-400 transition duration-300">
            <FaPhoneAlt className="mr-2" /> Contact Us
          </Link>
          <Link href="/auth/login" onClick={closeMenu} className="flex items-center ps-6 py-2 rounded-md bg-gray-700 hover:bg-gray-900 hover:text-yellow-400 transition duration-300">
            <FaUserAlt className="mr-2" /> Login
          </Link>
          <Link href="/auth/signup" onClick={closeMenu} className="flex items-center ps-6 py-2 rounded-md bg-gray-700 hover:bg-gray-900 hover:text-yellow-400 transition duration-300">
            <FaUserAlt className="mr-2" /> Sign Up
          </Link>
        </nav>
      </div>

      {/* Close Mobile Menu when clicking outside */}
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black opacity-50 z-40"
        />
      )}
    </header>
  );
};

export default Header;
