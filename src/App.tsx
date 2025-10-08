import './App.css'
import HeroSection from './components/Sections/HeroSection'
import Header from './components/Layout/Header'
import SkillsSection from './components/Sections/SkillsSection'
import Footer from './components/Layout/Footer'
import ProjectsSection from './components/Sections/ProjectsSection'
import StorySection from './components/Sections/StorySection'
import Cursor from './components/Cursor'
import { useState } from 'react'

// ==============================================


const App = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  return (
    <>
      <Header activeSection={activeSection} />
      <HeroSection setActiveSection={setActiveSection} />
      <StorySection setActiveSection={setActiveSection} />
      <SkillsSection setActiveSection={setActiveSection} />
      <ProjectsSection setActiveSection={setActiveSection} />
      <Footer />

      <Cursor />
    </>
  );
};

export default App;
