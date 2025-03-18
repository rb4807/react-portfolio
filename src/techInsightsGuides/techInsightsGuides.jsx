import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Box } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import CardProject from '../components/CardProject'; 
import ToggleButton from '../components/ToggleButton';
import apache_django from '../assets/apache_django.jpg';
import nginx_django from '../assets/nginx_django.jpg';
import nginx_react from '../assets/nginx_react.jpg';
import automated_react_tailwind_setup from '../assets/automated_react_tailwind_setup.jpg';
import ckeditor_integration_django from '../assets/ckeditor_integration_django.jpg';
import web_gl_deployment from '../assets/web_gl_deployment.jpg';

const TechInsightsGuidesData = [
    { id: 1, Img: nginx_django, Title: 'Django Deployment Guide on Ubuntu with Nginx', description: 'Comprehensive guide to deploying Django projects on Ubuntu Server with Nginx, MySQL, and PostgreSQL.', category: ['DevOps'], url: 'https://nginx-django-deployment-mzuz.vercel.app/' },
    { id: 2, Img: apache_django, Title: 'Django Deployment Guide on Ubuntu with Apache', description: 'Comprehensive guide to deploying Django projects on Ubuntu Server with Apache, MySQL, and PostgreSQL.', category: ['DevOps'], url: 'https://apache-django-deployment.vercel.app/' },
    { id: 3, Img: nginx_react, Title: 'React Deployment Guide on Ubuntu with Nginx', description: 'Comprehensive guide to deploying React apps on Ubuntu Server with Nginx, covering Standard Build, Docker, and PM2 methods.', category: ['DevOps'], url: 'https://nginx-react-deployment.vercel.app/' },
    { id: 4, Img: web_gl_deployment, Title: 'Web GL Deployment Deployment Guide on Ubuntu with Nginx and Apache', description: 'Comprehensive guide to deploying WebGL applications on Ubuntu Server using Apache and Nginx, covering setup, configuration, and optimization steps.', category: ['DevOps'], url: 'https://web-gl-deployment.vercel.app/' },
    { id: 5, Img: automated_react_tailwind_setup, Title: 'Automated React + Tailwind Setup with a Single Python Script', description: 'One-step solution to create a React project with Tailwind CSS using a single Python script and command.', category: ['Tools'], url: 'https://react-tailwind-auto-setup.vercel.app/' },
    { id: 6, Img: ckeditor_integration_django, Title: 'CKEditor Integration in Django: With and Without forms.py', description: 'Comprehensive guide to integrating CKEditor rich text editor in Django projects, covering both direct model integration and forms.py approach.', category: ['Tools'], url: 'https://ckeditor-integration-documentation.vercel.app/' },
    { id: 7, Img: ckeditor_integration_django, Title: 'CKEditor Integration in Django: With and Without forms.py', description: 'Comprehensive guide to integrating CKEditor rich text editor in Django projects, covering both direct model integration and forms.py approach.', category: ['Tools'], url: 'https://ckeditor-integration-documentation.vercel.app/' },
];

function TechInsightsGuides() {
    const [subTabValue, setSubTabValue] = useState(0);
    const [showAllInsights, setShowAllInsights] = useState(false);
    const initialItems = 6;

    const handleSubTabChange = (event, newSubTabValue) => {
        setSubTabValue(newSubTabValue);
    };

    const toggleShowMore = () => {
        setShowAllInsights(!showAllInsights);
    };

    const getFilteredInsights = () => {
        if (subTabValue === 0) return TechInsightsGuidesData; 
        const categories = ['DevOps', 'Tools', 'Ai'];
        return TechInsightsGuidesData.filter(insight => insight.category.includes(categories[subTabValue - 1]));
    };
    
    const displayedInsights = showAllInsights ? getFilteredInsights() : getFilteredInsights().slice(0, initialItems);

    // Custom card component with Check it out button
    const InsightCard = ({ insight, index }) => {
        return (
            <div className="group relative bg-white/20 dark:bg-gray-900/50 backdrop-blur-lg border border-black/10 dark:border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="overflow-hidden relative">
                    <img 
                        src={insight.Img} 
                        alt={insight.Title} 
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{insight.Title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{insight.description}</p>
                    
                    <a 
                        href={insight.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block text-center w-full px-4 py-2 bg-white/5 hover:bg-white/10 text-white/90 font-medium rounded-lg hover:opacity-90 transition-all duration-300"
                    >
                        Check it out
                    </a>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="md:px-[10%] px-[5%] w-full sm:mt-0 bg-baseLight dark:bg-baseDark overflow-hidden" id="TechInsightsGuides">
                {/* Header section */}
                <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="title inline-block text-3xl md:text-5xl md:pt-[10%] text-center mx-auto">
                        <span className='text-titleLight dark:text-gray-400'>Tech </span><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]' style={{ color: '#6366f1', backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                            Insights & Guides
                        </span>
                    </h2>
                    <p className="text-gray-700 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
                        Comprehensive resources and guides covering various tech domains including DevOps practices, 
                        development tools, and artificial intelligence implementations.
                    </p>
                </div>

                <Box sx={{ width: "100%" }}>
                    {/* Sub-tabs for Tech Insights */}
                    <AppBar position="static" elevation={0}
                        sx={{
                            bgcolor: "transparent",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "20px",
                            position: "relative",
                            overflow: "hidden",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
                                backdropFilter: "blur(10px)",
                                zIndex: 0,
                            },
                        }} className="md:px-4"
                    >
                        <Tabs value={subTabValue} onChange={handleSubTabChange} textColor="secondary" indicatorColor="secondary" variant="fullWidth"
                            sx={{
                                minHeight: "70px",
                                "& .MuiTab-root": {
                                    fontSize: { xs: "0.9rem", md: "1rem" },
                                    fontWeight: "600",
                                    color: "#94a3b8",
                                    textTransform: "none",
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    padding: "20px 0",
                                    zIndex: 1,
                                    margin: "8px",
                                    borderRadius: "12px",
                                    "&:hover": {
                                        color: "#ffffff",
                                        backgroundColor: "rgba(139, 92, 246, 0.1)",
                                        transform: "translateY(-2px)",
                                    },
                                    "&.Mui-selected": {
                                        color: "#fff",
                                        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                                        boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                                    },
                                },
                                "& .MuiTabs-indicator": {
                                    height: 0,
                                },
                                "& .MuiTabs-flexContainer": {
                                    gap: "8px",
                                },
                            }}
                        >
                            <Tab label="All" />
                            <Tab label="DevOps" />
                            <Tab label="Tools" />
                        </Tabs>
                    </AppBar>

                    {/* Content Section */}
                    <div className="container mx-auto flex justify-center items-center overflow-hidden mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {displayedInsights.map((insight, index) => (
                                <div key={insight.id} data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"} data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}>
                                    <InsightCard insight={insight} index={index} />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {TechInsightsGuidesData.length > initialItems && (
                        <div className="mt-6 w-full flex justify-start">
                            <ToggleButton onClick={toggleShowMore} isShowingMore={showAllInsights} />
                        </div>
                    )}
                </Box>
                
                <div className="flex justify-center mt-8 mb-10">
                    <a href="#top"> 
                        <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:bg-titleLight text-titleDark hover:text-white dark:bg-baseColor dark:hover:bg-titleDark dark:text-titleDark dark:hover:text-black hover:border-transparent transition duration-300 flex items-center">
                            Back to top
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 inline-block icon icon-tabler icon-tabler-chevrons-up" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M7 11l5 -5l5 5" />
                                <path d="M7 17l5 -5l5 5" />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default TechInsightsGuides;