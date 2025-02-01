import React from 'react';
import { Code, Award, Briefcase, ArrowUpRight, CloudCog } from "lucide-react"

const statsData = [
    {
        icon: Code,
        color: "from-[#6366f1] to-[#a855f7]",
        value: 11,
        label: "Total Projects",
        description: "Innovative web solutions crafted",
        animation: "fade-right",
    },
    {
        icon: Award,
        color: "from-[#a855f7] to-[#6366f1]",
        value: 7,
        label: "Certificates",
        description: "Professional skills validated",
        animation: "fade-up",
    },
    {
        icon: Briefcase,
        color: "from-[#6366f1] to-[#a855f7]",
        value: "1+",
        label: "Years of Experience",
        description: "Continuous learning journey",
        animation: "fade-left",
    },
    {
        icon: CloudCog,
        color: "from-[#a855f7] to-[#6366f1]",
        value: "10+",
        label: "Services Offered",
        description: "Diverse professional services provided",
        animation: "fade-right",
    },
];

const StatCard = React.memo(({ icon: Icon, color, value, label, description, animation }) => (
    <div data-aos={animation} data-aos-duration={1300} className="relative group">
        <div className="relative z-10 bg-white/60 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-black/10 dark:border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
            <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
            <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-black/10 dark:bg-white/10 transition-transform group-hover:rotate-6">
                    <Icon className="w-8 h-8 text-gray-700 dark:text-white" />
                </div>
                <span className="text-4xl font-bold text-gray-700 dark:text-white" data-aos="fade-up-left" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
                    {value}
                </span>
            </div>
            <div>
                <p className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-2" data-aos="fade-up" data-aos-duration="800" data-aos-anchor-placement="top-bottom">{label}</p>
                <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500 dark:text-gray-400" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">{description}</p>
                    <ArrowUpRight className="w-4 h-4 text-black/50 dark:text-white/50 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </div>
            </div>
        </div>
    </div>
));

const StatsSection = () => (
    <section className="dark:bg-dark">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
                {statsData.map((stat, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 sm:mb-12 lg:mb-16">
                        <StatCard {...stat} />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default StatsSection;
