'use client';

import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full lg:w-2/6 mb-6">
            <h3 className="text-lg font-bold mb-4">Rental Services</h3>
            <p className="text-gray-400 pe-10">
              Offering premium rental solutions to meet all your short-term and long-term needs. Quality properties and excellent service guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full lg:w-1/6 mb-6">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:text-yellow-400">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/rentals" className="hover:text-yellow-400">Our Rentals</a>
              </li>
              <li className="mb-2">
                <a href="/contactus" className="hover:text-yellow-400">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="/auth/login" className="hover:text-yellow-400">Login</a>
              </li>
              <li>
                <a href="/auth/signup" className="hover:text-yellow-400">Sign Up</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/6 mb-6">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul>
              <li className="flex items-center mb-2">
                <FaPhoneAlt className="mr-2 text-yellow-400" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center mb-2">
                <FaEnvelope className="mr-2 text-yellow-400" />
                <span>info@rentalservices.com</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-yellow-400" />
                <span>2426 Crossmill Ln, Katy, TX 77450</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full lg:w-1/6 mb-6">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-400 hover:text-yellow-500 text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-yellow-400 hover:text-yellow-500 text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-yellow-400 hover:text-yellow-500 text-2xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Rental Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
