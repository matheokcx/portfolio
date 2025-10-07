import './styles/App.css'
import HeroSection from './components/sections/HeroSection'
import Header from './components/layout/Header'
import SkillsSection from './components/sections/SkillsSection'
import Footer from './components/layout/Footer'
import ProjectsSection from './components/sections/ProjectsSection'
import StorySection from './components/sections/StorySection'
import Cursor from './components/Cursor'
import { useState } from 'react'

// ==============================================


const App = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  return (
    <div className="w-screen bg-radial-[at_60%_45%] from-blue-800 to-black text-white flex flex-col items-center gap-20">
      <Header activeSection={activeSection} />
      <HeroSection setActiveSection={setActiveSection} />
      <StorySection setActiveSection={setActiveSection} />
      <SkillsSection setActiveSection={setActiveSection} />
      <ProjectsSection setActiveSection={setActiveSection} />
      <Footer />

      <Cursor />
    </div>
  );
};

export default App;
