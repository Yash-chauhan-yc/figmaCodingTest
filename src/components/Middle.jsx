import Image from 'next/image';
import { useState } from 'react';

const services = [
    {
        title: 'Flutter App Development',
        description:
            'Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform – faster and easier than ever before. Ready to revolutionize your app experience? Let’s get started today!',
    },
    { title: 'UI/UX Design', description: 'Craft engaging and intuitive designs tailored to your brand and users.' },
    { title: 'Customization & Integration', description: 'Seamlessly integrate features and tailor solutions to meet your specific needs.' },
    { title: 'Testing & Quality Assurance', description: 'Ensure your app is reliable and error-free with our testing services.' },
    { title: 'Maintenance & Support', description: 'Keep your app running smoothly with our ongoing maintenance and support.' },
    { title: 'Consulting & Training', description: 'Get expert advice and training to empower your team.' },
    { title: 'Migration & Upgrades', description: 'Transition your apps and systems smoothly with minimal downtime.' },
];

const Middle = () => {
    const [openService, setOpenService] = useState(0);

    const toggleService = (index) => {
        setOpenService(openService === index ? null : index);
    };

    return (
        <div>
            <section className="bg-gradient-to-r from-green-900 to-blue-900 p-10 rounded-lg flex justify-between items-center mt-10">
                <div className="text-white">
                    <h2 className="text-3xl font-semibold mb-4 font-playfair lg:w-3/4 mb-10out ">Why Should you choose VAYUZ for Flutter?</h2>
                    <button className="bg-[#08A7CE] font-bold hover:bg-blue-700 text-white py-3 px-8 rounded-full">
                        CONTACT US
                    </button>
                </div>

                <div>
                    <Image
                        src="/contact.png"
                        alt="Flutter Illustration"
                        width={300}
                        height={400}
                    />
                </div>
            </section>
            <section className="py-16 text-white">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-playfair">Our Dynamic Services Suite!</h2>
                    <p className="text-xl mt-8">Embrace Innovation: Let’s Create Together!</p>
                    <p className="mt-8 text-gray-400">
                        Step into innovation! Explore our range of services and let’s create something extraordinary together.
                        <br />
                        Your vision, our expertise. Let’s begin!
                    </p>
                </div>

                <div className="container mx-auto flex">
                    <div className="lg:w-2/3 pr-8">
                        {services.map((service, index) => (
                            <div key={index} className="mb-6">
                                <div
                                    onClick={() => toggleService(index)}
                                    className="cursor-pointer flex justify-between items-center p-3 rounded-lg"
                                >
                                    <h3 className="text-3xl font-playfair">{service.title}</h3>
                                    <span className="text-3xl">{openService === index ? '-' : '+'}</span>
                                </div>

                                {openService === index && (
                                    <div className="p-4  rounded-lg text-gray-400">
                                        <p>{service.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:w-1/3 lg:flex items-stretch">
                        <img
                            src="/service.png"
                            alt="Services Image"
                            className="rounded-lg object-cover h-full w-full"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Middle;
