import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import LadingSection from "../components/LadingSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";

export default function Home(){
    return(
        <>
            <NavMenu/>
            <LadingSection/>
            <Profile/>
            <SkillsSection/>
            <ExperienceSection/>
            <ProjectsSection/>
            <Footer/>
        </>
    )
}