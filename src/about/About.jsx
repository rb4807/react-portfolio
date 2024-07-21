import about_dark from '../assets/about_dark.webp';
import about_light from '../assets/about_light.jpg';

import useThemeStore from "../stores/useThemeStore";

const About = () => {
    const theme = useThemeStore((state) => state.theme);

    return (
        <div data-aos="fade-up" className="relative" id="about">
            <div className="flex md:flex-row flex-col w-full items-center p-8">
                <img className="w-[50%] h-[80%] ml-2 mt-0 rounded-md shadow-md shadow-baseColor md:ml-[10%] md:w-[25%]" src={theme === 'light' ? about_light : about_dark} />
                <div className="flex flex-col">
                    <h1 className="title text-[2rem] text-titleLight mt-4 ml-4 md:ml-8 dark:text-titleDark">About <span className="text-[2rem] text-baseColor">Me</span></h1>
                    <p className="content text-[0.75rem] text-contentLight dark:text-contentDark mr-2 ml-4 md:ml-8 md:mr-10 md:text-[1.5rem] md:text-justify">
                        Motivated Anna University engineering graduate with
                        a robust skill set encompassing development,
                        programming, and problem-solving. Refined my
                        abilities during a six-month web tech internship,
                        focusing on crafting user-friendly applications.
                        Presently excelling as a full-stack engineer, where I
                        apply my internship experience to drive innovation in
                        software solutions. Passionate about continuously
                        evolving and staying updated on the latest trends in
                        technology.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;