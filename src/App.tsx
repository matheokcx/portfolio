import './styles/App.css'
import HeroSection from './components/sections/HeroSection'
import Header from './components/layout/Header'
import SkillsSection from './components/sections/SkillsSection'
import Footer from './components/layout/Footer'
import ProjectsSection from './components/sections/ProjectsSection'
import StorySection from './components/sections/StorySection'
import ProcessSection from './components/sections/ProcessSection'

// ==============================================


export default function App() {
  return (
    <div className="w-screen bg-radial-[at_50%_75%] from-indigo-800 to-black text-white flex flex-col items-center gap-20">
        <Header />
        <HeroSection />
        <StorySection/>
        <SkillsSection />
        <ProcessSection/>
        <ProjectsSection />
        <Footer /> 
    </div>
  );
}
