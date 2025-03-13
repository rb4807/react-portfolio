import React , { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import WelcomeScreen from './components/WelcomeScreen';
import ProjectDetails from './components/ProjectDetail';
import AnimatedBackground from './utils/Background';
import Portfolio from './portfolio/Portfolio';
import TechInsightsGuides from './techInsightsGuides/techInsightsGuides';
import Cover from './cover/cover';
import StatsSection from './stat/StatsSection';
import About from './about/About';
import Service from './service/Service';
import { AnimatePresence } from 'framer-motion';

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
                    <div className="bg-baseLight dark:bg-baseDark">
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
                        <TechInsightsGuides />
                        <footer>
                            <center>
                            <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
                            <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                                © 2025{" "}
                                
                                All Rights Reserved.
                            </span>
                            </center>
                        </footer>
                    </div>
                )}
            </div>
        </>
    );
};

const ProjectPageLayout = () => (
    <>
      <ProjectDetails />
      <footer>
        <center>
          <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
          <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
            © 2025{" "}
              
            All Rights Reserved.
          </span>
        </center>
      </footer>
    </>
  );

function App() {
    const [showWelcome, setShowWelcome] = useState(true);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
                <Route path="/project/:id" element={<ProjectPageLayout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;