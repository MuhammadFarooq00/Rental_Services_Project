'use client'; // Required for Next.js client-side components
import { useState } from 'react';

const Dashboard = () => {
    // State to store all services
    const [services, setServices] = useState([]);

    // State for the form fields (title, description, type)
    const [formData, setFormData] = useState({ title: '', description: '', type: '' });

    // Updates formData whenever the user types in the form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target; // Get the input field's name and value
        setFormData({ ...formData, [name]: value }); // Update the corresponding field in formData
    };

    // Adds a new service to the services list
    const handleAddService = (e) => {
        e.preventDefault(); // Prevent the page from reloading on form submission
        setServices([...services, { ...formData, id: Date.now() }]); // Add new service with a unique ID
        setFormData({ title: '', description: '', type: '' }); // Clear the form
    };

    // Deletes a service by filtering it out of the services list
    const handleDeleteService = (id) => {
        setServices(services.filter((service) => service.id !== id)); // Keep all services except the one with the matching ID
    };

    // Updates a specific service with new details
    const handleUpdateService = (id, updatedService) => {
        setServices(
            services.map((service) =>
                service.id === id ? { ...service, ...updatedService } : service // Update if IDs match, else keep unchanged
            )
        );
    };

    return (
        <div className="min-h-screen p-8 mt-5 text-black bg-gray-100">
            <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">Rental Services Dashboard</h1>

            {/* Form Section */}
            <div className="max-w-lg p-6 mx-auto mb-8 bg-white rounded-lg shadow-lg">
                <h2 className="mb-4 text-2xl font-semibold text-gray-700">Add Service</h2>
                <form onSubmit={handleAddService}>
                    {/* Service Title Input */}
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-600">Service Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title} // Controlled input
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* Description Input */}
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-600">Description</label>
                        <textarea
                            name="description"
                            value={formData.description} // Controlled textarea
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                            rows="3"
                            required
                        ></textarea>
                    </div>

                    {/* Type Dropdown */}
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-600">Type</label>
                        <select
                            name="type"
                            value={formData.type} // Controlled select
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                        >
                            <option value="">Select Service Type</option>
                            <option value="Web Services">Web Services</option>
                            <option value="SEO Services">SEO Services</option>
                            <option value="Rental Services">Rental Services</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="px-4 py-2 mt-10 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Add Service
                    </button>
                </form>
            </div>

            {/* Services List Section */}
            <div className="max-w-4xl mx-auto">
                <h2 className="mb-4 text-2xl font-semibold text-gray-700">Services</h2>
                {services.length === 0 ? (
                    <p className="text-gray-600">No services added yet.</p>
                ) : (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="flex flex-col justify-between p-4 bg-white rounded-lg shadow-lg"
                            >
                                {/* Service Details */}
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
                                    <p className="mb-4 text-gray-600">{service.description}</p>
                                    <span className="inline-block px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
                                        {service.type}
                                    </span>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex justify-between mt-4">
                                    <button
                                        onClick={() =>
                                            handleUpdateService(service.id, {
                                                title: 'Updated Title',
                                                description: 'Updated Description',
                                            })
                                        }
                                        className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDeleteService(service.id)}
                                        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
