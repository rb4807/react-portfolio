import React from 'react';

const servicesData = [
    "Full Stack Development",
    "Software Development",
    "Web Development",
    "Desktop App Development",
    "Python Projects",
    "API Integration",
    "DevOps",
    "ETL",
    "Shopify",
    "WordPress",
    "Technical Support",
    "Testing & Debugging"
];

const ServiceCard = React.memo(({ service }) => (
    <div data-aos="fade-up" className="relative group">
        <div className="relative z-10 bg-white/60 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-4 border border-black/10 dark:border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex items-center justify-center">
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1] to-[#a855f7] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <p className="text-center text-gray-500 dark:text-white text-sm font-semibold">{service}</p>
        </div>
    </div>
));

const Service = () => {
    return (
        <>
            <h1 data-aos="fade-up" className="title text-titleLight dark:text-titleDark text-[2.4rem] mt-[8%] ml-[30%] md:mt-[3%] md:ml-[43%]" id="services">
                My <span className="text-[2.4rem] bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Service</span>
            </h1>
            <div data-aos="fade-up" className="container mx-auto p-4">
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4 text-contentLight dark:text-contentDark">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Service;
