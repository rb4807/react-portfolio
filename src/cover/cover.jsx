import dark from '../assets/dark.webp';
import light from '../assets/light.png';
import about_dark from '../assets/about_dark.webp';
import about_light from '../assets/about_light.jpg';
import hackerrank from '../assets/hackerrank.png';
import vercel from '../assets/vercel.png';
import leetcode from '../assets/leetcode.png';
import useThemeStore from "../stores/useThemeStore";
import FloatNavbar from '../hooks/FloatNavbar';
import { Skeleton } from '../utils/Skeleton';
import { applyThemePreference } from "../utils/themeUtils";
import HamburgerNavbar from '../utils/HamburgerNavbar';
import { getThemeIcon } from '../utils/ThemeIcons';
import React, { useState, useEffect, useCallback, memo } from "react";
import { Github, Linkedin, Mail, ExternalLink, Instagram, Sparkles, Hackerrank } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cover = memo(() => {
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const [showNavbar, setShowNavbar] = useState(true); 
    const { isScrolled, isScrollingUp } = FloatNavbar();
    const theme = useThemeStore((state) => state.theme);

    useEffect(() => {
        applyThemePreference(theme);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); 
        return () => clearTimeout(timer);
    }, [theme]);

    const HackerRankIcon = () => {
        const [isHovered, setIsHovered] = useState(false);
    
        return (
            <img
                src={hackerrank}
                alt="HackerRank"
                style={{
                    width: '22px',
                    height: '22px',
                    filter: isHovered ? 'invert(100%) brightness(100%)' : 'invert(100%) brightness(60%)',
                    transition: 'filter 0.3s ease'  
                }}
                onMouseEnter={() => setIsHovered(true)}  
                onMouseLeave={() => setIsHovered(false)}  
            />
        );
    };  

    const VercelIcon = () => {
        const [isHovered, setIsHovered] = useState(false);
    
        return (
            <img
                src={vercel}
                alt="Vercel"
                style={{
                    width: '22px',
                    height: '22px',
                    filter: isHovered ? 'invert(100%) brightness(100%)' : 'invert(100%) brightness(60%)',
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
                style={{
                    width: '22px',
                    height: '22px',
                    filter: isHovered ? 'invert(100%) brightness(100%)' : 'invert(100%) brightness(60%)',
                    transition: 'filter 0.3s ease'  
                }}
                onMouseEnter={() => setIsHovered(true)}  
                onMouseLeave={() => setIsHovered(false)}  
            />
        );
    };   
      

    const TYPING_SPEED = 100;
    const ERASING_SPEED = 50;
    const PAUSE_DURATION = 2000;
    const WORDS = ["Software Engineer", "Tech Enthusiast", "Full Stack Developer"];
    const TECH_STACK = ["Python", "Javascript", "Golang"];
    const SOCIAL_LINKS = [
        { icon: Mail , link: "mailto:rajesh.mbalu@gmail.com" },
        { icon: Linkedin, link: "https://www.linkedin.com/in/rajesh-mbalu" },
        { icon: Github, link: "https://github.com/rb4807" },
        { icon: VercelIcon, link: "https://vercel.com/rb4807s-projects" },
        { icon: HackerRankIcon, link: "https://www.hackerrank.com/profile/rb160601"},
        { icon: LeetCodeIcon, link: "https://leetcode.com/u/rajesh-mbalu/"},
        { icon: Instagram, link: "https://instagram.com/https://instagram.com/_._r__b_._" }       
    ];

    useEffect(() => {
        AOS.init({ once: true, offset: 10 });
        window.addEventListener('resize', AOS.refresh);
        return () => window.removeEventListener('resize', AOS.refresh);
    }, []);

    useEffect(() => {
        setIsLoaded(true);
        return () => setIsLoaded(false);
    }, []);

    const handleTyping = useCallback(() => {
        if (isTyping) {
            if (charIndex < WORDS[wordIndex].length) {
                setText(prev => prev + WORDS[wordIndex][charIndex]);
                setCharIndex(prev => prev + 1);
            } else {
                setTimeout(() => setIsTyping(false), PAUSE_DURATION);
            }
        } else {
            if (charIndex > 0) {
                setText(prev => prev.slice(0, -1));
                setCharIndex(prev => prev - 1);
            } else {
                setWordIndex(prev => (prev + 1) % WORDS.length);
                setIsTyping(true);
            }
        }
    }, [charIndex, isTyping, wordIndex]);

    useEffect(() => {
        const timeout = setTimeout(handleTyping, isTyping ? TYPING_SPEED : ERASING_SPEED);
        return () => clearTimeout(timeout);
    }, [handleTyping]);

    return (
        <div className="min-h-screen bg-baseLight dark:bg-[#030014]">
            {/* Navbar - Fixed at top */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? (isScrollingUp ? 'translate-y-0 glass-navbar' : '-translate-y-full') : ''}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img className="hover:scale-110 duration-1000 transform w-10 md:w-20" src={theme === 'light' ? light : dark} alt="Logo" />
                        </div>
            
                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center justify-center flex-1 space-x-4">
                            {['About Me', 'Services', 'Projects', 'Tech Insights', 'Contact Me'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white dark:text-white border-b-2 border-transparent hover:text-baseColor hover:border-baseColor dark:hover:text-baseColor px-3 py-2 text-sm font-medium" > {item}</a>
                            ))}
                        </div>
            
                        {/* Theme Toggle and Mobile Menu */}
                        <div className="flex items-center gap-2">
                            <button onClick={toggleTheme} className="p-2 rounded-full text-gray-800 dark:text-white transition-transform duration-300" >{getThemeIcon(theme)}</button>
                            <button onClick={toggleMenu} className="md:hidden p-2 rounded-md text-black dark:text-white">{isMenuOpen ? '' : '☰'}</button>
                        </div>
                    </div>
                </div>
            </nav>

            <HamburgerNavbar 
                isMenuOpen={isMenuOpen} 
                toggleMenu={toggleMenu} 
                theme={theme}
            />
        
            {/* Main Content Section */}
            <div className={`relative z-10 pt-16 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                <div className="container mx-auto px-4 min-h-screen">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-12">
                        {/* Left Content Section */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            {/* Ready to Innovate Badge */}
                            <div className="inline-block" data-aos="zoom-in">
                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                                    <div className="relative px-4 py-2 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-black/10 dark:border-white/10">
                                        <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text text-sm font-medium flex items-center">
                                            <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
                                            Crafting Tomorrow
                                        </span>
                                    </div>
                                </div>
                            </div>
            
                            {/* Name and Title */}
                            <div className="space-y-4">
                                <h1 className="text-3xl sm:text-6xl font-bold tracking-wider">
                                    <span className="head bg-gradient-to-r from-secLight via-blue-200 to-purple-400  dark:bg-gradient-to-r dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent">
                                        HI I'M 
                                    </span>
                                    <br />
                                    <span className="head  bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                                        Rajesh
                                        <br/>
                                        Balasubramaniam
                                    </span>
                                </h1>
                                
                                {/* Animated Text */}
                                <div className="h-8 flex items-center">
                                    <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-800 to-gray-600 dark:bg-gradient-to-r dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent font-light">
                                        {text}
                                    </span>
                                    <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
                                </div>
                
                                {/* Description */}
                                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                                    A forward-thinking Software Engineer, blending creativity with technical 
                                    prowess to build innovative, high-performance applications. With a passion
                                    for continuous learning, I turn complex challenges into elegant solutions
                                    across full-stack development, AI/ML, and beyond.
                                </p>
                
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-3">
                                    {TECH_STACK.map((tech, index) => (
                                        <div key={index} className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                
                                {/* Social Links */}
                                <div className="flex gap-4">
                                    {SOCIAL_LINKS.map((social, index) => (
                                        <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="group">
                                            <div className="relative p-3 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-xl border border-black/10 dark:border-white/10 group-hover:border-black/20 dark:group-hover:border-white/20 transition-all duration-300">
                                                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                
                        {/* Right Image Section */}
                        <div className="w-full lg:w-1/2 flex justify-center items-center">
                            <div className="relative w-1/2 h-1/2 group">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-morph"></div>
                                <div className="relative h-full w-full flex items-center justify-center">
                                    <div className=" p-4 ">
                                        <img src={theme === 'light' ? about_light : about_light} alt="Profile" className="w-full h-full object-cover rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
});

export default Cover;
