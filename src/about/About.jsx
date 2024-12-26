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
                        Proficient Software Engineer with a strong foundation
                        in development, programming and problem-solving.
                        Successfully completed a six-month internship in
                        Python Full Stack Development, where I honed my
                        skills in building robust, user-friendly applications.
                        With one year of professional experience, I specialize
                        in delivering innovative software solutions. Passionate
                        about continuous learning and staying updated with
                        the latest technological advancements.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
