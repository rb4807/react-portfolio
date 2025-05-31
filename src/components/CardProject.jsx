import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projectMetadata = {
    'Notespaedia': {
        TechStack: {
            Language: ['Python', 'JavaScript'],
            Frontend: ['HTML', 'jQuery', 'Ajax', 'Bootstrap', 'DashLite'],
            Backend: ['Django', 'REST API', 'Shopify API', 'AWS S3 Bucket','Tkinter'],
            Database: ['MySQL'],
            Cms: ['Shopify'],
            Packages: ['Ghostscript','SimpleJWT','Imagemagick', 'Razorpay', 'boot3', 'Sendgrid'],
            Devops: ['Apache', 'GitHub'],
            Tools: ['Postman','Terminus', 'GitDesktop', 'VScode'],
        },
        ProjectDescription: 'Developed a real-time mobile and desktop application to facilitate the purchase and access of high-volume medical textbooks for healthcare professionals. Spearheaded backend development using Django and REST API, integrating Shopify API for e-commerce and AWS S3 for scalable file storage. Built a desktop client with Tkinter for offline access and large file handling, alongside full-stack development of responsive web and admin panels using HTML, Bootstrap, jQuery, and Ajax. Implemented payment processing with Razorpay, email services via Sendgrid, and backend document handling using Ghostscript and Imagemagick. Secured the platform with SimpleJWT for authentication and managed data with MySQL and Shopify CMS. Employed Apache for deployment and GitHub for version control, ensuring a seamless, secure, and scalable user experience across all platforms. Collaborated closely with designers and stakeholders to continuously improve functionality and user satisfaction.',
        Github: 'https://github.com/rb4807',
        techStackCount: 9,
        packageCount: 20, 
    },
    'Visual Takes': {
        TechStack: {
            Language: ['Python'],
            Backend: ['REST API', 'AWS'],
            Packages: ['Swagger', 'geopy', 'boot3','SimpleJWT'],
            AIML : ['Ollama', 'Pytourch', 'Stable diffusion', 'xformers', 'Hugging Face', 'TensorFlow', 'Lora'],
            Devops: ['Apache','GitHub'],
            Tools: ['Postman','Terminus', 'GitDesktop', 'VScode'],
        },
        ProjectDescription: 'Led the backend development of the MovieTech app, which generates image stripes of movies based on script input, utilizing advanced artificial intelligence (AI) and machine learning (ML) technologies like Ollama and Stable Diffusion to process scripts and generate visually cohesive, contextually relevant image stripes. Designed and implemented the backend architecture to efficiently handle the script-to-image generation process, ensuring quick and accurate outputs. Integrated AI models to enhance the quality of generated visuals while optimizing performance for scalability and reliability. Collaborated with the frontend team to ensure seamless integration of the backend, delivering a smooth and interactive user experience.',
        Github: 'https://github.com/rb4807',
        techStackCount: 7,
        packageCount: 15, 
    },
    'Deltafour': {
        TechStack: {
            Language: ['Python', 'JavaScript'],
            Frontend: ['HTML', 'jQuery', 'Ajax', 'Bootstrap', 'DashForge'],
            Backend: ['Django', 'REST API', 'AWS'],
            Database: ['PostgreSQL', 'DynamoDB'],
            Packages: ['Swagger', 'geopy', 'boot3','SimpleJWT'],
            Devops: ['Apache', 'EC2', 'GitHub'],
            Tools: ['Postman','Terminus', 'GitDesktop', 'VScode'],
        },
        ProjectDescription: 'Developed and scaled Deltafour with a strong focus on user-centric features, system flexibility, and scalable architecture. Key contributions included designing a dynamic role-based onboarding system for tailored user experiences, enabling custom feature creation to meet diverse operational needs, and implementing a comprehensive permit management system to streamline compliance processes. Optimized the backend using Django and REST API, with PostgreSQL and DynamoDB for efficient data management, and transitioned the platform into a SaaS model. Built a responsive frontend using HTML, Bootstrap, DashForge, jQuery, and Ajax, and integrated tools like Swagger, geopy, and SimpleJWT for API documentation, location services, and secure authentication. Deployed on AWS EC2 with Apache and maintained robust DevOps practices via GitHub.',
        Github: 'https://github.com/rb4807',
        techStackCount: 7,
        packageCount: 15, 
    },
    'Beond Audit': {
        TechStack: {
            Language: ['Python', 'JavaScript', 'Golang'],
            Frontend: ['HTML', 'jQuery', 'Ajax', 'Bootstrap', 'DashForge'],
            Backend: ['Django', 'REST API','Tkinter'],
            Database: ['PostgreSQL'],
            Packages: ['Social Auth', 'Razorpay', 'Sendgrid'],
            Devops: ['Apache', 'Redis', 'Rabbitmq', 'GitHub'],
            Tools: ['Postman','Terminus','GitDesktop', 'VScode'],
        },
        ProjectDescription: 'Developed and implemented BeondAudit, a groundbreaking project revolutionizing auditing and compliance management. Designed a scalable, high-performance backend system using Python, Django, Node.js, and Go, ensuring seamless service delivery on Ubuntu Linux. Implemented advanced security measures with iptables and optimized performance using Redis and Memcached. Created a scalable SaaS-based database schema with advanced indexing for efficient data management. Built responsive frontend interfaces using HTML, Bootstrap, DashForge, jQuery, and Ajax to ensure smooth user interaction. Contributed to transforming auditing practices by enhancing efficiency, accuracy, and regulatory compliance through innovative backend solutions.',
        Github: 'https://github.com/rb4807',
        techStackCount: 13,
        packageCount: 27, 
    },
    'Beond Work': {
        TechStack: {
            Language: ['Python', 'JavaScript'],
            Frontend: ['HTML', 'jQuery', 'Ajax', 'Bootstrap', 'DashLite'],
            Backend: ['Django'],
            Database: ['PostgreSQL'],
            Devops: ['Apache', 'GitHub'],
            Tools: ['Terminus', 'GitDesktop', 'VScode'],
        },
        ProjectDescription: 'Developed BeondWork, a web-based task management application designed to streamline and automate task assignments for BeondAudit employees, enhancing internal productivity and collaboration. Engineered a secure and scalable backend using Python and Django, ensuring efficient task workflows and role-based access control. Implemented real-time database updates and performance optimizations using PostgreSQL to support fast, reliable task tracking and reporting. Designed a responsive and intuitive frontend using HTML, Bootstrap, DashLite, jQuery, and Ajax to provide a seamless user experience across devices. Deployed the application using Apache and maintained version control through GitHub.',
        Github: 'https://github.com/rb4807',
        techStackCount: 6,
        packageCount: 13, 
    },
    'School Management App': {
        TechStack: {
            Language: ['Python', 'JavaScript'],
            Frontend: ['React.JS', 'TailwindCSS'],
            Backend: ['Django', 'REST API'],
            Database: ['MySQL'],
            Packages: ['Axios','SimpleJWT', 'Jasmine'],
            Devops: ['Vercel', 'GitHub'],
            Tools: ['Postman', 'GitDesktop', 'VScode'],
        },
        ProjectDescription: 'Led the end-to-end development of a comprehensive school management web application, focusing on delivering a seamless and intuitive experience for administrators, principals, and teachers. Designed a responsive and modern user interface using React.js and TailwindCSS, ensuring accessibility across devices. Built a robust backend with Django and REST API, supporting scalable data management and secure communication between frontend and backend. Implemented role-based access control to tailor functionality based on user roles, enabling streamlined operations for tasks like attendance, scheduling, and performance tracking. Utilized MySQL for structured data storage and optimized queries for performance. Integrated Axios for efficient API requests and SimpleJWT for secure user authentication. Maintained clean development workflows and collaboration through GitHub.',
        Github: 'https://github.com/rb4807/school-management.git',
        techStackCount: 10,
        packageCount: 15, 
    },
    'Jewellery Shopping App': {
        TechStack: {
            Language: ['Python', 'JavaScript'],
            Frontend: ['HTML', 'jQuery', 'Ajax', 'TailwindCSS'],
            Backend: ['Django'],
            Database: ['PostgreSQL'],
            Packages: ['Stripe'],
            Devops: ['GitHub'],
            Tools: ['Postman', 'GitDesktop', 'VScode'],
        },
        Github: 'https://github.com/rb4807/jewelry-django.git',
        ProjectDescription: 'Led the development of a jewelry shopping web app, managing both frontend and backend components to create a seamless user experience. Designed a responsive interface using HTML, jQuery, Ajax, and TailwindCSS, and implemented secure payment processing with Stripe. Developed key features including a shopping cart with invoicing, user authentication, product management, and a search bar for easy navigation. Added appointment scheduling and real-time customer communication to enhance user support. Managed data efficiently with a scalable PostgreSQL database and maintained version control through GitHub. Ensured the application was optimized for performance and scalability to handle growing user traffic smoothly. Collaborated closely with designers and stakeholders to align the product with business goals and customer needs.',
        techStackCount: 7,
        packageCount: 10, 
    },
    'ChatGPT Clone': {
        TechStack: {
            Language: ['JavaScript'],
            Frontend: ['React.JS', 'TailwindCSS'],
            Devops: ['Vercel','GitHub'],
            Tools: ['Postman', 'GitDesktop', 'VScode'],
        },
        Github: 'https://github.com/rb4807/chatgpt_clone.git',
        ProjectDescription: 'Designed and developed a ChatGPT clone website with a dynamic and responsive user interface. Created a seamless user experience with a modern design adaptable to all devices and deployed the project on a scalable hosting platform for efficient performance. Integrated real-time message handling to ensure smooth and interactive conversations. Leveraged React.js state management and TailwindCSS utility classes to build a clean and maintainable codebase. Focused on replicating the core UI/UX elements to provide an authentic chat experience.',
        techStackCount: 4,
        packageCount: 7, 
    },
    'Ecommerce App': {
        TechStack: {
            Language: ['Python', 'JavaScript'],
            Frontend: ['HTML', 'jQuery', 'Ajax', 'TailwindCSS'],
            Backend: ['Django'],
            Database: ['SQLite'],
            Packages: ['Stripe'],
            Devops: ['GitHub'],
            Tools: ['GitDesktop', 'VScode'],
        },
        Github: 'https://github.com/rb4807/e-commerce-django.git',
        ProjectDescription: 'Led the development of an eCommerce web app, overseeing both frontend and backend components. Designed an intuitive and user-friendly interface, integrating key features such as user login, shopping cart, and wishlist for personalized shopping experiences. Implemented a seamless purchase flow with secure payment processing. Ensured smooth functionality across all features, enhancing user engagement and satisfaction. Additionally, optimized the backend for scalability and efficiency, allowing for a robust and reliable platform. Integrated Stripe for secure and streamlined payment transactions. Managed data storage and retrieval effectively using SQLite, balancing simplicity and performance. Focused on creating a responsive design to ensure accessibility across all devices.',
        techStackCount: 4,
        packageCount: 7, 
    },
    'Hospital Appointment App': {
        TechStack: {
            Language: ['Python', 'JavaScript'],
            Frontend: ['HTML', 'jQuery', 'Ajax', 'TailwindCSS'],
            Backend: ['Django'],
            Database: ['SQLite'],
            Devops: ['GitHub'],
            Tools: ['GitDesktop', 'VScode'],
        },
        Github: 'https://github.com/rb4807/teammed-django.git',
        ProjectDescription: 'Led the development of a hospital booking web app, managing both frontend and backend components. Designed a user-friendly interface that allows patients to easily browse through available doctors and book appointments. Integrated features such as doctor profiles, appointment scheduling, and real-time availability updates to enhance user experience. Implemented secure user authentication for privacy, along with a smooth booking flow and appointment management system. Optimized the backend for efficiency, ensuring seamless integration with hospital databases and real-time updates for both patients and doctors.',
        techStackCount: 3,
        packageCount: 3, 
    },
    'Text to Voice Generator with Multiple Voice': {
        TechStack: {
            Language: ['JavaScript'],
            Frontend: ['HTML', 'jQuery', 'Ajax', 'TailwindCSS'],
            Devops: ['GitHub', 'Vercel'],
            Tools: ['GitDesktop', 'VScode'],
        },
        Github: 'https://github.com/rb4807/text_to_voice_generator.git',
        ProjectDescription: 'Led the development of a Text to Voice Generator web tool, creating an interactive and user-friendly single-page application. Designed a sleek and intuitive interface that allows users to input text and choose from multiple voice options for text-to-speech conversion. Integrated advanced voice synthesis technology for high-quality and natural-sounding speech, with features like adjustable speech rate and volume control. Optimized the tool for responsiveness and quick load times.',
        techStackCount: 2,
        packageCount: 1, 
    },
    'Real-time market data multi streaming via WebSocket': {
        TechStack: {
            Language: ['Golang', 'JavaScript'],
            Frontend: ['HTML', 'CSS'],
            Backend: ['Gin'],
            Packages: ['Gorilla Websocket', 'Google uuid'],
            Devops: ['GitHub'],
            Tools: ['GitDesktop', 'VScode'],
        },
        Github: 'https://github.com/rb4807/Web_Socketing_Real_Time',
        ProjectDescription: 'Developed a real-time market data streaming platform using WebSocket technology to deliver live financial data to multiple clients simultaneously. Built with gin-gonic/gin for HTTP handling and gorilla/websocket for low-latency streams. Designed a scalable backend supporting multiple tickers and concurrent sessions, ensuring high performance and data consistency. Focused on seamless real-time delivery with optimized resource and concurrency management.',
        techStackCount: 2,
        packageCount: 2, 
    }
};

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => {
    const handleLiveDemo = (e) => {
        if (!ProjectLink) {
            e.preventDefault();
            alert("Live demo link is not available");
        }
    };

    const handleDetails = (e) => {
        if (!id) {
            e.preventDefault();
            alert("Project details are not available");
            return;
        }
        
        // Get metadata for this project
        const metadata = projectMetadata[Title] || {
            TechStack: {},
            Description: [],
            Features: [],
            Github: 'https://github.com/',
            ProjectDescription: '',
            techStackCount: 0,
            packageCount: 0,
        };

        // Store project data in localStorage before navigation
        const projectData = {
            id,
            Title,
            Description,
            Img,
            Link: ProjectLink,
            ProjectDescription: metadata.ProjectDescription,
            TechStack: metadata.TechStack,
            Features: metadata.Features,
            Github: metadata.Github,
            techStackCount: metadata.techStackCount,
            packageCount: metadata.packageCount,
        };
        
        const projects = JSON.parse(localStorage.getItem('projects') || '[]');
        const existingProjectIndex = projects.findIndex(p => p.id === id);
        
        if (existingProjectIndex >= 0) {
            projects[existingProjectIndex] = projectData;
        } else {
            projects.push(projectData);
        }
        
        localStorage.setItem('projects', JSON.stringify(projects));
    };

    return (
        <div className="group relative w-full">    
            <div className="relative overflow-hidden rounded-xl bg-blue-200/50 dark:bg-gray-900/50 backdrop-blur-lg border border-black/10 dark:border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative p-5 z-10">
                    <div className="relative overflow-hidden rounded-lg">
                        <img src={Img} alt={Title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                    </div>
                
                    <div className="mt-4 space-y-3">
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 dark:bg-gradient-to-r dark:from-blue-200 dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent">{Title}</h3>
                        <p className="text-gray-700/80 dark:text-gray-300/80 text-sm leading-relaxed line-clamp-2">{Description}</p>
                        <div className="pt-4 flex items-center justify-between">
                            {/* {ProjectLink ? (
                                <a
                                    href={ProjectLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleLiveDemo}
                                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                                >
                                    <span className="text-sm font-medium">Live Demo</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            ) : (
                                <span className="text-gray-500 text-sm">Demo Not Available</span>
                            )} */}

                            <Link
                                to={`/project/${id}`}
                                onClick={handleDetails}
                                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-black/10 hover:bg-white/10 text-gray-700 dark:text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                            >
                                <span className="text-sm font-medium">Details</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
                </div>
            </div>
        </div>
    );
};

export default CardProject;