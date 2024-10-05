import React , { useState,useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import './index.css';
import {THEME_TYPES } from './constants'
import Loader from './utils/Loader';
import Project from './project/Project';
import Cover from './cover/cover';
import About from './about/About';
import Service from './service/Service';
import Skill from './skill/Skill';
import Journey from './journey/Journey';
import Certification from './certification/Certification';
import Footer from './footer/Footer';

const { THEME_LIGHT, THEME_DARK } = THEME_TYPES;

function App() {

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

    

  return (
    <>
        <div>
            {isLoading ? ( <Loader />) :(
                <div className="bg-baseLight dark:bg-baseDark">
                    {/* Cover */}
                        <Cover/>
                    {/* About  */}
                        <About/>
                    {/* Services */}
                        <Service/>
                    {/* Project */}
                        <Project/>
                    {/* Skills  */}
                        <Skill/>
                    {/* Certification */}
                        <Certification/>
                    {/* Journey  */}
                        <Journey/>
                    {/* Contact */}
                        <Footer/>
                </div> 
            )}
        </div>
    </>
  );
}

export default App;
