import Head from 'next/head';
import Image from 'next/image';

export default function SeoServices() {
    const seoServices = [
        {
            name: "Keyword Research",
            description: "Identify the best keywords to target your audience effectively.",
            image: "/Keyword research.jpg",
        },
        {
            name: "Content Optimization",
            description: "Optimize your content for better rankings and user engagement.",
            image: "/content-optimization.jpeg",
        },
        {
            name: "Local SEO",
            description: "Enhance your local search presence and attract nearby customers.",
            image: "/local-seo.jpeg",
        },
        {
            name: "On-Page SEO",
            description: "Optimize your website's content and HTML for better rankings.",
            image: "/on-page-seo.png",
        },
        {
            name: "Off-Page SEO",
            description: "Build quality backlinks to enhance domain authority.",
            image: "/off-page-seo.png",
        },
        {

            name: "Technical SEO",
            description: "Improve site speed, mobile optimization, and indexability.",
            image: "/technical-seo.png",
        },
    ];

    return (
        <div className="px-6 py-16 mt-5 text-center text-black bg-gray-50 lg:px-12">
            <Head>
                <title>SEO Services | Rental Service</title>
                <meta name="description" content="Explore our SEO services including keyword research, content optimization, and local SEO." />
            </Head>
            <h1 className="mb-6 text-4xl font-bold text-center">Our SEO Services</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {seoServices.map((service, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-lg">
                        <Image
                            src={service.image}
                            alt={service.name}
                            width={350}
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
