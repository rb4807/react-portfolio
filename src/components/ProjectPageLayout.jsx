import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectDetails from './ProjectDetail';
import useThemeStore from "../stores/useThemeStore";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import dark from '../assets/dark.webp';
import light from '../assets/light.png';
import hackerrank from '../assets/hackerrank.png';
import leetcode from '../assets/leetcode.png';
import { applyThemePreference } from "../utils/themeUtils";
import AnimatedBackground from "../utils/Background";

const ProjectPageLayout = () => {
  // Get theme from the store
  const theme = useThemeStore((state) => state.theme);
  
  // Apply theme when component mounts or theme changes
  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);

  // HackerRank icon component
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
  
  // LeetCode icon component
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
  
  // Social media links
  const SOCIAL_LINKS = [
    { icon: Mail , link: "mailto:rajesh.mbalu@gmail.com" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/rajesh-mbalu" },
    { icon: Github, link: "https://github.com/rb4807" },
    { icon: HackerRankIcon, link: "https://www.hackerrank.com/profile/rb160601"},
    { icon: LeetCodeIcon, link: "https://leetcode.com/u/rajesh-mbalu/"},
    { icon: Instagram, link: "https://instagram.com/https://instagram.com/_._r__b_._" }       
];

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-baseLight' : 'bg-baseDark'}`}>
      {/* Add animated background to match home page styling */}
      {/* <AnimatedBackground /> */}
      
      {/* Project details component */}
      <ProjectDetails />
      
      {/* Footer section */}
      <div className="border-t dark:border-gray-600 border-black/30" id="contact-me"></div>
            
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
                      aria-label={social.link.split('/').pop() || "Social link"}
                    >
                      <div className="relative p-1 sm:p-2 rounded-lg sm:rounded-xl transition-all duration-300">
                        {social.type === "custom" ? (
                          <social.icon />
                        ) : (
                          <social.icon className="w-4 h-4 sm:w-5 sm:h-5 
                            text-gradient1Light dark:text-gray-400 
                            group-hover:text-gradient4Light dark:group-hover:text-white 
                            transition-colors" />
                        )}
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
  );
};

export default ProjectPageLayout;