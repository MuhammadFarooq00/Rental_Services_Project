'use client';

import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import { FaBuilding, FaCar, FaTools, FaArrowRight } from 'react-icons/fa';
import { MdHouse, MdOutlineWeekend, MdOutlineContactSupport } from 'react-icons/md';
import Image from 'next/image';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const sliderRef = React.useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Custom arrows added below
  };

  const slides = [
    {
      image: 'https://picsum.photos/id/1018/1200/600',
      title: 'Luxury Apartments',
      description: 'Stay in style and comfort in our top-tier apartments.',
    },
    {
      image: 'https://picsum.photos/id/1019/1200/600',
      title: 'Modern Villas',
      description: 'Relax in our elegant and spacious modern villas.',
    },
    {
      image: 'https://picsum.photos/id/1020/1200/600',
      title: 'Cozy Cottages',
      description: 'Enjoy a peaceful stay in our charming cottages.',
    },
    {
      image: 'https://picsum.photos/id/1021/1200/600',
      title: 'Office Spaces',
      description: 'Rent high-quality office spaces for your business needs.',
    },
    {
      image: 'https://picsum.photos/id/1022/1200/600',
      title: 'Event Venues',
      description: 'Host your events in our well-equipped venues.',
    },
  ];
  return (
    <div>
     

      {/* Carousel Section */}
      <section className="py-12 pt-5 bg-gray-100">
      <div className="container mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[600px] object-cover rounded-lg"
                />
                <div className="absolute top-0 left-0 bg-black bg-opacity-40 w-full h-full flex flex-col justify-center items-center">
                  <h2 className="text-3xl font-bold text-white">{slide.title}</h2>
                  <p className="text-white mt-2">{slide.description}</p>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Arrows */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 z-10"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 z-10"
          >
            <FaChevronRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>

 {/* Hero Section */}
 <section className="relative bg-gradient-to-r from-gray-700 mt-5 mx-1 rounded-xl to-slate-500 text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Rental Services
          </motion.h1>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find the perfect rental for your needs — whether it's a home, car, or tools for your next project.
          </motion.p>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/rentals"
              className="px-8 py-4 bg-yellow-500 text-xl font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
            >
              Explore Rentals
            </Link>
          </motion.div> */}
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Featured Rentals
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: MdHouse, title: 'Homes', description: 'Find your dream home for short or long stays.' },
              { icon: FaCar, title: 'Cars', description: 'Rent cars for travel or business trips with ease.' },
              { icon: FaTools, title: 'Tools', description: 'Professional tools for your projects and DIY needs.' },
              { icon: MdOutlineWeekend, title: 'Cottages', description: 'Relax in serene and peaceful cottages.' },
              { icon: FaBuilding, title: 'Offices', description: 'Fully furnished offices for professionals.' },
              { icon: MdOutlineContactSupport, title: 'Customer Support', description: '24/7 support for all rentals.' },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <service.icon className="text-yellow-500 text-4xl mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/rentals"
              className="px-8 py-4 bg-purple-600 text-white text-lg rounded-md shadow-md hover:bg-purple-700 transition"
            >
              View All Rentals
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 py-12 text-center text-white">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Find Your Next Rental?
        </motion.h2>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore our diverse collection of rentals and book today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/rentals"
            className="px-10 py-4 bg-yellow-500 rounded-lg shadow-lg text-lg hover:bg-yellow-600 transition"
          >
            Get Started <FaArrowRight className="inline ml-2" />
          </Link>
        </motion.div>
      </section>

      {/* why choose us section  */}

      <section className="py-16 bg-gray-100">
  <div className="container mx-auto text-center">
    <motion.h2
      className="text-4xl font-bold text-gray-800 mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      Why Choose Us
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        {
          icon: FaCar,
          title: 'Wide Selection',
          description: 'Choose from a variety of rental options to suit your needs.',
        },
        {
          icon: MdOutlineWeekend,
          title: 'Affordable Prices',
          description: 'Get the best deals for your short-term or long-term stays.',
        },
        {
          icon: MdOutlineContactSupport,
          title: '24/7 Support',
          description: 'Our team is always here to assist you with your queries.',
        },
        {
          icon: FaTools,
          title: 'Quality Assurance',
          description: 'We ensure all our rentals meet the highest standards.',
        },
        {
          icon: FaBuilding,
          title: 'Flexible Booking',
          description: 'Easy and flexible booking options tailored to your schedule.',
        },
        {
          icon: MdHouse,
          title: 'Safe and Secure',
          description: 'Experience peace of mind with well-maintained rentals.',
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="p-6 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <item.icon className="text-yellow-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    {/* testimonials section  */}

    <section className="py-16 bg-gradient-to-r from-slate-400 to-purple-300 text-white">
  <div className="container mx-auto text-center">
    <motion.h2
      className="text-4xl font-bold mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      What Our Customers Say
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        {
          name: 'John Doe',
          review:
            'The rental process was seamless, and the property was beyond expectations! Highly recommended.',
          image: 'https://picsum.photos/600/300?random=1',
        },
        {
          name: 'Jane Smith',
          review:
            'Affordable prices and excellent customer service. I found the perfect cottage for my weekend getaway.',
          image: 'https://picsum.photos/600/300?random=2',
        },
        {
          name: 'Michael Lee',
          review:
            'The tools I rented were top-notch, and the booking process was so easy. Will rent again!',
          image: 'https://picsum.photos/600/300?random=3',
        },
      ].map((customer, index) => (
        <motion.div
          key={index}
          className="bg-white text-gray-800 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <img
            src={customer.image}
            alt={customer.name}
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">{customer.name}</h3>
          <p className="text-sm">{customer.review}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    {/* how it works section  */}

    <section className="py-16 bg-white">
  <div className="container mx-auto text-center">
    <motion.h2
      className="text-4xl font-bold text-gray-800 mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      How It Works
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {[
        {
          step: 1,
          title: 'Browse Rentals',
          description: 'Explore a wide variety of options to find your perfect rental.',
        },
        {
          step: 2,
          title: 'Select & Book',
          description: 'Choose your desired property or item and confirm your booking.',
        },
        {
          step: 3,
          title: 'Secure Payment',
          description: 'Make a secure payment online with our trusted system.',
        },
        {
          step: 4,
          title: 'Enjoy Your Stay',
          description: 'Relax and enjoy your rental with full peace of mind.',
        },
      ].map((step, index) => (
        <motion.div
          key={index}
          className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="text-yellow-500 text-4xl font-bold mb-4">{step.step}</div>
          <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
          <p className="text-gray-600 mt-2">{step.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


       {/* our partners section  */}

       {/* <section className="py-16 bg-gray-100">
  <div className="container mx-auto text-center">
    <motion.h2
      className="text-4xl font-bold text-gray-800 mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      Our Trusted Partners
    </motion.h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
      {[
        'https://picsum.photos/600/300?random=1',
        'https://picsum.photos/600/300?random=2',
        'https://picsum.photos/600/300?random=3',
        'https://picsum.photos/600/300?random=1',
        'https://picsum.photos/600/300?random=2',
        'https://picsum.photos/600/300?random=3',
      ].map((logo, index) => (
        <motion.div
          key={index}
          className="p-4 bg-white rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <img src={logo} alt={`Partner ${index + 1}`} className="mx-auto h-16" />
        </motion.div>
      ))}
    </div>
  </div>
</section> */}

    </div>
  );
};

export default HomePage;
