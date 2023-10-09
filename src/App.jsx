import React , { useState,useEffect } from 'react'
import './index.css';
import rb from './assets/rb.webp'
import { useTypewriter } from 'react-simple-typewriter'
import intro from './assets/intro.webp'
import useThemeStore from "./stores/useThemeStore"
import { applyThemePreference } from "./utils/themeUtils"
import about from './assets/about.webp'
import ecommerce from './assets/ecommerce.webp'
import mfj from './assets/mfj.webp'
import teammed from './assets/teammed.webp'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import pic from './assets/pic.webp'
import Loader from './Loader';
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
    
      // Typing

      const [typeEffect] = useTypewriter({
        words : ["Full Stack Dev","Software Engineer","Coder"],
        loop : {},
        typeSpeed : 100,
        delaySpeed : 30
    })

    // Theme

    const toggleTheme = useThemeStore((state) => state.toggleTheme);
    const theme = useThemeStore((state) => state.theme);
    useEffect(() => {
        applyThemePreference(theme);
    }, [theme]);

    // Slideshow

    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        centerMode: true,
        centerPadding: '0',
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 1440, 
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Preload

    const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
            setTimeout(() => {
                setIsLoading(false); 
            }, 1000); 
        }, 
    []);

    // animation

    const [animation, setAnimation] = useState(true);
        useEffect(() => {
            setTimeout(() => {
                setAnimation(false); 
            }, AOS.init({duration:3000})
            );
        }, 
    []);

    // Journey

    const [showEducation, setShowEducation] = useState(true);

    
  return (
    <>
        {/* Cover */}

        <div>
            {isLoading ? ( <Loader />) :(
                <div className="bg-neutral-100 dark:bg-black">
                    <div className="p-8 items-center h-[5rem] flex md:justify-between" id="top">
                        <img className="w-10 md:flex md:w-20" src={rb} alt="..." />  
                        <ul className="hidden navbar font-bold md:text-black md:flex md:items-center md:gap-[2vw] dark:text-white">
                            <li>
                                <a className="p-2 border-b-2 border-transparent hover:text-red-600 hover:border-red-600 dark:hover:text-red-600" href="#journey">About Me</a>
                            </li>
                            <li>
                                <a className="p-2 border-b-2 border-transparent hover:text-red-600 hover:border-red-600 dark:hover:text-red-600" href="#about">Services</a>
                            </li>
                            <li>
                                <a className="p-2 border-b-2 border-transparent hover:text-red-600 hover:border-red-600 dark:hover:text-red-600" href="#services">Projects</a>
                            </li>
                            <li>
                                <a className="p-2 border-b-2 border-transparent hover:text-red-600 hover:border-red-600 dark:hover:text-red-600" href="#project">Skills</a>
                            </li>
                            <li>
                                <a className="p-2 border-b-2 border-transparent hover:text-red-600 hover:border-red-600 dark:hover:text-red-600" href="#skills">Journey</a>
                            </li>
                            <li>
                                <a className="p-2 border-b-2 border-transparent hover:text-red-600 hover:border-red-600 dark:hover:text-red-600" href="#certi">Certifications</a>
                            </li>
                            <li>
                                <a className="p-2 border-b-2 border-transparent hover:text-red-600 hover:border-red-600 dark:hover:text-red-600" href="#social">Contact Me</a>
                            </li>
                        </ul>
                        <button className="ml-[80%] md:ml-0" onClick={toggleTheme}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                            </svg> 
                            {/* <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon-stars" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                                <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                                <path d="M19 11h2m-1 -1v2" />
                            </svg>  */}
                        </button>
                    </div>
                    <div data-aos="fade-up" className="container mx-auto p-4">
                        <div className="bg-white dark:bg-black text-black dark:text-white p-4 rounded-md shadow shadow-red-600">
                            <div className="flex flex-wrap flex-col-reverse items-center md:flex-row">
                                <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-4">
                                    <div className="mb-4">
                                        <div className="head text-[1.5rem] font-bold text-black dark:text-white md:text-[2.4rem]">Hi <span className="text-red-600 text-[1.5rem] md:text-[2.4rem]">I'm</span></div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="head text-[1.5rem] text-black dark:text-white md:text-[2.4rem]">Rajesh Balasubramaniam</div>
                                    </div>
                                    <div className="mb-4 flex flex-row">
                                        <a href="https://drive.google.com/file/d/1Zv5oQ1Gq9BP4sxR94EPUBXs_PRUu8FCn/view?usp=drivesdk" className="relative inline-flex items-center justify-center p-2 px-1 py-1 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-red-600 rounded-full shadow-md group md:px-6 md:py-3">
                                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-600 group-hover:translate-x-0 ease">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="absolute text-[0.75rem] flex items-center justify-center w-full h-full bg-red-600 text-white transition-all duration-300 transform group-hover:translate-x-full ease md:text-[1.2rem]">Download CV</span>
                                            <span id="journey" className="relative invisible">Download CV</span>
                                        </a>                        
                                        <h1 className="head text-[1.5rem] text-black dark:text-white font-black ml-2 md:ml-6 md:text-[2.4rem]">{typeEffect}</h1>
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2">
                                    <img src={intro} loading="lazy" id="start" className="mx-auto w-52 h-52 md:w-[40%] md:h-[40%] rounded-full"/>
                                </div>     
                            </div>
                        </div>
                    </div>

                    {/* About  */}

                    <div data-aos="fade-up" className="relative" id="about">
                        <div className="flex md:flex-row flex-col w-full items-center p-8">
                            <img className="w-[50%] h-[80%] ml-2 mt-0 rounded-md shadow-lg shadow-red-600 md:ml-[15%] md:w-[25%]" src={about} />
                            <div className="flex flex-col">
                                <h1 className="title text-[2rem] text-black ml-4 md:ml-8 dark:text-white">About <span className="text-[2rem] text-red-600">Me</span></h1>
                                <p className="content text-[0.75rem] text-black dark:text-white mr-2 ml-4 md:ml-8 md:mr-10 md:text-[1.5rem] md:text-justify">
                                    Dedicated and highly self-motivated Software engineer
                                    student with strong analytical skills. Experienced and
                                    gained knowledge in programming, developing, designing
                                    and testing codes. Quickly learning and adapting to new
                                    technologies. Efficient and honest in working on a team
                                    and self-esteemed event.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Services */}

                    <h1 data-aos="fade-up" className="title text-black dark:text-white text-[2.4rem] mt-[8%] ml-[30%] md:mt-[3%] md:ml-[43%]" id="services">My <span className='text-[2.4rem] text-red-600'>Service</span></h1>
                    <div data-aos="fade-up" className="container mx-auto p-4">
                        <div className="content grid grid-cols-2 gap-4 text-black dark:text-white">
                            <div className="bg-white dark:bg-black p-4 rounded-lg shadow shadow-red-600">Full Stack Development</div>
                            <div className="bg-white dark:bg-black p-4 rounded-lg shadow shadow-red-600">Python Projects</div>
                            <div className="bg-white dark:bg-black p-4 rounded-lg shadow shadow-red-600">Api Integration</div>
                            <div className="bg-white dark:bg-black p-4 rounded-lg shadow shadow-red-600">Software Development</div>
                            <div className="bg-white dark:bg-black p-4 rounded-lg shadow shadow-red-600">Technical Support</div>
                            <div className="bg-white dark:bg-black p-4 rounded-lg shadow shadow-red-600">Testing & Debugging</div>
                        </div>
                    </div>

                    {/* Project */}

                    <h1 data-aos="fade-up" className="title text-black dark:text-white text-[2.4rem] mt-[8%] ml-[30%] md:mt-[3%] md:ml-[43%]" id="project">My <span className='text-[2.4rem] text-red-600'>Projects</span></h1>
                    <div data-aos="fade-up" className='relative'>
                        <div className="content container mx-auto p-4">
                            <div className="grid grid-cols-1 gap-6 text-white md:grid md:grid-cols-3 md:gap-4">
                                <div class="max-w-sm  bg-white dark:bg-black dark:border-gray-700 border border-black rounded-lg shadow-md shadow-red-600 md:shadow-lg md:shadow-red-600">
                                    <img className="rounded-t-lg" src={mfj} alt="" />
                                    <div className="p-5">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">Jewellery Shopping App</h5>
                                        <span className='font-bold text-black dark:text-white'>Technologies</span><p className="mb-3 font-normal text-black dark:text-white">Django, PostgreSQL, Ajax, Jquery, Git, Github, JavaScript, HTML, CSS, Tailwind CSS.</p>
                                        <a href="https://github.com/rb4807/jewelry-django.git">
                                            <label className="bg-red-600 absolute top-2 left-[89%] p-1 rounded-full cursor-pointer md:top-2 md:left-[30%]">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                                    <path d="M11 13l9 -9" />
                                                    <path d="M15 4h5v5" />
                                                </svg>
                                            </label>
                                        </a>
                                    </div>
                                </div>
                                <div className="max-w-sm bg-white dark:bg-black dark:border-gray-700 border border-black rounded-lg shadow-md shadow-red-600 md:shadow-lg md:shadow-red-600">
                                    <img className="rounded-t-lg" src={teammed} alt="" />
                                    <div className="p-5">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">Doctor's Booking App</h5>
                                        <span className='font-bold text-black dark:text-white'>Technologies</span><p className="mb-3 font-normal text-black dark:text-white">Django, PostgreSQL, Ajax, Jquery, Git, Github, JavaScript, HTML, CSS, Tailwind CSS.</p>
                                        <a href="https://github.com/rb4807/teammed-django.git">
                                            <label  className="bg-red-600 absolute top-[34%] left-[89%] p-1 rounded-full cursor-pointer md:top-2 md:left-[61%]">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                                    <path d="M11 13l9 -9" />
                                                    <path d="M15 4h5v5" />
                                                </svg>
                                            </label>
                                        </a>
                                    </div>
                                </div>
                                <div className="max-w-sm bg-white dark:bg-black dark:border-gray-700 border border-black rounded-lg shadow-md shadow-red-600 md:shadow-lg md:shadow-red-600">
                                    <img className="rounded-t-lg" src={ecommerce} alt="" />
                                    <div className="p-5">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">Ecommerce App</h5>
                                        <span className='font-bold text-black dark:text-white'>Technologies</span><p className="mb-3 font-normal text-black dark:text-white">Django, SQLite, Ajax, Jquery, Git, Github, JavaScript, HTML, CSS, Bootstrap.</p>
                                        <a href="https://github.com/rb4807/e-commerce.git">
                                            <label className="bg-red-600 absolute top-[67%] left-[89%] p-1 rounded-full cursor-pointer md:top-2 md:left-[92.5%]">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                                    <path d="M11 13l9 -9" />
                                                    <path d="M15 4h5v5" />
                                                </svg>
                                            </label>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>

                    {/* Skills  */}

                    <h1 data-aos="fade-up" className="title text-black dark:text-white text-[2.4rem] mt-[8%] ml-[30%] md:mt-[3%] md:ml-[43%]" id="skills">My <span className='text-[2.4rem] text-red-600'>Skills</span></h1>
                    <div data-aos="fade-up" className="content w-full max-w-screen-xl mx-auto">
                        <Slider {...settings} >
                            <div className="p-4">
                                <div className="rounded-lg shadow-md text-black dark:text-white bg-white dark:bg-black p-6 shadow shadow-red-600">
                                    <h1 className="text-2xl font-bold text-center text-red-600">Languages</h1>
                                    <h1 className="mt-2 text-xl text-center">Python</h1>
                                    <h1 className="text-xl text-center">JavaScript</h1>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="rounded-lg shadow-md text-black dark:text-white bg-white dark:bg-black p-6 shadow shadow-red-600">
                                    <h1 className="text-2xl font-bold text-center text-red-600">Full Stack Development</h1>
                                    <h1 className="mt-2 text-xl text-center"><span className="text-xl font-bold text-center">Frontend : </span>React.JS, Angular.JS</h1>
                                    <h1 className="text-xl text-center"><span className="text-xl font-bold text-center">Backend : </span>Django</h1>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="rounded-lg shadow-md text-black dark:text-white bg-white dark:bg-black p-6 shadow shadow-red-600">
                                    <h1 className="text-2xl font-bold text-center text-red-600">Web Technologies</h1>
                                    <h1 className="mt-2 text-xl text-center">HTML5</h1>
                                    <h1 className="text-xl text-center">CSS3</h1>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="rounded-lg shadow-md text-black dark:text-white bg-white dark:bg-black p-6 shadow shadow-red-600">
                                    <h1 className="text-2xl font-bold text-center text-red-600">CSS Framework</h1>
                                    <h1 className="mt-2 text-xl text-center">Tailwind CSS</h1>
                                    <h1 className="text-xl text-center">Bootstrap</h1>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="rounded-lg shadow-md text-black dark:text-white bg-white dark:bg-black p-6 shadow shadow-red-600">
                                    <h1 className="text-2xl font-bold text-center text-red-600">Scripting Languages</h1>
                                    <h1 className="mt-2 text-xl text-center">Ajax</h1>
                                    <h1 className="text-xl text-center">jQuery</h1>
                                </div>
                            </div>
                        </Slider>
                    </div>

                    {/* Journey  */}

                    <h1 data-aos="fade-up" className="title text-black dark:text-white text-[2.4rem] mt-[8%] ml-[30%] md:mt-[3%] md:ml-[43%]">My <span className='text-[2.4rem] text-red-600'>Journey</span></h1>
                    <div data-aos="fade-up" className="relative">
                        <img className="w-[46%] ml-2 mt-[18%] rounded-md shadow-lg shadow-red-600 md:mt-10 md:ml-[17%] md:w-[23%]" src={pic} />
                        <div className="content absolute top-[-22%] left-[56%] md:top-3 md:left-[50%]">
                            <div className="flex flex-row gap-4">
                                <button onClick={() => setShowEducation(true)} className="text-[.85rem] text-black hover:text-red-600 dark:hover:text-red-600 dark:text-white md:text-[2rem]">Education </button>
                                <button onClick={() => setShowEducation(false)} className="text-[.85rem] text-black hover:text-red-600 dark:hover:text-red-600  dark:text-white md:text-[2rem]">| Experience</button>
                            </div>
                            <ol className="mt-8 border-l border-black dark:border-white dark:border-gray-700 text-black dark:text-white">                  
                                {showEducation ? ( 
                                    <ul className=''>
                                        <li className="mb-4 ml-6 md:mb-10">            
                                            <span className="absolute flex items-center justify-center w-8 h-8 bg-red-600 rounded-full -left-4 ring-4 ring-red-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-certificate-2" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M12 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                                    <path d="M10 7h4" />
                                                    <path d="M10 18v4l2 -1l2 1v-4" />
                                                    <path d="M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2" />
                                                </svg>
                                            </span>
                                            <h3 className="font-bold leading-tight text-red-600 text-[0.75rem] md:text-[1.3rem]">10th Grade</h3>
                                            <p className="mt-2 text-[0.75rem] md:text-[1.3rem]">2016-2017, CGPA : 7.2</p>
                                            <p className="mt-2 text-[0.75rem] md:text-[1.3rem]">St.Raphaels School</p>
                                            <p className="mt-2 text-[0.75rem] md:text-[1.3rem]">CBSE</p>
                                        </li>

                                        <li className="mb-4 ml-6 md:mb-10">
                                            <span className="absolute flex items-center justify-center w-8 h-8 bg-red-600 rounded-full -left-4 ring-4 ring-red-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-award" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
                                                    <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
                                                    <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
                                                </svg>
                                            </span>
                                            <h3 className="font-bold leading-tight text-red-600 text-[0.75rem] md:text-[1.3rem]">12th Grade</h3>
                                            <p className="text-[0.75rem] md:text-[1.3rem] mt-2">2017-2019, CGPA : 6.6</p>
                                            <p className="text-[0.75rem] md:text-[1.3rem] mt-2">Karnakiyamman School</p>
                                            <p className="text-[0.75rem] md:text-[1.3rem] mt-2">Kerala State Board</p>
                                        </li>
                                        <li className="mb-10 ml-6">
                                            <span className="absolute flex items-center justify-center w-8 h-8 bg-red-600 rounded-full -left-4 ring-4 ring-red-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-certificate" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                                    <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                                                    <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                                                    <path d="M6 9l12 0" />
                                                    <path d="M6 12l3 0" />
                                                    <path d="M6 15l2 0" />
                                                </svg>
                                            </span>
                                            <h3 className="font-bold leading-tight text-red-600 text-[0.75rem] md:text-[1.3rem]">BE.ECE</h3>
                                            <p className="text-[0.75rem] md:text-[1.3rem] mt-2">2019-2023, CGPA : 7.9</p>
                                            <p className="text-[0.75rem] md:text-[1.3rem] mt-2">NIET</p>
                                            <p className="text-[0.75rem] md:text-[1.3rem] mt-2">Anna University</p>
                                        </li>
                                    </ul>
                                ) : (
                                    <li className="mb-10 ml-6">
                                        <span className="absolute flex items-center justify-center w-8 h-8 bg-red-600 rounded-full -left-4 ring-4 ring-red-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-briefcase" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                                                <path d="M12 12l0 .01" />
                                                <path d="M3 13a20 20 0 0 0 18 0" />
                                            </svg>
                                        </span>
                                        <h3 className="font-bold leading-tight text-red-600 text-[0.75rem] md:text-[1.3rem]">Luminar Technolab</h3>
                                        <p className="text-[0.75rem] md:text-[1.3rem] mt-2">Python Full Stack Developer</p>
                                        <p className="text-[0.75rem] md:text-[1.3rem] mt-2">2023-Present</p>
                                        <p className="text-[0.75rem] md:text-[1.3rem] mt-2">Kochi, Kerala</p>
                                    </li> 
                                )}
                            </ol>
                        </div>
                    </div>

                    {/* Certification */}

                    <h1 data-aos="fade-up" className="title text-black dark:text-white text-[2.4rem] mt-[45%] ml-[16%] md:mt-[15%] md:ml-[43%]" id="certi">My <span className='text-[2.4rem] text-red-600'>Certifications</span></h1>
                    <div data-aos="fade-up" className="container mx-auto p-4">
                        <div className="content bg-white dark:bg-black text-black dark:text-white p-4 rounded-lg text-[.80rem] shadow shadow-red-600 md:text-[1.2rem]">
                            • Power Programmer Virtual Experience Program from <span className="ml-[2.7%] text-red-600 md:ml-[0%]">Infosys.</span> <br/>
                            • <span className="text-red-600">Python Backend And Django</span> Framework Complete Course.<br/>
                            • <span className="text-red-600">CSS, Bootstrap, JavaScript,</span> Web Development Course.<br/>
                            • <span className="text-red-600">React.JS: Front-end</span> The Complete Course for Beginners.<br/>
                            • <span className="text-red-600">Agile Development</span> Methodology Agile Manifesto SCRUM <span className="ml-[2.7%] md:ml-[0%]">KANBAN from UDEMY.</span><br/>
                            • <span className="text-red-600">Data Science</span> Tools from IBM.
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center">
                        <a href ="#top"> 
                            <button className="px-10 py-2 bg-red-600 text-white rounded-lg hover:text-white hover:bg-red-500 hover:border-transparent">Back to top
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block icon icon-tabler icon-tabler-chevrons-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M7 11l5 -5l5 5" />
                                    <path d="M7 17l5 -5l5 5" />
                                </svg>
                            </button>
                        </a>
                    </div>

                    {/* Contact */}

                    <footer className="bg-white dark:bg-black" id="social">
                        <hr className="my-6 border-black sm:mx-auto dark:border-white lg:my-8" />
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <span className="text-sm ml-4 mb-2 text-black dark:text-white sm:text-center">© 2023 Copyright. All Rights Reserved.</span>
                            <div className="flex mt-4 space-x-5 p-2 sm:justify-center sm:mt-0">
                                <a href="https://www.linkedin.com/in/rajesh-mbalu">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin bg-red-600 rounded-full hover:bg-blue-600 rounded-full " width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                        <path d="M8 11l0 5" />
                                        <path d="M8 8l0 .01" />
                                        <path d="M12 16l0 -5" />
                                        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                    </svg>
                                </a>
                                <a href="https://github.com/rb4807">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github bg-red-600 rounded-full hover:bg-blue-600 rounded-full" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                    </svg>
                                </a>
                                <a href="mailto:rajesh.mbalu@gmail.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google bg-red-600 rounded-full hover:bg-blue-600 rounded-full" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
                                    </svg>
                                </a>
                                <a href ="https://instagram.com/https://instagram.com/_._r__b_._">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram bg-red-600 rounded-full hover:bg-blue-600 rounded-full" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                        <path d="M16.5 7.5l0 .01" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </footer>
                </div> 
            )}
        </div>
    </>
  );
}

export default App;
