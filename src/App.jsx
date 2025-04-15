import { BrowserRouter, Routes, Route } from "react-router-dom";
import dark from './assets/dark.webp';
import light from './assets/light.png';
import './index.css';
import WelcomeScreen from './components/WelcomeScreen';
import ProjectPageLayout from './components/ProjectPageLayout';
import AnimatedBackground from './utils/Background';
import Portfolio from './portfolio/Portfolio';
import TechInsightsGuides from './techInsightsGuides/techInsightsGuides';
import Cover from './cover/cover';
import StatsSection from './stat/StatsSection';
import About from './about/About';
import Service from './service/Service';
import { AnimatePresence } from 'framer-motion';
import useThemeStore from "./stores/useThemeStore";
import { applyThemePreference } from "./utils/themeUtils";
import React, { useState, useEffect } from "react";
import hackerrank from './assets/hackerrank.png';
import leetcode from './assets/leetcode.png';
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const LandingPage = ({ showWelcome, setShowWelcome }) => {
    const theme = useThemeStore((state) => state.theme);
    const [isLoading, setIsLoading] = useState(true);
    const HackerRankIcon = () => {
        const [isHovered, setIsHovered] = useState(false);
        return (
            <img 
                src={hackerrank} 
                alt="HackerRank" 
                className="w-4 h-4 sm:w-5 sm:h-5"
                style={{ 
                filter: `brightness(0) saturate(100%) 
                    ${!document.documentElement.classList.contains('dark') 
                    ? isHovered 
                        ? 'invert(65%) sepia(72%) saturate(4462%) hue-rotate(178deg) brightness(102%) contrast(104%)' // gradient4Light color
                        : 'invert(39%) sepia(57%) saturate(2371%) hue-rotate(224deg) brightness(101%) contrast(101%)' // gradient1Light color
                    : isHovered 
                        ? 'invert(100%) brightness(100%)' 
                        : 'invert(100%) brightness(60%)'
                    }`,
                transition: 'filter 0.3s ease'
                }} 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} 
            />
        );
    };
      
    const LeetCodeIcon = () => {
        const [isHovered, setIsHovered] = useState(false);
        return (
          <img 
            src={leetcode} 
            alt="Leetcode" 
            className="w-4 h-4 sm:w-5 sm:h-5"
            style={{ 
              filter: `brightness(0) saturate(100%) 
                ${!document.documentElement.classList.contains('dark') 
                  ? isHovered 
                    ? 'invert(65%) sepia(72%) saturate(4462%) hue-rotate(178deg) brightness(102%) contrast(104%)' // gradient4Light color
                    : 'invert(39%) sepia(57%) saturate(2371%) hue-rotate(224deg) brightness(101%) contrast(101%)' // gradient1Light color
                  : isHovered 
                    ? 'invert(100%) brightness(100%)' 
                    : 'invert(100%) brightness(60%)'
                }`,
              transition: 'filter 0.3s ease'
            }} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
          />
        );
    }; 
    const SOCIAL_LINKS = [
        { icon: Mail , link: "mailto:rajesh.mbalu@gmail.com" },
        { icon: Linkedin, link: "https://www.linkedin.com/in/rajesh-mbalu" },
        { icon: Github, link: "https://github.com/rb4807" },
        { icon: HackerRankIcon, link: "https://www.hackerrank.com/profile/rb160601"},
        { icon: LeetCodeIcon, link: "https://leetcode.com/u/rajesh-mbalu/"},
        { icon: Instagram, link: "https://instagram.com/https://instagram.com/_._r__b_._" }       
    ];

useEffect(() => {
    applyThemePreference(theme);
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
}, [theme]);
    return (
        <>
            <div>
                <AnimatePresence mode="wait">
                    {showWelcome && (
                        <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
                    )}
                </AnimatePresence>

                {!showWelcome && (
                    <div className="bg-baseLight dark:bg-baseDark">
                        {/* Cover */}
                        <AnimatedBackground />

                        <Cover />
                        {/* About */}                        
                        <About />
                        <StatsSection />
                        {/* Services */}
                        <Service />
                        {/* Portfolio */}
                        <Portfolio />
                        <TechInsightsGuides />
                        <hr className="border-t dark:border-gray-600 border-black/30" id="contact-me"/>
                    
                        <footer className="py-6">
                            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col items-start">
                                        <div className="mb-1">
                                            <img className="w-10 md:w-16" src={theme === 'light' ? light : dark} alt="Logo"/>
                                        </div>
                                        <p className="text-sm dark:text-gray-400 md:pl-2 font-medium my-0">Rajesh Balasubramaniam</p>
                                        <p className="text-xs dark:text-gray-400 md:pl-2 my-0">© 2025 Copyright. All Rights Reserved.</p>
                                    </div>
                                    <div className="flex flex-col font-bold items-start">
                                        <p className="dark:text-gray-400 text-gray-700 text-sm uppercase mb-3">SOCIAL</p>
                                        <div className="flex">
                                            <div className="flex flex-nowrap gap-1 sm:gap-2">
                                                {SOCIAL_LINKS.map((social, index) => (
                                                    <a 
                                                        key={index} 
                                                        href={social.link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="group"
                                                        aria-label={social.name || "Social link"}
                                                    >
                                                        <div className="relative p-1 sm:p-2 rounded-lg sm:rounded-xl transition-all duration-300">
                                                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5 
                                                            text-gradient1Light dark:text-gray-400 
                                                            group-hover:text-gradient4Light dark:group-hover:text-white 
                                                            transition-colors" />
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                )}
            </div>
        </>
    );
};


function App() {
    const [showWelcome, setShowWelcome] = useState(true);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
                <Route path="/project/:id" element={<ProjectPageLayout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;