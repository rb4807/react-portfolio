import React , { useState } from 'react'

import journey_dark from '../assets/journey_dark.jpg';
import journey_light from '../assets/journey_light.jpg';

import useThemeStore from "../stores/useThemeStore";

const Journey = () => {
    const [showEducation, setShowEducation] = useState(true);
    const theme = useThemeStore((state) => state.theme);

    return (
        <>
            <h1 data-aos="fade-up" className="title text-titleLight dark:text-titleDark text-[2.4rem] mt-[8%] ml-[30%] md:mt-[3%] md:ml-[43%]">My <span className='text-[2.4rem] text-baseColor'>Journey</span></h1>
            <div data-aos="fade-up" className="relative">
                <img className="w-[46%] ml-2 mt-[18%] rounded-md shadow-md shadow-baseColor md:mt-10 md:ml-[17%] md:w-[23%]" src={theme === 'light' ? journey_light : journey_dark} />
                <div className="content absolute top-[-22%] left-[56%] md:top-3 md:left-[50%]">
                    <div className="flex flex-row gap-3">
                        <button onClick={() => setShowEducation(true)} className="text-[.85rem] text-subLight hover:text-baseColor dark:hover:text-baseColor dark:text-subDark md:text-[2rem]">Education </button>
                        <button onClick={() => setShowEducation(false)} className="text-[.85rem] text-subLight hover:text-baseColor dark:hover:text-baseColor  dark:text-subDark md:text-[2rem]">| Experience</button>
                    </div>
                    <ol className="mt-8 border-l border-titleLight dark:border-titleDark text-contentLight dark:text-contentDark">                  
                        {showEducation ? ( 
                            <ul className=''>
                                <li className="mb-4 ml-6 md:mb-10">            
                                    <span className="absolute flex items-center justify-center w-8 h-8 bg-baseColor rounded-full -left-4 ring-4 ring-baseColor">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-certificate-2" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M12 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                            <path d="M10 7h4" />
                                            <path d="M10 18v4l2 -1l2 1v-4" />
                                            <path d="M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2" />
                                        </svg>
                                    </span>
                                    <h3 className="font-bold leading-tight text-titleLight dark:text-titleDark text-[0.75rem] md:text-[1.3rem]">10th Grade</h3>
                                    <p className="mt-2 text-[0.75rem] md:text-[1.3rem]">2016-2017, CGPA : 7.2</p>
                                    <p className="mt-2 text-[0.75rem] md:text-[1.3rem]">St.Raphaels School</p>
                                    <p className="mt-2 text-[0.75rem] md:text-[1.3rem]">CBSE</p>
                                </li>

                                <li className="mb-4 ml-6 md:mb-10">
                                    <span className="absolute flex items-center justify-center w-8 h-8 bg-baseColor rounded-full -left-4 ring-4 ring-baseColor">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-award" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
                                            <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
                                            <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
                                        </svg>
                                    </span>
                                    <h3 className="font-bold leading-tight text-titleLight dark:text-titleDark text-[0.75rem] md:text-[1.3rem]">12th Grade</h3>
                                    <p className="text-[0.75rem] md:text-[1.3rem] mt-2">2017-2019, CGPA : 6.6</p>
                                    <p className="text-[0.75rem] md:text-[1.3rem] mt-2">Karnakiyamman School</p>
                                    <p className="text-[0.75rem] md:text-[1.3rem] mt-2">Kerala State Board</p>
                                </li>
                                <li className="mb-10 ml-6">
                                    <span className="absolute flex items-center justify-center w-8 h-8 bg-baseColor rounded-full -left-4 ring-4 ring-baseColor">
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
                                    <h3 className="font-bold leading-tight text-titleLight dark:text-titleDark text-[0.75rem] md:text-[1.3rem]">BE.ECE</h3>
                                    <p className="text-[0.75rem] md:text-[1.3rem] mt-2">2019-2023, CGPA : 7.9</p>
                                    <p className="text-[0.75rem] md:text-[1.3rem] mt-2">NIET</p>
                                    <p className="text-[0.75rem] md:text-[1.3rem] mt-2">Anna University</p>
                                </li>
                            </ul>
                        ) : (
                            <ul>
                                <li className="mb-10 ml-6">
                                    <span className="absolute flex items-center justify-center w-8 h-8 bg-baseColor rounded-full -left-4 ring-4 ring-baseColor">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-briefcase" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                                            <path d="M12 12l0 .01" />
                                            <path d="M3 13a20 20 0 0 0 18 0" />
                                        </svg>
                                    </span>
                                    <h3 className="font-bold leading-tight text-titleLight dark:text-titleDark text-[0.75rem] md:text-[1.3rem]">Luminar Technolab</h3>
                                    <p className="text-[0.75rem] md:text-[1.3rem] mt-2">Python Full Stack Developer</p>
                                    <p className="text-[0.75rem] md:text-[1.3rem] mt-2">2023-2024</p>
                                    <p className="text-[0.75rem] md:text-[1.3rem] mt-2">Kochi, Kerala</p>
                                </li> 
                                <li className="mb-10 ml-6">
                                    <span className="absolute flex items-center justify-center w-8 h-8 bg-baseColor rounded-full -left-4 ring-4 ring-baseColor">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-briefcase" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                                            <path d="M12 12l0 .01" />
                                            <path d="M3 13a20 20 0 0 0 18 0" />
                                        </svg>
                                    </span>
                                    <h3 className="font-bold leading-tight text-titleLight dark:text-titleDark text-[0.75rem] md:text-[1.3rem]">Deienami</h3>
                                    <p className="text-[0.75rem] md:text-[1.3rem] mt-2">Software Engineer</p>
                                    <p className="text-[0.75rem] md:text-[1.3rem] mt-2">2024-Present</p>
                                    <p className="text-[0.75rem] md:text-[1.3rem] mt-2">Thrivandrum, Kerala</p>
                                </li> 
                            </ul>
                        )}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default Journey;



