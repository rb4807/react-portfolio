import React from 'react';
import { Binary, ShoppingBag, Laptop, SquareChartGantt, DatabaseZap, BrainCircuit, LayoutPanelTop, Braces, ChevronsLeftRightEllipsis, Globe, Cloud } from 'lucide-react';

const icons = {
    Binary,
    LayoutPanelTop,
    Braces,
    ChevronsLeftRightEllipsis,
    Globe,
    Cloud,
    Laptop,
    ShoppingBag,
    BrainCircuit,
    DatabaseZap,
    SquareChartGantt,
};

const TechStack = ({ IconName, Heading, Languages }) => {
    const IconComponent = icons[IconName];
    return (
        <div className="w-full sm:w-64 h-72 group p-6 rounded-2xl bg-white-900/50 dark:bg-gray-900/50 hover:bg-white/70 dark:hover:bg-gray-800/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-start gap-4 hover:scale-105 cursor-pointer backdrop-blur-lg shadow-lg hover:shadow-xl border border-black/10 dark:border-white/10 overflow-hidden">
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1] to-[#a855f7] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                {IconComponent && (
                    <IconComponent className="relative h-12 w-12 sm:h-16 sm:w-16 transform transition-transform duration-300 text-gray-400" />
                )}
            </div>
            <h3 className="text-gray-500 dark:text-slate-300 font-bold text-lg text-center tracking-wide group-hover:text-white transition-colors duration-300">
                {Heading}
            </h3>
            <div className="w-full overflow-y-auto flex-grow pr-2
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-tranparent
                [&::-webkit-scrollbar-thumb]:bg-gradient-to-r from-[#6366f1] to-[#a855f7] 
                [&::-webkit-scrollbar-thumb]:rounded-full"
            >
                <ul className="text-gray-500 dark:text-slate-300 font-semibold text-sm tracking-wide group-hover:text-white transition-colors duration-300 space-y-2">
                    {Languages.map((language, index) => (
                        <li key={index} className="flex items-center gap-2 before:content-[''] before:block before:h-1.5 before:w-1.5 before:rounded-full before:bg-blue-500/50">
                            {language}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TechStack;