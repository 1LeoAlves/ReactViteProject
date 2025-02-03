import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import LadingSection from "../components/LadingSection";
import SkillsSection from "../components/SkillsSection";

export default function Home(){
    return(
        <>
            <NavMenu/>
            <LadingSection/>
            <Profile/>
            <SkillsSection/>
            <Footer/>
        </>
    )
}