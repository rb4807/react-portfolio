import React, { useState } from "react";

import school from '../assets/school.png'
import mfj from '../assets/mfj.webp'
import notespedia from '../assets/notespedia.jpg'
import chatgpt from '../assets/chatgpt.png'
import ecommerce from '../assets/ecommerce.webp'
import teammed from '../assets/teammed.webp'
import beond_audit from '../assets/beond_audit.jpg'
import deltafour from '../assets/deltafour.jpg'
import beond_work from '../assets/beond_work.jpg'

const Project = () => {
    const [showCard, setShowCard] = useState("all");
    const handleProject = (category) => {
        setShowCard(category);
    };

    return (
        <>
            <section data-aos="fade-up" className="pt-20 pb-12 lg:pt-[80px] lg:pb-[60px] dark:bg-dark">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                                <h2 data-aos="fade-up" className="title text-titleLight dark:text-titleDark mb-3 text-3xl leading-[1.208] sm:text-4xl md:text-[40px]" id="project">My <span className='text-baseColor'>Projects</span></h2>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap justify-center -mx-4">
                        <div className="w-full px-4">
                            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                                <li className="mb-1">
                                    <button 
                                        onClick={() => handleProject("all")} className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                                            showCard === "all"
                                                ? "activeClasses bg-primary text-baseColor dark:text-baseColor"
                                                : "inactiveClasses text-body-color text-subLight hover:text-baseColor dark:text-subDark dark:hover:text-baseColor"
                                        }`}
                                    >
                                        All Projects
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("python")}
                                            className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                                            showCard === "python"
                                                ? "activeClasses bg-primary text-baseColor dark:text-baseColor"
                                                : "inactiveClasses text-body-color text-subLight hover:text-baseColor dark:text-subDark dark:hover:text-baseColor"
                                        }`}
                                    >
                                        Python
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("golang")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                                        showCard === "golang"
                                            ? "activeClasses bg-primary text-baseColor dark:text-baseColor"
                                            : "inactiveClasses text-body-color text-subLight hover:text-baseColor dark:text-subDark dark:hover:text-baseColor"
                                        }`}
                                        
                                    >
                                        Golang
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("javascript")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                                        showCard === "javascript"
                                            ? "activeClasses bg-primary text-baseColor dark:text-baseColor"
                                            : "inactiveClasses text-body-color text-subLight hover:text-baseColor dark:text-subDark dark:hover:text-baseColor"
                                        }`}
                                        
                                    >
                                        JavaScript
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <ProjectCard 
                            ImageHref={notespedia}
                            category="Python"
                            title="NOTESPAEDIA"
                            techStack="Django, REST API, MySQL, JavaScript, jQuery, Ajax, Bootstrap, Shopify API, AWS S3 Bucket, Razorpay, Ghostscript, Imagemagick, Tkinter, Apache, GitHub."
                            responsibility="Backend development & Full Stack Development"
                            showCard={showCard}
                        />
                        <ProjectCard 
                            ImageHref={deltafour}
                            category="Python"
                            title="DELTAFOUR"
                            techStack="Django, REST API, PostgreSQL, DynamoDB, JavaScript, jQuery, Ajax, Bootstrap, AWS S3 Bucket, AWS EC2, Apache, GitHub."
                            responsibility="Backend development & Full Stack Development"
                            showCard={showCard}
                        />
                        <ProjectCard 
                            ImageHref={beond_audit}
                            category="Python,Golang"
                            title="BEONDAUDIT"
                            techStack="Django, Golang, REST API, PostgreSQL, JavaScript, jQuery, Ajax, Bootstrap, Tkinter, Razorpay, Apache, GitHub."
                            responsibility="Backend development & Full Stack Development"
                            showCard={showCard}
                        />
                        <ProjectCard 
                            ImageHref={beond_work}
                            category="Python"
                            title="BEONDWORK"
                            techStack="Django, MySQL, JavaScript, jQuery, Ajax, Bootstrap, Apache, GitHub."
                            responsibility="Backend development & Full Stack Development"
                            showCard={showCard}
                        />
                        <ProjectCard 
                            ImageHref={mfj}
                            category="Python"
                            title="JEWELLERY SHOPPING APP"
                            techStack="HTML5, TailwindCSS, AJAX, jQuery, JavaScript, Django, Stripe, PostgreSQL, GitHub."
                            responsibility="End to end development"
                            showCard={showCard}
                            button="View Details"
                            buttonHref="https://mfj-rb4807.vercel.app/"
                        />
                        <ProjectCard 
                            ImageHref={school}
                            category="Python,JavaScript"
                            title="SCHOOL MANAGEMENT APP"
                            techStack="HTML5, TailwindCSS, AJAX, jQuery, JavaScript, Django, Stripe, PostgreSQL, GitHub."
                            responsibility="End to end development"
                            showCard={showCard}
                            button="View Details"
                            buttonHref="https://school-psi-ten.vercel.app/"
                        />
                        <ProjectCard 
                            ImageHref={chatgpt}
                            category="JavaScript"
                            title="CHATGPT CLONE"
                            techStack="HTML5, TailwindCSS, AJAX, jQuery, JavaScript, Django, Stripe, PostgreSQL, GitHub."
                            responsibility="End to end development"
                            showCard={showCard}
                            button="View Details"
                            buttonHref="https://chatgpt-clone-7jxv.vercel.app/"
                        />
                        <ProjectCard 
                            ImageHref={ecommerce}
                            category="Python"
                            title="ECOMMERCE WEB APP"
                            techStack="HTML5, TailwindCSS, AJAX, jQuery, JavaScript, Django, Stripe, PostgreSQL, GitHub."
                            responsibility="End to end development"
                            showCard={showCard}
                            button="View Details"
                            buttonHref="https://mfj-rb4807.vercel.app/"
                        />
                        <ProjectCard 
                            ImageHref={teammed}
                            category="Python"
                            title="HOSPITAL APPOINTMENT WEB APP"
                            techStack="HTML5, TailwindCSS, AJAX, jQuery, JavaScript, Django, PostgreSQL, GitHub."
                            responsibility="End to end development"
                            showCard={showCard}
                            button="View Details"
                            buttonHref="https://mfj-rb4807.vercel.app/"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Project;

const ProjectCard = ({
    showCard,
    category,
    ImageHref,
    title,
    button,
    buttonHref,
    techStack,
    responsibility,
}) => 
{
    const categories = category.toLowerCase().split(',');
    return (
        <>
            <div
                className={`w-full px-4 sm:w-1/2 lg:w-1/3 mb-8 sm:mb-12 lg:mb-16
                    ${
                    showCard === "all" || categories.includes(showCard)
                        ? "block"
                        : "hidden"
                    }`
                }
            >
                <div className="relative mb-8 sm:mb-12 h-full flex flex-col">
                    <div className="overflow-hidden rounded-[10px]">
                        <img src={ImageHref} alt="project" className="w-full" />
                    </div>
                    <div className="relative z-10 mx-3 sm:mx-7 -mt-10 sm:-mt-20 rounded-lg bg-secLight dark:bg-secDark py-6 sm:py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark flex flex-col flex-grow">
                        <span className="text-titleLight dark:text-titleDark mb-2 block text-xs sm:text-sm font-medium">
                            {category}
                        </span>
                        <h3 className="content text-baseDark dark:text-baseLight mb-3 sm:mb-5 text-lg sm:text-xl font-bold">
                            {title}
                        </h3>
                        <div className="content mb-3 font-normal text-start text-contentLight dark:text-contentDark flex-grow">
                            {responsibility && (
                                <p><span className='text-baseColor'>Responsibility :- </span> {responsibility}</p>
                            )}
                            {techStack && (
                                <p><span className='text-baseColor'>Tech Stack :- </span> {techStack}</p>
                            )}
                        </div>
                        {button && buttonHref && (
                            <a href={buttonHref}
                                target='blank' className="text-body-color inline-block rounded-md bg-baseColor hover:bg-titleLight text-titleDark hover:text-white dark:bg-baseColor dark:hover:bg-titleDark dark:text-titleDark dark:hover:text-black py-2 sm:py-[10px] px-4 sm:px-7 text-xs sm:text-sm font-medium transition mt-auto"
                            >
                                {button}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
