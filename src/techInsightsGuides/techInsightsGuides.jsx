import { motion } from 'framer-motion';
import { AppBar, Tabs, Tab, Box } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import ToggleButton from '../components/ToggleButton';
import apache_django from '../assets/apache_django.jpg';
import nginx_django from '../assets/nginx_django.jpg';
import nginx_react from '../assets/nginx_react.jpg';
import automated_react_tailwind_setup from '../assets/automated_react_tailwind_setup.jpg';
import ckeditor_integration_django from '../assets/ckeditor_integration_django.jpg';
import web_gl_deployment from '../assets/web_gl_deployment.jpg';

import { React, useState, useEffect, useRef } from 'react';
import { Sparkles, ChevronRight, Heart, Star, Clock, ExternalLink, ArrowUp } from 'lucide-react';

// Tech Insights Data
const TechInsightsGuidesData = [
    { id: 1, Img: nginx_django, Title: 'Django Deployment Guide on Ubuntu with Nginx', description: 'Comprehensive guide to deploying Django projects on Ubuntu Server with Nginx, MySQL, and PostgreSQL.', category: ['DevOps'], url: 'https://nginx-django-deployment-mzuz.vercel.app/' },
    { id: 2, Img: apache_django, Title: 'Django Deployment Guide on Ubuntu with Apache', description: 'Comprehensive guide to deploying Django projects on Ubuntu Server with Apache, MySQL, and PostgreSQL.', category: ['DevOps'], url: 'https://apache-django-deployment.vercel.app/' },
    { id: 3, Img: nginx_react, Title: 'React Deployment Guide on Ubuntu with Nginx', description: 'Comprehensive guide to deploying React apps on Ubuntu Server with Nginx, covering Standard Build, Docker, and PM2 methods.', category: ['DevOps'], url: 'https://nginx-react-deployment.vercel.app/' },
    { id: 4, Img: web_gl_deployment, Title: 'Web GL Deployment Deployment Guide on Ubuntu with Nginx and Apache', description: 'Comprehensive guide to deploying WebGL applications on Ubuntu Server using Apache and Nginx, covering setup, configuration, and optimization steps.', category: ['DevOps'], url: 'https://web-gl-deployment.vercel.app/' },
    { id: 5, Img: automated_react_tailwind_setup, Title: 'Automated React + Tailwind Setup with a Single Python Script', description: 'One-step solution to create a React project with Tailwind CSS using a single Python script and command.', category: ['Tools'], url: 'https://react-tailwind-auto-setup.vercel.app/' },
    { id: 6, Img: ckeditor_integration_django, Title: 'CKEditor Integration in Django: With and Without forms.py', description: 'Comprehensive guide to integrating CKEditor rich text editor in Django projects, covering both direct model integration and forms.py approach.', category: ['Tools'], url: 'https://ckeditor-integration-documentation.vercel.app/' },
];

// Animation styles
const AnimationStyles = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideInUp {
        from { transform: translateY(40px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }

    @keyframes slideInLeft {
        from { transform: translateX(-40px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }

    @keyframes slideInRight {
        from { transform: translateX(40px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }

    @keyframes shine {
        0% { transform: translateX(-100%) translateY(-100%); }
        100% { transform: translateX(100%) translateY(100%); }
    }

    .animate-twinkle {
        animation: twinkle 2s ease-in-out infinite;
    }

    .animate-float {
        animation: float 6s ease-in-out infinite;
    }

    .animate-pulse-slow {
        animation: pulse 4s ease-in-out infinite;
    }

    .animate-fade-in {
        animation: fadeIn 0.6s ease-out forwards;
    }

    .animate-slide-in-up {
        animation: slideInUp 0.7s ease-out forwards;
    }

    .animate-slide-in-left {
        animation: slideInLeft 0.7s ease-out forwards;
    }

    .animate-slide-in-right {
        animation: slideInRight 0.7s ease-out forwards;
    }

    .fade-out {
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .fade-in {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }

    .card-hover-effect {
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .card-hover-effect:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
    }

    .heart-beat {
        animation: heartBeat 1.3s ease-in-out;
    }

    @keyframes heartBeat {
        0% { transform: scale(1); }
        14% { transform: scale(1.3); }
        28% { transform: scale(1); }
        42% { transform: scale(1.3); }
        70% { transform: scale(1); }
    }

    .ribbon {
        position: absolute;
        top: 0;
        right: 0;
        width: 150px;
        height: 150px;
        overflow: hidden;
    }

    .ribbon::before,
    .ribbon::after {
        position: absolute;
        z-index: -1;
        content: '';
        display: block;
        border: 5px solid #6366f1;
    }

    .ribbon span { 
        position: absolute; 
        display: block; 
        width: 225px; 
        padding: 8px 0;
        background-color: #6366f1;
        box-shadow: 0 5px 10px rgba(0,0,0,.1);
        color: #fff;
        font-size: 12px;
        font-weight: 700;
        text-shadow: 0 1px 1px rgba(0,0,0,.2);
        text-align: center;
        transform: rotate(45deg);
        right: -65px;
        top: 30px;
    }

    .image-zoom {
        transition: all 0.7s ease;
    }

    .image-zoom:hover {
        transform: scale(1.1);
    }

    .card-shine {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            45deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.2) 50%,
            rgba(255,255,255,0) 100%
        );
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.5s;
    }

    .card:hover .card-shine {
        opacity: 1;
        animation: shine 1.5s ease-in-out;
    }

    .filter-button {
        transition: all 0.3s ease;
    }

    .filter-button:hover {
        transform: translateY(-2px);
    }

    .active-filter {
        animation: pulse-border 2s infinite;
    }

    @keyframes pulse-border {
        0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4); }
        70% { box-shadow: 0 0 0 10px rgba(99, 102, 241, 0); }
        100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
    }

    .bg-gradient-move {
        background-size: 200% 200%;
        animation: gradientMove 8s ease infinite;
    }

    @keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
    }

    .animate-shimmer {
    animation: shimmer 3s infinite;
    }
`;

const TechInsightsGuides = () => {
    // State management
    const [activeFilter, setActiveFilter] = useState('All');
    const [showAllInsights, setShowAllInsights] = useState(false);
    const [filteredInsights, setFilteredInsights] = useState([]);
    const [isFiltering, setIsFiltering] = useState(false);
    const [inView, setInView] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [activeCard, setActiveCard] = useState(null);
    const sectionRef = useRef(null);
    const initialItems = 6;
  
    // Filter categories
    const categories = ['All', 'DevOps', 'Tools'];
    useEffect(() => {
        filterInsights(activeFilter);
    }, [activeFilter]);
  
    const filterInsights = (filter) => {
        setIsFiltering(true);
        setTimeout(() => {
            if (filter === 'All') {
                setFilteredInsights(TechInsightsGuidesData);
            } else {
                setFilteredInsights(TechInsightsGuidesData.filter(item => item.category.includes(filter)));
            }
            
            setTimeout(() => {
                setIsFiltering(false);
            }, 50);
        }, 300);
    };
  
    // Calculate displayed insights
    const displayedInsights = showAllInsights 
        ? filteredInsights 
        : filteredInsights.slice(0, initialItems)
    ;
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.1 }
        );
        
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);
  
    return (
        <div className="w-full py-16 min-h-screen overflow-hidden" ref={sectionRef} id="tech-insights">
            <style>{AnimationStyles}</style>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header Section */}
                <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
                    <h2 className="title text-4xl md:text-5xl mt-4 mb-2">
                        <span className="text-gray-300">Tech </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-gradient-move">
                            Insights & Guides
                        </span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        Comprehensive resources and guides covering various tech domains including DevOps practices, 
                        development tools, and artificial intelligence implementations.
                    </p> 
                </div>
  
                {/* Filter Tabs */}
                <div className={`flex justify-center mb-12 transition-all duration-700 ${inView ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
                    <div className="flex space-x-4 overflow-x-auto bg-white/10 rounded-full shadow-md p-1">
                        {categories.map((filter, index) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`py-2 px-6 rounded-full transition-all duration-300 text-sm font-medium filter-button ${
                                activeFilter === filter
                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 transform scale-105 active-filter'
                                : 'text-gray-400 hover:bg-white/20 hover:text-white'
                            }`}
                                style={{ transitionDelay: `${50 * index}ms` }}
                            >
                                
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
                     
                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedInsights.map((insight, index) => (
                        <div
                            key={insight.id}
                            className={`card relative h-full card-hover-effect overflow-hidden ${
                                inView 
                                    ? ['animate-slide-in-left', 'animate-slide-in-up', 'animate-slide-in-right'][index % 3] 
                                    : 'opacity-0'
                            } ${isFiltering ? 'fade-out' : 'fade-in'}`}
                            style={{ 
                                animationDelay: `${500 + index * 100}ms`,
                                transitionDelay: `${index * 50}ms`
                            }}
                            onMouseEnter={() => setHoveredCard(insight.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Card shine effect overlay */}
                            <div className="card-shine"></div>
                            <div className="group h-full bg-indigo-200/50 dark:bg-gray-900/50 backdrop-blur-lg border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500 shadow-xl hover:shadow-indigo-500/20 flex flex-col transform">
                                <div className="relative overflow-hidden h-52">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <img 
                                        src={insight.Img} 
                                        alt={insight.Title} 
                                        className="w-full h-full object-cover image-zoom" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600/90 text-white backdrop-blur-sm shadow-lg">
                                            {insight.category[0]}
                                        </span>
                                    </div>
                                    
                                    {/* Hover overlay with additional details */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-transparent p-6 flex flex-col justify-end transition-all duration-500 ${
                                        hoveredCard === insight.id ? 'opacity-100' : 'opacity-0'
                                    }`}>
                                        <div className="transform transition-all duration-300"
                                            style={{ 
                                                transform: hoveredCard === insight.id ? 'translateY(0)' : 'translateY(20px)',
                                                opacity: hoveredCard === insight.id ? 1 : 0,
                                                transitionDelay: '100ms'
                                            }}>
                                           
                                          
                                            <p className="text-gray-200 text-sm">{insight.description}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent pb-4 transition-colors duration-300">
                                        {insight.Title}
                                    </h3>
                                    <a 
                                        href={insight.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="mt-auto group relative py-3 px-6 rounded-lg bg-black/10 dark:bg-white/5 hover:from-indigo-500 hover:to-purple-500 text-gray-500 dark:text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 text-center overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center justify-center">
                                            Explore Guide
                                            <ExternalLink size={16} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                                        </span>
                                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white/50 rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
                                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 -translate-x-full animate-shimmer"></span>

                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Show More Button */}
                {filteredInsights.length > initialItems && (
                    <div 
                        className={`flex mt-12 transition-all duration-700 ${inView ? 'animate-slide-in-up' : 'opacity-0'}`}
                        style={{ animationDelay: '800ms' }}
                    >
                        <button
                            onClick={() => setShowAllInsights(!showAllInsights)}
                            className="px-3 py-1.5 text-gray-700 dark:text-slate-300 hover:text-gray-800 dark:hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2  backdrop-blur-sm group relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center">
                                {showAllInsights ? (
                                    <>
                                        <span className="mr-2">See Less</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                        <span className="mr-2">See More</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </>
                                )}
                            </span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    </div>
                )}
                
                {/* Back to Top Button */}
                <div 
                    className={`flex justify-center mt-16 transition-all duration-700 ${inView ? 'animate-slide-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: '900ms' }}
                >
                    <a href="#top" className="group relative overflow-hidden">
                        <button className="flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium transform transition-all duration-300 relative z-10">
                            Back to Top
                            <ArrowUp size={18} className="transform transition-transform duration-300 group-hover:-translate-y-1" />
                        </button>
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                    </a>
                </div>
            </div>
        </div>
    );
};
  
export default TechInsightsGuides;