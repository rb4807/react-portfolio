const Certification = () => {

    return (
        <>
            <h1 data-aos="fade-up" className="title text-titleLight dark:text-titleDark text-[2.4rem] mt-[20%] ml-[16%] md:mt-[15%] md:ml-[43%]" id="certi">My <span className='text-[2.4rem] text-baseColor'>Certifications</span></h1>
            <div data-aos="fade-up" className="container mx-auto p-4">
                <a href='https://certifications-ashen.vercel.app/' target='blank'>
                    <div className="content bg-secLight dark:bg-secDark text-contentLight dark:text-contentDark p-4 rounded-lg text-[.80rem] hover:scale-105 duration-1000 transform md:text-[1.2rem]">
                        • Power Programmer Virtual Experience Program from <span className="ml-[2.7%] text-baseColor md:ml-[0%]">Infosys.</span> <br/>
                        • <span className="text-baseColor">Python Backend And Django</span> Framework Complete Course.<br/>
                        • <span className="text-baseColor">CSS, Bootstrap, JavaScript,</span> Web Development Course.<br/>
                        • <span className="text-baseColor">React.JS: Front-end</span> The Complete Course for Beginners.<br/>
                        • <span className="text-baseColor">Agile Development</span> Methodology Agile Manifesto SCRUM <span className="ml-[2.7%] md:ml-[0%]">KANBAN from UDEMY.</span><br/>
                        • <span className="text-baseColor">Data Science</span> Tools from IBM.
                    </div>
                </a>
            </div>

            <div className="flex flex-wrap justify-center">
                <a href ="#top"> 
                    <button className="px-10 py-2 rounded-lg  bg-baseColor hover:bg-titleLight text-titleDark hover:text-white dark:bg-baseColor dark:hover:bg-titleDark dark:text-titleDark dark:hover:text-black hover:border-transparent">Back to top
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block icon icon-tabler icon-tabler-chevrons-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 11l5 -5l5 5" />
                            <path d="M7 17l5 -5l5 5" />
                        </svg>
                    </button>
                </a>
            </div>
        </>
    );
};

export default Certification;

