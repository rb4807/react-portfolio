import journey_dark from '../assets/journey_dark.jpg';
import journey_light from '../assets/journey_light.jpg';
import React, { memo } from "react"
import { FileText, Code, Sparkles } from "lucide-react"

import useThemeStore from "../stores/useThemeStore";

const About = memo(() => {

    const theme = useThemeStore((state) => state.theme);

    return (
        <div className="h-auto pb-[10%] text-titleLight dark:text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] sm-mt-0" id="about-me">
            {/* Main Content Section */}
            <div className="w-full mx-auto pt-8 sm:pt-12 relative flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
                {/* Profile Image Section */}
                <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
                    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
                        <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
                            <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
                        </div>
                        <div className="relative">
                            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
                                <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />
                                <img src={theme === 'light' ? journey_light : journey_light} alt="Profile" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" loading="lazy" />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
                                    <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                {/* Text Content Section */}
                <div className="space-y-6 text-left">
                    {/* Header Section */}
                    <div className="lg:mb-8 mb-2 px-[5%]">
                        <div className="inline-block relative group">
                            <h2 className="title text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]" data-aos="zoom-in-up" data-aos-duration="600">
                               <span className="text-titleLight dark:text-white">About</span> Me
                            </h2>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl text-base sm:text-lg flex items-center gap-2" data-aos="zoom-in-up" data-aos-duration="800">
                            <Sparkles className="w-5 h-5 text-purple-400" />
                            Transforming ideas into digital experiences
                            <Sparkles className="w-5 h-5 text-purple-400" />
                        </p>
                    </div>
    
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0" data-aos="fade-right" data-aos-duration="1500">
                        Proficient Software Engineer with a strong foundation in development,
                        programming, and problem-solving. Successfully completed a six-month
                        internship in Python Full Stack Development, where I honed my skills
                        in building robust, user-friendly applications. With one year of
                        professional experience, I specialize in delivering innovative software
                        solutions. Passionate about continuous learning and staying updated with
                        the latest technological advancements.
                    </p>
                    <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-4 w-full">
                        <a href="/Resume.pdf" download className="w-full lg:w-auto">
                            <button data-aos="fade-up" data-aos-duration="800" className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow">
                                <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
                            </button>
                        </a>
                        <a href="#projects" className="w-full lg:w-auto">
                            <button data-aos="fade-up" data-aos-duration="1000" className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200">
                                <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                            </button>
                        </a>
                    </div>
                </div>
            </div>
    
            <style
                jsx>{`
                    @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                    }
                    @keyframes spin-slower {
                    to { transform: rotate(360deg); }
                    }
                    .animate-bounce-slow {
                    animation: bounce 3s infinite;
                    }
                    .animate-pulse-slow {
                    animation: pulse 3s infinite;
                    }
                    .animate-spin-slower {
                    animation: spin-slower 8s linear infinite;
                    }
                `}
            </style>
        </div>
    );    
    
});

export default About;
