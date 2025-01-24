import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Box } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { Code, Award, Boxes, Waypoints } from 'lucide-react'; 
import CardProject from '../components/CardProject'; 
import Certificate from '../components/Certificate';
import TechStack from '../components/TechStack';
import ToggleButton from '../components/ToggleButton';

import school from '../assets/school.png';
import mfj from '../assets/mfj.webp';
import notespedia from '../assets/notespedia.jpg';
import chatgpt from '../assets/chatgpt.png';
import ecommerce from '../assets/ecommerce.webp';
import teammed from '../assets/teammed.webp';
import beond_audit from '../assets/beond_audit.jpg';
import deltafour from '../assets/deltafour.jpg';
import beond_work from '../assets/beond_work.jpg';
import movie from '../assets/movie.png';
import text_to_voice from '../assets/text_to_voice.png';

import agile from '../assets/agile.jpg';
import django from '../assets/django.jpg';
import html_css from '../assets/html_css.jpg';
import ibm from '../assets/ibm.jpg';
import infosys from '../assets/infosys.jpg';
import python_hackerrank from '../assets/python_hackerrank.jpg';
import react from '../assets/react.jpg';


const ProjectsData = [
    { id: 1, Img: notespedia, Title: 'Notespaedia', responsibility: 'Backend development & Full Stack Development', Link: '#', category: ['Python', 'JavaScript'] },
    { id: 2, Img: movie, Title: 'Visual takes', responsibility: 'Backend development', Link: '#', category: ['Python'] },
    { id: 3, Img: deltafour, Title: 'Deltafour', responsibility: 'Backend development & Full Stack Development', Link: '#', category: ['Python', 'JavaScript'] },
    { id: 4, Img: beond_audit, Title: 'Beond Audit', responsibility: 'Backend development & Full Stack Development', Link: '#', category: ['Python', 'JavaScript', 'Golang'] },
    { id: 5, Img: beond_work, Title: 'Beond Work', responsibility: 'Backend development & Full Stack Development', Link: '#', category: ['Python', 'JavaScript'] },
    { id: 6, Img: school, Title: 'School Management Web App', responsibility: 'Full Stack Development', Link: '#', category: ['Python', 'JavaScript'] },
    { id: 7, Img: mfj, Title: 'Jewellery Shopping Web App', responsibility: 'Full Stack Development', Link: '#', category: ['JavaScript', 'Python'] },
    { id: 8, Img: chatgpt, Title: 'ChatGPT Clone', responsibility: 'Full Stack Development', Link: '#', category: ['JavaScript'] },
    { id: 9, Img: ecommerce, Title: 'Ecommerce Web App', responsibility: 'Full Stack Development', Link: '#', category: ['Python', 'JavaScript'] },
    { id: 10, Img: teammed, Title: 'Hospital Appointment Web App', responsibility: 'Full Stack Development', Link: '#', category: ['Python', 'JavaScript'] },
    { id: 11, Img: text_to_voice, Title: 'Text to Voice Generator with Muliple Voice', responsibility: 'Full Stack Development', Link: '#', category: ['JavaScript'] },
];

const CertificatesData = [
    { id: 1, Img: python_hackerrank, title:'Successfully completed HackerRank, Python assessment.' },
    { id: 2, Img: django, title:'Python Backend And Django Framework Complete Course.' },
    { id: 3, Img: html_css, title:'CSS, Bootstrap, JavaScript, Web Development Course.' },
    { id: 4, Img: infosys, title:'Power Programmer Virtual Experience Program from Infosys.' },
    { id: 5, Img: react, title:'React.JS: Front-end The Complete Course for Beginners.' },
    { id: 6, Img: agile, title:'Agile Development Methodology from UDEMY.' },
    { id: 7, Img: ibm, title:'Data Science Tools from IBM.' },
];

const TechStacksData = [
    { id: 1, icon: 'Binary', heading: 'Languages', language: ['Python', 'JavaScript', 'Golang'] },
    { id: 2, icon: 'Globe', heading: 'Web Technologies', language: ['HTML5', 'CSS3', 'jQuery'] },
    { id: 3, icon: 'LayoutPanelTop', heading: 'CSS Framework', language: ['TailwindCSS', 'Bootstrap'] },
    { id: 4, icon: 'Braces', heading: 'Framework', language: ['Django', 'Gin', 'React.JS'] },
    { id: 5, icon: 'ChevronsLeftRightEllipsis', heading: 'API Integration', language: ['REST API', 'Axios', 'Swagger'] },
    { id: 6, icon: 'Cloud', heading: 'DevOps', language: ['GitHub', 'Vercel', 'Docker', 'AWS', 'Apache', 'Nginx'] },
    { id: 7, icon: 'ShoppingBag', heading: 'CMS Platforms', language: ['Shopify', 'WordPress'] },
    { id: 8, icon: 'BrainCircuit', heading: 'AI & ML', language: ['Pandas', 'Pytorch', 'Numpy', 'Ollama', 'Stable Diffusion'] },
    { id: 9, icon: 'DatabaseZap', heading: 'Database', language: ['MySQL', 'PostgreSQL', 'DynamoDB', 'SQLite'] },
    { id: 10, icon: 'SquareChartGantt', heading: 'Project Management', language: ['Jira', 'Microsoft Office'] },
    { id: 11, icon: 'Laptop', heading: 'Operating Systems', language: ['Linux', 'Windows'] },
];

const JourneyData = {
    education: [
        { id: 1, year: '2019-2023', title: 'BACHELOR’S OF ENGINEERING', school: 'Nehru Institute of Engineering and Technology', cgpa:'7.9', university:'Anna University' },
        { id: 2, year: '2017-2019', title: 'SENIOR SECONDARY EDUCATION', school: 'Karnakiyamman School', cgpa:'6.6', university:'Kerala State Board' },
        { id: 3, year: '2016-2017', title: 'SECONDARY EDUCATION', school: 'St.Raphaels School', cgpa:'7.2', university:'Central Board of Secondary Education' },
    ],
    experience: [
        { id: 1, year: '2024-Present (1 Year)', company:'Deienami', role: 'Software Solution Engineer', location: 'Kochi, Kerala' },
        { id: 2, year: '2023-2024 (6 Months)', company:'Luminar Technolab', role: 'Python Full Stack Developer Intern', location: 'Trivandrum, Kerala' },
    ],
};

function Portfolio() {
    const [value, setValue] = useState(0);
    const [subTab, setSubTab] = useState(0);
    const [subTabValue, setSubTabValue] = useState(0); 
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [showAllCertificates, setShowAllCertificates] = useState(false);
    const initialItems = 6;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSubTabChange = (event, newSubTabValue) => {
        setSubTabValue(newSubTabValue);
    };

    const toggleShowMore = (type) => {
        if (type === 'projects') {
            setShowAllProjects(!showAllProjects);
        } else if (type === 'certificates') {
            setShowAllCertificates(!showAllCertificates);
        }
    };

    const getFilteredProjects = () => {
        if (subTabValue === 0) return ProjectsData; 
        const categories = ['Python', 'JavaScript', 'Golang'];
        return ProjectsData.filter(project => project.category.includes(categories[subTabValue - 1]));
    };
    

    const handleProjectSubTabChange = (event, newSubTabValue) => {
        setSubTabValue(newSubTabValue);
    };
    
    const handleJourneySubTabChange = (event, newSubTabValue) => {
        setSubTab(newSubTabValue);
    };
    
    const displayedProjects = showAllProjects ? getFilteredProjects() : getFilteredProjects().slice(0, initialItems);
    const displayedCertificates = showAllCertificates ? CertificatesData : CertificatesData.slice(0, initialItems);
    return (
        <>
            <div className="md:px-[10%] px-[5%] w-full sm:mt-0 bg-baseLight dark:bg-baseDark overflow-hidden" id="Portfolio">
                {/* Header section */}
                <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="title inline-block text-3xl md:text-5xl md:pt-[10%] text-center mx-auto">
                        <span className='text-titleLight dark:text-gray-400'>My </span><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]' style={{ color: '#6366f1', backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                            Professional Journey
                        </span>
                    </h2>
                    <p className="text-gray-700 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
                        Explore my professional journey through impactful projects, 
                        recognized certifications, diverse work experience, and technical 
                        expertise, each marking a milestone in my continuous learning and growth.
                    </p>
                </div>

                <Box sx={{ width: "100%" }}>
                    {/* AppBar and Tabs section */}
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
                        <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" variant="fullWidth"
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
                                        "& .lucide": {
                                            transform: "scale(1.1) rotate(5deg)",
                                        },
                                    },
                                    "&.Mui-selected": {
                                        color: "#fff",
                                        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                                        boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                                        "& .lucide": {
                                            color: "#a78bfa",
                                        },
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
                            <Tab icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />} label="Projects" {...a11yProps(0)} />
                            <Tab icon={<Waypoints className="mb-2 w-5 h-5 transition-all duration-300" />} label="Journey" {...a11yProps(1)} />
                            <Tab icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />} label="Certificates" {...a11yProps(2)} />
                            <Tab icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />} label="Tech Stack" {...a11yProps(3)} />
                        </Tabs>
                    </AppBar>

                    <SwipeableViews axis="x" index={value} onChangeIndex={(index) => setValue(index)}>
                        <TabPanel value={value} index={0}>
                            {/* Sub-tabs for Projects */}
                            <Tabs value={subTabValue} onChange={handleSubTabChange} variant="fullWidth">
                                <Tab label="All Projects" {...a11yProps(0)} className='relative z-10 transition-colors duration-300 bg-gradient-to-r from-white to-white bg-clip-text text-transparent font-semibold' />
                                <Tab label="Python" {...a11yProps(1)} className='relative z-10 transition-colors duration-300 bg-gradient-to-r from-white to-white bg-clip-text text-transparent font-semibold' />
                                <Tab label="JavaScript" {...a11yProps(2)} className='relative z-10 transition-colors duration-300 bg-gradient-to-r from-white to-white bg-clip-text text-transparent font-semibold' />
                                <Tab label="Golang" {...a11yProps(3)} className='relative z-10 transition-colors duration-300 bg-gradient-to-r from-white to-white bg-clip-text text-transparent font-semibold' />
                            </Tabs>
                            
                            {/* Projects Content */}
                            <div className="container mx-auto flex justify-center items-center overflow-hidden mt-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                                    {displayedProjects.map((project, index) => (
                                        <div key={project.id} data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"} data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}>
                                            <CardProject id={project.id} Img={project.Img} Title={project.Title} Description={project.responsibility} Link={project.Link} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {ProjectsData.length > initialItems && (
                                <div className="mt-6 w-full flex justify-start">
                                    <ToggleButton onClick={() => toggleShowMore('projects')} isShowingMore={showAllProjects} />
                                </div>
                            )}
                        </TabPanel>

                        <TabPanel value={value} index={1}>
                            {/* Journey Content */}
                            <Tabs value={subTab} onChange={handleJourneySubTabChange} centered>
                                <Tab className='relative z-10 transition-colors duration-300 bg-gradient-to-r from-white to-white bg-clip-text text-transparent font-semibold'  label="Education" />
                                <Tab className='relative z-10 transition-colors duration-300 bg-gradient-to-r from-white to-white bg-clip-text text-transparent font-semibold'  label="Experience" />
                            </Tabs>
                            <SwipeableViews axis="x" index={subTab} onChangeIndex={(index) => setSubTab(index)}>
                                <TabPanel value={subTab} index={0}>
                                    {/* Education Journey */}
                                    <div className="container mx-auto flex flex-col items-start pl-4" style={{ overflow: 'hidden' }}>
                                        <div className="relative border-l border-gray-500 dark:border-gray-200">
                                            {JourneyData.education.map((event, index) => (
                                                <div key={event.id} className="mb-8 ml-6" data-aos="fade-up" data-aos-duration="1000">
                                                    <div className={`absolute w-4 h-4 rounded-full bg-blue-500 -left-8 border border-gray-500 dark:border-white`}></div>
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="text-lg font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">{event.title}</h3>
                                                        <span className="text-sm md:pl-4 text-gray-300">{event.year}</span>
                                                    </div>
                                                    <p className="text-gray-700 dark:text-gray-400 mt-2">{event.school}</p>
                                                    <p className="text-gray-700 dark:text-gray-400 mt-2">{event.university}</p>
                                                    <p className="text-gray-700 dark:text-gray-400 mt-2">CGPA : {event.cgpa}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel value={subTab} index={1}>
                                    {/* Experience Journey */}
                                    <div className="container mx-auto flex flex-col items-start pl-4" style={{ overflow: 'hidden' }}>
                                        <div className="relative border-l border-gray-500 dark:border-gray-200">
                                            {JourneyData.experience.map((event, index) => (
                                                <div key={event.id} className="mb-8 ml-6" data-aos="fade-up" data-aos-duration="1000">
                                                    <div className={`absolute w-4 h-4 rounded-full bg-blue-500 -left-8 border border-gray-500 dark:border-white`}></div>
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="text-lg font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">{event.role}</h3>
                                                        <span className="text-sm md:pl-4 text-gray-300">{event.year}</span>
                                                    </div>
                                                    <p className="text-gray-700 dark:text-gray-400 mt-2">{event.company}</p>
                                                    <p className="text-gray-700 dark:text-gray-400 mt-2">{event.location}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </TabPanel>
                            </SwipeableViews>
                        </TabPanel>

                        <TabPanel value={value} index={2}>
                            {/* Certificates Content */}
                            <div className="container mx-auto flex justify-center items-center overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                                    {displayedCertificates.map((certificate, index) => (
                                        <div key={index} data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"} data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}>
                                            <Certificate ImgSertif={certificate.Img} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {CertificatesData.length > initialItems && (
                                <div className="mt-6 w-full flex justify-start">
                                    <ToggleButton onClick={() => toggleShowMore('certificates')} isShowingMore={showAllCertificates} />
                                </div>
                            )}
                        </TabPanel>

                        <TabPanel value={value} index={3}> 
                            {/* Tech Stack Content */}
                            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 gap-5">
                                    {TechStacksData.map((stack, index) => (
                                        <div key={index} 
                                            data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"} 
                                            data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"} >
                                            <TechStack 
                                                IconName={stack.icon} 
                                                Heading={stack.heading} 
                                                Languages={stack.language} 
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabPanel>
                    </SwipeableViews>
                </Box>
                <div className="flex justify-center mt-6">
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

function a11yProps(index) {
    return {
        id: `portfolio-tab-${index}`,
        'aria-controls': `portfolio-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div role="tabpanel" hidden={value !== index} id={`portfolio-tabpanel-${index}`} aria-labelledby={`portfolio-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}   

export default Portfolio;
