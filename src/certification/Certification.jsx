const Certification = () => {
    return (
        <div className="mt-[22%] md:mt-[14%]">
            <h1 data-aos="fade-up" className="title text-titleLight dark:text-titleDark text-[2rem] md:text-[2.4rem] text-center" id="certi">My <span className='text-baseColor'>Certifications</span></h1>
            <div data-aos="fade-up" className="container mx-auto p-4 max-w-full lg:max-w-4xl">
                <a href='https://certifications-ashen.vercel.app/' target='_blank' rel="noopener noreferrer">
                    <div className="content bg-secLight dark:bg-secDark text-contentLight dark:text-contentDark p-4 rounded-lg text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] hover:scale-105 duration-300 transform overflow-hidden">
                        <ul className="list-disc pl-5">
                            <li>Power Programmer Virtual Experience Program from <span className="text-baseColor">Infosys.</span></li>
                            <li><span className="text-baseColor">Python Backend And Django</span> Framework Complete Course.</li>
                            <li><span className="text-baseColor">CSS, Bootstrap, JavaScript,</span> Web Development Course.</li>
                            <li><span className="text-baseColor">React.JS: Front-end</span> The Complete Course for Beginners.</li>
                            <li><span className="text-baseColor">Agile Development</span> Methodology Agile Manifesto SCRUM KANBAN from UDEMY.</li>
                            <li><span className="text-baseColor">Data Science</span> Tools from IBM.</li>
                        </ul>
                    </div>
                </a>
            </div>

            <div className="flex justify-center mt-6">
                <a href="#top"> 
                    <button className="px-6 py-2 rounded-lg bg-baseColor hover:bg-titleLight text-titleDark hover:text-white dark:bg-baseColor dark:hover:bg-titleDark dark:text-titleDark dark:hover:text-black hover:border-transparent transition duration-300 flex items-center">
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
    );
};

export default Certification;