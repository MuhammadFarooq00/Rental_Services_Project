import Head from 'next/head';
import Image from 'next/image';

export default function WebServices() {
    const webServices = [
        {
            name: "Website Development",
            description: "Get a responsive and modern website tailored to your business needs.",
            image: "/web.jpeg",
        },
        {
            name: "Web Hosting",
            description: "Reliable and scalable web hosting solutions to keep your site running smoothly.",
            image: "/web-hosting.jpeg",
        },
        {
            name: "Web App Development",
            description: "Develop powerful web applications to enhance your digital presence.",
            image: "/web-app-development.jpeg",
        },
    ];

    return (
        <div className="px-6 py-16 mt-5 text-center text-black bg-gray-50 lg:px-12">
            <Head>
                <title>Web Services | Rental Service</title>
                <meta name="description" content="Explore our web services including website development, hosting, and web app development." />
            </Head>
            <h1 className="mb-6 text-4xl font-bold text-center">Our Web Services</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {webServices.map((service, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-lg">
                        <Image
                            src={service.image}
                            alt={service.name}
                            width={400}
                            height={250}
                            className="rounded-lg"
                        />
                        <h2 className="mt-4 text-2xl font-semibold">{service.name}</h2>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
