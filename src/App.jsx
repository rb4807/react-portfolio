import React , { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from 'aos'
import 'aos/dist/aos.css'

import './index.css';
import {THEME_TYPES } from './constants'
import Loader from './utils/Loader';
import WelcomeScreen from './components/WelcomeScreen';
import AnimatedBackground from './utils/Background';
import Portfolio from './portfolio/Portfolio';
import Cover from './cover/cover';
import StatsSection from './stat/StatsSection';
import About from './about/About';
import Service from './service/Service';
import Footer from './footer/Footer';
import { AnimatePresence } from 'framer-motion';
const { THEME_LIGHT, THEME_DARK } = THEME_TYPES;

const LandingPage = ({ showWelcome, setShowWelcome }) => {
    return (
        <>
            <div>
                <AnimatePresence mode="wait">
                    {showWelcome && (
                        <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
                    )}
                </AnimatePresence>

                {!showWelcome && (
                    <div className="bg-baseDark">
                        {/* Cover */}
                        <AnimatedBackground />

                        <Cover />
                        {/* About */}                        
                        <About />
                        <StatsSection />
                        {/* Services */}
                        <Service />
                        {/* Portfolio */}
                        <Portfolio />
                        {/* Footer */}
                        <Footer />
                    </div>
                )}
            </div>
        </>
    );
};

function App() {
    const [showWelcome, setShowWelcome] = useState(true);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;