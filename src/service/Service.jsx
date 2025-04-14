import React from 'react';
import { ArrowUpRight } from "lucide-react";

const servicesData = [
    {
        title: "Full Stack Development",
        description: "End-to-end web application solutions",
        color: "from-[#6366f1] to-[#a855f7]",
    },
    {
        title: "Software Development",
        description: "Custom software solutions for your needs",
        color: "from-[#a855f7] to-[#6366f1]",
    },
    {
        title: "Web Development",
        description: "Creating responsive modern websites",
        color: "from-[#6366f1] to-[#a855f7]",
    },
    {
        title: "Desktop App Development",
        description: "Cross-platform desktop applications",
        color: "from-[#a855f7] to-[#6366f1]",
    },
    {
        title: "Python Projects",
        description: "Custom Python-based solutions",
        color: "from-[#6366f1] to-[#a855f7]",
    },
    {
        title: "API Integration",
        description: "Connecting systems through APIs",
        color: "from-[#a855f7] to-[#6366f1]",
    },
    {
        title: "DevOps",
        description: "Streamlining development operations",
        color: "from-[#6366f1] to-[#a855f7]",
    },
    {
        title: "ETL",
        description: "Extract, transform, and load data",
        color: "from-[#a855f7] to-[#6366f1]",
    },
    {
        title: "Shopify & WordPress",
        description: "E-commerce and CMS solutions",
        color: "from-[#6366f1] to-[#a855f7]",
    },
    {
        title: "AI & ML",
        description: "Intelligent automation solutions",
        color: "from-[#a855f7] to-[#6366f1]",
    },
    {
        title: "Technical Support",
        description: "Reliable assistance when needed",
        color: "from-[#6366f1] to-[#a855f7]",
    },
    {
        title: "Testing & Debugging",
        description: "Ensuring quality and reliability",
        color: "from-[#a855f7] to-[#6366f1]",
    }
];

const ServiceCard = React.memo(({ title, description, color }) => (
    <div data-aos="fade-up" data-aos-duration={1300} className="relative group">
        <div className="relative z-10 bg-white-900/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-black/10 dark:border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
            <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
            <div>
                <p className="text-lg font-semibold text-gray-700 dark:text-white mb-2" data-aos="fade-up" data-aos-duration="800" data-aos-anchor-placement="top-bottom">{title}</p>
                <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500 dark:text-gray-400" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">{description}</p>
                </div>
            </div>
        </div>
    </div>
));

const Service = () => {
    return (
        <>
            <div>
                <h1 data-aos="fade-up" className="title text-titleLight dark:text-titleDark text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-16 mb-4" id="services">
                    My <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Services</span>
                </h1>
                <p className="text-center mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base mb-12">
                    I offer a range of high-quality, reliable solutions tailored to your needs. Whether it's software development or other tech solutions, 
                    I bring expertise and dedication to every project. Let's build something exceptional together!
                </p> 
            </div>
            <div data-aos="fade-up" className="container mx-auto px-4">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Service;