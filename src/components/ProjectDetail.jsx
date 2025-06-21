import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

import school_1 from '../assets/school_1.png';
import school_2 from '../assets/school_2.png';
import jewellery_1 from '../assets/jewellery_1.png';
import jewellery_2 from '../assets/jewellery_2.png';
import chatgpt_1 from '../assets/chatgpt_1.png';
import chatgpt_2 from '../assets/chatgpt_2.png';
import text_voice_1 from '../assets/text_voice_1.jpg';
import text_voice_2 from '../assets/text_voice_2.jpg';
import real_time_web_socket_1 from '../assets/real_time_web_socket_1.png';
import real_time_web_socket_2 from '../assets/real_time_web_socket_2.png';
import daily_food_expense_tracker_1 from '../assets/daily_food_expense_tracker_1.jpg';
import daily_food_expense_tracker_3 from '../assets/daily_food_expense_tracker_3.jpg';
import daily_food_expense_tracker_4 from '../assets/daily_food_expense_tracker_4.jpg';
import teammed_1 from '../assets/teammed_1.png';
import teammed_2 from '../assets/teammed_2.png';
import ecommerce_1 from '../assets/ecommerce_1.png';
import ecommerce_2 from '../assets/ecommerce_2.png';
import { ArrowLeft, ExternalLink, Github, Code2, X, ChevronRight, Layers, Layout, Image as ImageIcon } from "lucide-react";
import Swal from "sweetalert2";
import useThemeStore from "../stores/useThemeStore";

// Add this array near the top of your file, before the component definitions
const ProjectsGalleryData = [
    { id: 1, Title: 'Notespaedia', GalleryImg: [], DemoLink: 'https://github.com/rb4807/'  },
    { id: 2, Title: 'Visual Takes', GalleryImg: [], DemoLink: 'https://github.com/rb4807/' },
    { id: 3, Title: 'Deltafour', GalleryImg: [], DemoLink: 'https://github.com/rb4807/'},
    { id: 4, Title: 'Beond Audit', GalleryImg: [], DemoLink:'https://app.beondaudit.com/' },
    { id: 5, Title: 'Beond Work', GalleryImg: [] , DemoLink: 'https://beondwork.com/'},
    { id: 6, Title: 'School Management App', GalleryImg: [school_1, school_2], DemoLink: 'https://school-psi-ten.vercel.app/'},
    { id: 7, Title: 'Real-time market data multi streaming via WebSocket', GalleryImg: [real_time_web_socket_1, real_time_web_socket_2], DemoLink: 'https://github.com/rb4807/'},
    { id: 8, Title: 'Jewellery Shopping App', GalleryImg: [jewellery_1, jewellery_2], DemoLink: 'https://mfj.vercel.app/'},
    { id: 9, Title: 'ChatGPT Clone', GalleryImg: [chatgpt_1, chatgpt_2], DemoLink: 'https://chatgpt-clone-7jxv.vercel.app/'},
    { id: 10, Title: 'Ecommerce App', GalleryImg: [ecommerce_1, ecommerce_2] , DemoLink: 'https://github.com/rb4807/'},
    { id: 11, Title: 'Hospital Appointment App', GalleryImg: [teammed_1, teammed_2] , DemoLink: 'https://github.com/rb4807/'},
    { id: 12, Title: 'Text to Voice Generator with Multiple Voice', GalleryImg: [text_voice_1, text_voice_2], DemoLink:'https://text-to-voice-generator.vercel.app/'},
    { id: 13, Title: 'Daily Food Expense Tracker', GalleryImg: [daily_food_expense_tracker_1, daily_food_expense_tracker_3, daily_food_expense_tracker_4], DemoLink:'https://github.com/rb4807/food-expense-tracker/'},
];

// Animated Background Component for Light Theme
const AnimatedBackground = () => {
  const blobRefs = useRef([]);
  const initialPositions = [
    { x: -4, y: 0 },
    { x: -4, y: 0 },
    { x: 20, y: -8 },
    { x: 20, y: -8 },
    { x: 0, y: 20 },
  ];

  useEffect(() => {
    let currentScroll = 0;
    let requestId;
    const handleScroll = () => {
      const newScroll = window.pageYOffset;
      const scrollDelta = newScroll - currentScroll;
      currentScroll = newScroll;
      blobRefs.current.forEach((blob, index) => {
        if (!blob) return;
        const initialPos = initialPositions[index];

        // Enhanced movement calculations for light theme
        const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 340;
        const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40;

        const x = initialPos.x + xOffset;
        const y = initialPos.y + yOffset;

        // Apply transformation with smooth transition
        blob.style.transform = `translate(${x}px, ${y}px)`;
        blob.style.transition = "transform 1.4s ease-out";
      });

      requestId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestId);
    };
  }, []);

  // Floating particles for light theme
  const LightThemeParticles = () => {
    return (
      <div>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-200/30 to-purple-200/30 animate-pulse opacity-40 mix-blend-multiply filter blur-md"
            style={{
              width: `${Math.random() * 50 + 20}px`,
              height: `${Math.random() * 50 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 3}s`,
            }}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Gradient blobs */}
      <div className="absolute inset-0">
        <div ref={(ref) => (blobRefs.current[0] = ref)} className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20"></div>
        <div ref={(ref) => (blobRefs.current[1] = ref)} className="absolute top-0 -right-4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 hidden sm:block"></div>
        <div ref={(ref) => (blobRefs.current[2] = ref)} className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20"></div>
        <div ref={(ref) => (blobRefs.current[3] = ref)} className="absolute -bottom-10 right-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 md:opacity-10 hidden sm:block"></div>
        <div ref={(ref) => (blobRefs.current[4] = ref)} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 hidden sm:block"></div>
      </div>
      
      {/* Light theme prism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-purple-100/10 to-pink-100/20"></div>
      
      {/* Light theme particles */}
      <LightThemeParticles />
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hexagon-pattern bg-[size:60px_60px]"></div>
      
      {/* Floating shapes for light theme */}
      <div className="hidden md:block">
        <div className="absolute top-16 left-2/3 w-16 h-16 rounded-full bg-gradient-to-tr from-blue-200/25 to-purple-200/25 backdrop-blur-sm animate-float" style={{ animationDelay: "1.3s" }}></div>
        <div className="absolute top-32 right-56 w-20 h-20 rounded-tr-3xl rounded-bl-3xl bg-gradient-to-tr from-pink-200/30 to-blue-200/20 backdrop-blur-sm animate-float" style={{ animationDelay: "2.7s" }}></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-tl-2xl rounded-br-2xl bg-gradient-to-r from-blue-200/25 to-cyan-200/25 backdrop-blur-sm animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-2/3 left-2/5 w-10 h-28 rounded-full bg-gradient-to-tr from-indigo-200/20 to-purple-200/20 backdrop-blur-sm animate-float" style={{ animationDelay: "3.2s" }}></div>
        <div className="absolute bottom-28 left-96 w-28 h-20 rounded-full bg-gradient-to-br from-cyan-200/30 to-blue-200/30 backdrop-blur-sm animate-float" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-40 right-2 w-14 h-14 rotate-45 rounded-sm bg-gradient-to-tr from-blue-200/25 to-pink-200/25 backdrop-blur-sm animate-float" style={{ animationDelay: "2.2s" }}></div>
        <div className="absolute bottom-16 right-1/2 w-20 h-20 rounded-tl-3xl rounded-br-xl bg-gradient-to-br from-purple-200/30 to-indigo-200/30 backdrop-blur-sm animate-float" style={{ animationDelay: "1.8s" }}></div>
      </div>
    </div>
  );
};

const ProjectDescriptionFun = ({ description }) => {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === 'dark';
  
  return (
    <div className={`${isDark ? 'bg-white/[0.02]' : 'bg-white/50 backdrop-blur-xl'} rounded-2xl p-8 ${isDark ? 'border border-white/10' : 'border border-gray-200'} space-y-6 ${isDark ? 'hover:border-white/20' : 'hover:border-gray-300'} transition-colors duration-300 group`}>
      <h3 className={`text-xl font-semibold ${isDark ? 'text-white/90' : 'text-gray-800'} flex items-center gap-3`}>
        <Layout className="w-5 h-5 text-blue-400 group-hover:rotate-[20deg] transition-transform duration-300" />
        Project Description
      </h3>
      <div className={`prose ${isDark ? 'prose-invert' : ''} max-w-none`}>
        <p className={`${isDark ? 'text-gray-300/90' : 'text-gray-600'} leading-relaxed`}>
          {description || "No description available."}
        </p>
      </div>
    </div>
  );
};

const ProjectStats = ({ project }) => {
  const techStackCount = project.techStackCount || 0;
  const packageCount = project.packageCount || 0;
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === 'dark';

  return (
    <div className={`grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 ${isDark ? 'bg-[#0a0a1a]' : 'bg-white/40 backdrop-blur-lg'} rounded-xl overflow-hidden relative`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50 blur-2xl z-0" />

      <div className={`relative z-10 flex items-center space-x-2 md:space-x-3 ${isDark ? 'bg-white/5' : 'bg-white/70'} p-2 md:p-3 rounded-lg border border-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg`}>
        <div className={`${isDark ? 'bg-blue-500/20' : 'bg-blue-100'} p-1.5 md:p-2 rounded-full`}>
          <Code2
            className={`${isDark ? 'text-blue-300' : 'text-blue-500'} w-4 h-4 md:w-6 md:h-6`}
            strokeWidth={1.5}
          />
        </div>
        <div className="flex-grow">
          <div className={`text-lg md:text-xl font-semibold ${isDark ? 'text-blue-200' : 'text-blue-600'}`}>
            {techStackCount}
          </div>
          <div className="text-[10px] md:text-xs text-gray-400">
            Total Technologies
          </div>
        </div>
      </div>

      <div className={`relative z-10 flex items-center space-x-2 md:space-x-3 ${isDark ? 'bg-white/5' : 'bg-white/70'} p-2 md:p-3 rounded-lg border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg`}>
        <div className={`${isDark ? 'bg-purple-500/20' : 'bg-purple-100'} p-1.5 md:p-2 rounded-full`}>
          <Layers
            className={`${isDark ? 'text-purple-300' : 'text-purple-500'} w-4 h-4 md:w-6 md:h-6`}
            strokeWidth={1.5}
          />
        </div>
        <div className="flex-grow">
          <div className={`text-lg md:text-xl font-semibold ${isDark ? 'text-purple-200' : 'text-purple-600'}`}>
            {packageCount}
          </div>
          <div className="text-[10px] md:text-xs text-gray-400">
            Packages & Library
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Project Gallery component
// Enhanced Project Gallery component with image preview modal
const ProjectGallery = ({ projectImages }) => {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === 'dark';
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);

  // If no images are provided, return null
  if (!projectImages || projectImages.length === 0) {
    return null;
  }

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={`${isDark ? 'bg-white/[0.02]' : 'bg-white/50 backdrop-blur-xl'} rounded-2xl mt-8 p-8 ${isDark ? 'border border-white/10' : 'border border-gray-200'} space-y-6 ${isDark ? 'hover:border-white/20' : 'hover:border-gray-300'} transition-colors duration-300 group`}>
        <h3 className={`text-xl font-semibold ${isDark ? 'text-white/90' : 'text-gray-800'} flex items-center gap-3`}>
          <ImageIcon className="w-5 h-5 text-blue-400 group-hover:rotate-[20deg] transition-transform duration-300" />
          Project Gallery
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {projectImages.map((image, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-xl ${isDark ? 'bg-white/5' : 'bg-white/70'} p-2 border ${isDark ? 'border-white/10' : 'border-gray-200'} hover:shadow-lg transition-all duration-300 group/card cursor-pointer`}
              onClick={() => handleOpen(image)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <img 
                  src={image} 
                  alt={`${index === 0 ? 'Main' : `Screenshot ${index}`}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
                <div className={`absolute inset-0 ${isDark ? 'bg-black/40' : 'bg-white/10'} opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                  <div className={`transform translate-y-4 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    <span className="text-sm font-medium">Click to preview</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {open && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isDark ? 'bg-black/90' : 'bg-white/95'} backdrop-blur-sm`}>
          <div className="relative max-w-6xl max-h-[90vh]">
            <button
              onClick={handleClose}
              className={`absolute top-1 right-1 z-10 p-2 rounded-full ${isDark ? ' hover:bg-white/20 text-black' : 'hover:bg-black/20 text-black'}`}
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative w-full h-full overflow-auto">
              <img 
                src={selectedImage} 
                alt="Project preview" 
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
            
           
          </div>
        </div>
      )}
    </>
  );
};
  
const handleGithubClick = (githubLink) => {
  if (githubLink === "Private") {
    Swal.fire({
      icon: "info",
      title: "Source Code Private",
      text: "Maaf, source code untuk proyek ini bersifat privat.",
      confirmButtonText: "Mengerti",
      confirmButtonColor: "#3085d6",
      background: "#030014",
      color: "#ffffff",
    });
    return false;
  }
  return true;
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === 'dark';
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const selectedProject = storedProjects.find((p) => String(p.id) === id);
    
    // Find gallery data from the local array
    const galleryData = ProjectsGalleryData.find(p => p.id === parseInt(id));
    
    if (selectedProject) {
      // Create image array - start with main image, then add gallery images
      const projectImages = [
        selectedProject.Img,
        ...(galleryData ? galleryData.GalleryImg : [])
      ].filter(img => img);
      
      console.log("selectedProject", selectedProject)
      const enhancedProject = {
        ...selectedProject,
        Features: selectedProject.Features || [],
        TechStack: selectedProject.TechStack || {},
        DemoLink: galleryData?.DemoLink || "https://github.com/rb4807", 
        Github: selectedProject.Github || "https://github.com/rb4807",
        ProjectDescription: selectedProject.ProjectDescription || "",
        techStackCount: selectedProject.techStackCount || 0,  
        packageCount: selectedProject.packageCount || 0,
        projectImages: projectImages
      };
      
      setProject(enhancedProject);
    }
  }, [id]);
  
  if (!project) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-[#030014]' : 'bg-gray-50'} flex items-center justify-center`}>
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 md:w-24 md:h-24 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          <h2 className={`text-xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Loading Project...
          </h2>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#030014]' : 'bg-gray-50'} px-[2%] sm:px-0 relative overflow-hidden`}>
      {/* Background animations - conditionally rendered based on theme */}
      {isDark ? (
        // Dark theme background
        <div className="fixed inset-0">
          <div className="absolute -inset-[10px] opacity-20">
            <div className="absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
            <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
          </div>
          <div className="absolute inset-0 opacity-[0.02]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
      ) : (
        // Light theme background using AnimatedBackground
        <AnimatedBackground />
      )}

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
          <div className="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn">
            <button
              onClick={() => navigate(-1)}
              className={`group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 ${isDark ? 'bg-white/5 backdrop-blur-xl text-white/90 hover:bg-white/10 border-white/10 hover:border-white/20' : 'bg-white/70 backdrop-blur-xl text-gray-800 hover:bg-white/80 border-gray-200 hover:border-gray-300'} rounded-xl transition-all duration-300 border text-sm md:text-base`}
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-gray-500">
              <span>Projects</span>
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              <span className={`${isDark ? 'text-white/90' : 'text-gray-800'} truncate`}>{project.Title}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-6 md:space-y-10 animate-slideInLeft">
              <div className="space-y-4 md:space-y-6">
                <h1 className={`text-3xl md:text-5xl font-bold ${isDark ? 'bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent' : 'text-gray-800'} leading-tight`}>
                  {project.Title}
                </h1>
                <div className="relative h-1 w-16 md:w-24">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
                </div>
              </div>

              <div className={`prose ${isDark ? 'prose-invert' : ''} max-w-none ${!isDark && 'bg-white/50 backdrop-blur-md p-6 rounded-xl border border-gray-200'}`}>
                <p className={`text-base md:text-lg ${isDark ? 'text-gray-300/90' : 'text-gray-600'} leading-relaxed`}>
                  {project.Description}
                </p>
              </div>
              
              <ProjectDescriptionFun description={project.ProjectDescription} />
            </div>

            <div className="space-y-6 md:space-y-10 animate-slideInRight">
              {/* Tech Stack */}
              <div className={`${isDark ? 'bg-white/[0.02]' : 'bg-white/50'} backdrop-blur-xl rounded-2xl p-8 ${isDark ? 'border border-white/10' : 'border border-gray-200'} space-y-6 ${isDark ? 'hover:border-white/20' : 'hover:border-gray-300'} transition-colors duration-300 group`}>
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white/90' : 'text-gray-800'} flex items-center gap-3`}>
                  <Code2 className="w-4 h-5 md:w-5 md:h-5 text-blue-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                  Tech Stack
                </h3>
                {Object.keys(project.TechStack).length > 0 ? (
                  <div className="tech-stack space-y-4">
                    {Object.entries(project.TechStack).map(
                      ([category, technologies], index) => (
                        <div key={index} className="tech-category">
                          <strong className={`text-sm md:text-base ${isDark ? 'text-blue-200' : 'text-blue-600'}`}>
                            {category.replace(/([A-Z])/g, " $1").toUpperCase()}{" "}
                            :
                          </strong>
                          <span className={`pl-1 text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {technologies.join(", ")}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <p className={`text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-500'} opacity-50`}>
                    No technologies added.
                  </p>
                )}
              </div>

              <ProjectStats project={project} />
              
              <div className="flex flex-wrap gap-3 md:gap-4">
                <a
                  href={project.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 ${isDark ? 'bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 text-purple-300 border-purple-500/20 hover:border-purple-500/40' : 'bg-gradient-to-r from-purple-100/70 to-pink-100/70 hover:from-purple-200/70 hover:to-pink-200/70 text-purple-700 border-purple-300 hover:border-purple-400'} rounded-xl transition-all duration-300 border backdrop-blur-xl overflow-hidden text-sm md:text-base`}
                  onClick={(e) =>
                    !handleGithubClick(project.Github) && e.preventDefault()
                  }
                >
                  <div className={`absolute inset-0 translate-y-[100%] ${isDark ? 'bg-gradient-to-r from-purple-600/10 to-pink-600/10' : 'bg-gradient-to-r from-purple-200/70 to-pink-200/70'} transition-transform duration-300 group-hover:translate-y-[0%]`} />
                  <Github className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                  <span className="relative font-medium">Github</span>
                </a>

                <a
                  href={project.DemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 ${isDark ? 'bg-gradient-to-r from-blue-600/10 to-cyan-600/10 hover:from-blue-600/20 hover:to-cyan-600/20 text-blue-300 border-blue-500/20 hover:border-blue-500/40' : 'bg-gradient-to-r from-blue-100/70 to-cyan-100/70 hover:from-blue-200/70 hover:to-cyan-200/70 text-blue-700 border-blue-300 hover:border-blue-400'} rounded-xl transition-all duration-300 border backdrop-blur-xl overflow-hidden text-sm md:text-base`}
                >
                  <div className={`absolute inset-0 translate-y-[100%] ${isDark ? 'bg-gradient-to-r from-blue-600/10 to-cyan-600/10' : 'bg-gradient-to-r from-blue-200/70 to-cyan-200/70'} transition-transform duration-300 group-hover:translate-y-[0%]`} />
                  <ExternalLink className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                  <span className="relative font-medium">Check Now</span>
                </a>
              </div>
              
             
            </div>
          </div>
          
          {/* Project Gallery moved here, outside the grid for full-width display */}
          {project.projectImages && project.projectImages.length > 0 && (
            <ProjectGallery projectImages={project.projectImages} />
          )}
          
        </div>
      </div>

      <style jsx>
        {`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 10s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          .animate-fadeIn {
            animation: fadeIn 0.7s ease-out;
          }
          .animate-slideInLeft {
            animation: slideInLeft 0.7s ease-out;
          }
          .animate-slideInRight {
            animation: slideInRight 0.7s ease-out;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes float {
            0% {
              transform: translateY(0px) translateX(0px);
            }
            50% {
              transform: translateY(-15px) translateX(10px);
            }
            100% {
              transform: translateY(0px) translateX(0px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProjectDetails;