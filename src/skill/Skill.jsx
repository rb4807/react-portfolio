import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const Skill = () => {

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
                    arrows: false,
                },
            },
        ],
    };

    return (
        <>
            <h1 data-aos="fade-up" className="title text-titleLight dark:text-titleDark text-[2.4rem] mt-[8%] ml-[30%] md:mt-0  md:ml-[43%]" id="skills">My <span className='text-[2.4rem] text-baseColor'>Skills</span></h1>
            <div data-aos="fade-up" className="content w-full max-w-screen-xl mx-auto">
                <Slider {...settings} >
                    <div className="p-4">
                        <div className="rounded-lg text-contentLight dark:text-contentDark bg-secLight dark:bg-secDark p-6">
                            <h1 className="text-2xl font-bold text-center text-baseColor">Languages</h1>
                            <h1 className="mt-2 text-xl text-center">Python</h1>
                            <h1 className="text-xl text-center">JavaScript</h1>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="rounded-lg text-contentLight dark:text-contentDark bg-secLight dark:bg-secDark p-6">
                            <h1 className="text-2xl font-bold text-center text-baseColor">Full Stack</h1>
                            <h1 className="mt-2 text-xl text-center">React.JS, Angular.JS</h1>
                            <h1 className="text-xl text-center">Django</h1>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="rounded-lg text-contentLight dark:text-contentDark bg-secLight dark:bg-secDark p-6">
                            <h1 className="text-2xl font-bold text-center text-baseColor">E Commerce</h1>
                            <h1 className="mt-2 text-xl text-center">Shopify</h1>
                            <h1 className="text-xl text-center">WordPress</h1>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="rounded-lg text-contentLight dark:text-contentDark bg-secLight dark:bg-secDark p-6">
                            <h1 className="text-2xl font-bold text-center text-baseColor">Web Technologies</h1>
                            <h1 className="mt-2 text-xl text-center">HTML5</h1>
                            <h1 className="text-xl text-center">CSS3</h1>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="rounded-lg text-contentLight dark:text-contentDark bg-secLight dark:bg-secDark p-6">
                            <h1 className="text-2xl font-bold text-center text-baseColor">CSS Framework</h1>
                            <h1 className="mt-2 text-xl text-center">Tailwind CSS</h1>
                            <h1 className="text-xl text-center">Bootstrap</h1>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="rounded-lg text-contentLight dark:text-contentDark bg-secLight dark:bg-secDark p-6">
                            <h1 className="text-2xl font-bold text-center text-baseColor">Scripting Languages</h1>
                            <h1 className="mt-2 text-xl text-center">Ajax</h1>
                            <h1 className="text-xl text-center">jQuery</h1>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Skill;
