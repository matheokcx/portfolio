import {lazy, Suspense} from "react";
import HeroSection from "./components/Layout/HeroSection/HeroSection.tsx";
import AboutSection from "./components/Layout/AboutSection/AboutSection.tsx";
import SkillsSection from "./components/Layout/SkillsSection/SkillsSection.tsx";
import ProjectsSection from "./components/Layout/ProjectsSection/ProjectsSection.tsx";
import ExperiencesSection from "./components/Layout/ExperiencesSection/ExperiencesSection.tsx";

const HeroBackground = lazy(() => import("./components/Layout/AnimatedBackground/AnimatedBackground.tsx"))

const App = () => {
    return (
        <>
            <Suspense fallback={null}>
                <HeroBackground/>
            </Suspense>

            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ExperiencesSection/>
        </>
    );
};

export default App;
