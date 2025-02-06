import { motion } from "motion/react"
import GlowButton from './NavButton';
import FileButton from "./DownloadFileButton";

function NavMenu(){
    return(
        <section className="w-full h-20 bg-gradient-to-r from-[rgb(64,7,64)] via-[rgb(35,11,58)] to-[rgb(68,9,82)] flex justify-between shadow-[0px_10px_8px_rgba(0,0,0,.35)] font-mono text-white">
            <motion.div className="flex" initial={{ x: -500, opacity: 0.05}} animate={{ ease: "easeInOut", x: 0.1, opacity: 1, transition: {duration:.5}}}>
                <img className="h-[100%] p-4 drop-shadow-[0px_0px_5px_white] transition-transform-drop-shadow duration-300 hover:drop-shadow-[0px_0px_8px_white] hover:scale-102" src="https://th.bing.com/th/id/R.f30aa8d16f1552a0b5f5921f3c792c0a?rik=4rt6b%2fbL5oP%2fYg&pid=ImgRaw&r=0" alt="Triangle purple" />
                <h1 className=" flex justify-center items-center text-left text-nowrap text-5xl max-[430px]:text-[1.9rem] transition-transform-drop-shadow duration-300 drop-shadow-[0px_0px_3px_white] hover:drop-shadow-[0px_0px_8px_white] hover:scale-102 tracking-tight">Leo Alves</h1>
            </motion.div>
            <motion.nav className="max-[1200px]:hidden flex font-bold text-2xl pr-15 gap-15">
                <GlowButton targetId={"#bio"} text={"Inicio"} delay={.1}/>
                <GlowButton targetId={"ID-Aqui"} text={"Sobre mim"} delay={.2}/>
                <GlowButton targetId={"ID-Aqui"} text={"Competências"} delay={.3}/>
                <FileButton filePath={"./files/Curriculo_Leonardo_Alves.pdf"} text={"Baixar Currículo"} delay={.4}/>
            </motion.nav>
        </section>
    )
}

export default NavMenu;