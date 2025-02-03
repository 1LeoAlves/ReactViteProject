import { motion } from "motion/react";

export default function LadingSection(){
    return (
        <section id="#bio" className="grid-cols-2 grid-rows-1 p-8 pb-0 pt-5 font-mono text-white w-full " >
            <motion.div initial={{opacity:0, scale:0}} transition={{delay:.2, duration: .3}} animate={{opacity:1, scale:1}} className="flex drop-shadow-[3px_8px_7px_black] transition-drop-shadow duration-500 hover:drop-shadow-[0px_0px_7px_#FFFFFFE3] gap-8 bg-[#0B0B0B] p-7">
                <div>
                    <h1 className="text-3xl font-bold">Bem Vindo ao meu portfólio!</h1>
                    <p>Aqui você vai encontrar um resumo meu, minhas competências e meus projetos!</p>
                </div>
            </motion.div>
        </section>
    );
}