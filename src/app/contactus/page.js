import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegComment } from 'react-icons/fa'; // Importing icons for fields

const ContactForm = () => {
  return (
    <section className="bg-gray-50 py-16 text-center px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          Contact Us
        </h2>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Have questions or need assistance? Our team is here to help! Fill out the form below, and we'll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* Full Name */}
          <div className="flex items-center space-x-4">
            <FaUser className="text-gray-500" />
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-gray-500" />
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex items-center space-x-4 col-span-2">
            <FaPhone className="text-gray-500" />
            <input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
              required
            />
          </div>

          {/* Message */}
          <div className="flex items-center space-x-4 col-span-2">
            <FaRegComment className="text-gray-500" />
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
              rows="6"
              required
            />
          </div>

          {/* Address */}
          <div className="flex items-center space-x-4 col-span-2">
            <FaMapMarkerAlt className="text-gray-500" />
            <input
              type="text"
              id="address"
              placeholder="Your Address"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="px-10 py-4 bg-yellow-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
