import React, { useState, useEffect } from 'react';

import cover_light from '../assets/cover_light.jpg';
import cover_dark from '../assets/cover_dark.jpg';
import dark from '../assets/dark.webp';
import light from '../assets/light.png';

import useThemeStore from "../stores/useThemeStore";

import TypingEffect from '../hooks/TypingEffect';
import FloatNavbar from '../hooks/FloatNavbar';

import { Skeleton, CoverSkeleton } from '../utils/Skeleton';
import { applyThemePreference } from "../utils/themeUtils";
import HamburgerNavbar from '../utils/HamburgerNavbar';
import { getThemeIcon } from '../utils/ThemeIcons';


const Cover = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showNavbar, setShowNavbar] = useState(true); 
    const { isScrolled, isScrollingUp } = FloatNavbar();
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);
    const theme = useThemeStore((state) => state.theme);
    const typeEffect = TypingEffect();

    useEffect(() => {
        applyThemePreference(theme);

        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust this time as needed

        return () => clearTimeout(timer);
    }, [theme]);
    const backgroundImage = theme === 'light' ? cover_light : cover_dark;

    return (
        <div className={`h-screen w-full overflow-hidden ${theme}`}>
            {isLoading ? 
                (
                    <CoverSkeleton />
                ) : 

                (
                    <div
                        className={`relative h-full w-full bg-cover bg-center bg-no-repeat transition-opacity duration-300 ${showNavbar ? 'bg-opacity-100' : 'bg-opacity-0'}`}
                        style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: '65% center' }}
                    >
                        {/* Navbar */}
                        <nav 
                            className={`
                            ${isScrolled ? 'fixed top-0 left-0 right-0' : 'absolute top-0 left-0 right-0'} 
                            z-10 transition-all duration-300 ease-in-out
                            ${isScrolled ? (isScrollingUp ? 'translate-y-0 glass-navbar' : '-translate-y-full') : ''}
                            `}
                        >
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-16">
                                    {/* Logo (always visible, left-aligned) */}
                                    <div className="flex items-center">
                                        {isLoading ? 
                                            (
                                                <Skeleton className="w-10 h-10 md:w-20 md:h-20 rounded" />
                                            ) : 
                                            (
                                                <img className="hover:scale-110 duration-1000 transform w-10 md:flex md:w-20" src={theme === 'light' ? light : dark} alt="Logo" />
                                            )
                                        }
                                    </div>

                                    {/* Centered menu items (hidden on mobile) */}
                                    <div className="hidden md:flex items-center justify-center flex-1 space-x-4">
                                        {isLoading
                                        ? Array(7)
                                            .fill()
                                            .map((_, i) => <Skeleton key={i} className="w-20 h-8 rounded" />)
                                        : [
                                            { text: 'About Me', href: '#journey' },
                                            { text: 'Services', href: '#about' },
                                            { text: 'Projects', href: '#services' },
                                            { text: 'Skills', href: '#project' },
                                            { text: 'Journey', href: '#skills' },
                                            { text: 'Certifications', href: '#certi' },
                                            { text: 'Contact Me', href: '#social' },
                                            ].map((item) => (
                                                <a
                                                    key={item.text}
                                                    href={item.href}
                                                    className="text-white dark:text-white border-b-2 border-transparent hover:text-baseColor hover:border-baseColor dark:hover:text-baseColor px-3 py-2 text-sm font-medium"
                                                >
                                                    {item.text}
                                                </a>
                                            )
                                        )}
                                    </div>

                                    {/* Theme toggle and mobile menu button */}
                                    <div className="flex items-center">
                                        {isLoading ? 
                                            (
                                                <Skeleton className="w-8 h-8 rounded-full" />
                                            ) : 
                                            (
                                                <button
                                                    onClick={toggleTheme}
                                                    className={
                                                        `p-2 rounded-full text-gray-800 dark:text-white transition-transform duration-300 ease-in-out
                                                        ${theme === 'dark' ? 'hover:bg-black hover:bg-opacity-20' : 'hover:bg-white hover:bg-opacity-20'}
                                                        hover:backdrop-blur-md`
                                                    }
                                                >
                                                    {getThemeIcon(theme)}
                                                </button>
                                            )
                                        }
                                        <div className="md:hidden ml-2">
                                            {isLoading ? 
                                                (
                                                    <Skeleton className="w-8 h-8 rounded" />
                                                ) : 
                                                (
                                                    <button
                                                        onClick={toggleMenu}
                                                        className={
                                                            `p-2 rounded-md text-white dark:text-white transition-transform duration-300 ease-in-out
                                                            ${isMenuOpen ? 'bg-opacity-30 backdrop-blur-md' : 'bg-transparent hover:bg-opacity-30 hover:backdrop-blur-md'}
                                                            ${theme === 'dark' ? 'hover:bg-black' : 'hover:bg-white'}`
                                                        }
                                                    >
                                                        {isMenuOpen ? '✕' : '☰'}
                                                    </button>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>

                        {/* Mobile menu */}
                        <HamburgerNavbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} theme={theme} />

                        {/* Main content */}
                        <div className="absolute bottom-[4%] md:top-2/3 md:left-0 md:transform md:-translate-y-2/3 w-full p-4 md:pl-8">
                            <div className="text-left">
                                {isLoading ? 
                                    (
                                        <Skeleton className="w-3/4 h-16 md:h-24 rounded" />
                                    ) : (
                                        <div>
                                            <h1 className="head text-4xl md:text-6xl font-bold text-white">
                                                Hi <span className='text-baseColor'>I'm</span> 
                                                <br/>
                                                <span className="head text-[1.5rem] md:text-[2.4rem]" >Rajesh Balasubramaniam</span>
                                                <br />
                                                <span className="block h-12 md:h-16 text-[1.5rem] md:text-[2.4rem] text-yellow-400">{typeEffect}</span>
                                            </h1>
                                            <a href="/resume.pdf" download>
                                                <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700">
                                                    Download Now
                                                </button>
                                            </a>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Cover;
