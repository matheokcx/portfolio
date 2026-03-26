import HeroSection from "./components/Layout/HeroSection/HeroSection.tsx";
import AboutSection from "./components/Layout/AboutSection/AboutSection.tsx";
import SkillsSection from "./components/Layout/SkillsSection/SkillsSection.tsx";
import ProjectsSection from "./components/Layout/ProjectsSection/ProjectsSection.tsx";
import ExperiencesSection from "./components/Layout/ExperiencesSection/ExperiencesSection.tsx";
import Footer from "./components/Layout/Footer/Footer.tsx";

const App = () => {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ExperiencesSection/>
            <ProjectsSection/>
            <Footer/>
        </>
    );
};

export default App;
