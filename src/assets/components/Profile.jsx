import ImagePicture from "./ImagePicture";
import WebSVGIcon from "./WebSVGIcon";
import LocalSVGIcon from "./LocalSVGIcon";
import { motion } from "motion/react";

export default function Profile(){
    return(
        <section id="#bio" className="bg-[#070707] max-[430px]:p-2 p-8 font-mono text-white w-full " >
            <motion.div initial={{opacity:0, scale:0}} transition={{delay:.2, duration: .3}} animate={{opacity:1, scale:1}} className="lg:flex drop-shadow-[3px_8px_7px_black] transition-drop-shadow duration-500 hover:drop-shadow-[0px_0px_7px_#FFFFFFE3] sm:gap-5 xl:gap-8 bg-[#0B0B0B] p-7">
                <div className="max-lg:items-center flex flex-col gap-5">
                    <ImagePicture width={3} height={3} source={"./FotoPerfil2_HDR.png"}/>
                    <div className="pb-5 justify-center flex gap-5">
                        <WebSVGIcon href={"https://www.linkedin.com/in/leonardo-alves-moreno-045488216"} size={30}/>
                        <LocalSVGIcon href={"https://github.com/1LeoAlves"} fileName={"github-icon.svg"}/>
                        <LocalSVGIcon href={""} fileName={"instagram.svg"}/>
                        <LocalSVGIcon href={""} fileName={"twitter.svg"}/>
                    </div>
                </div>
                <div className="flex gap-6 flex-col text-[1.35rem] text-justify">
                    <h1 className="bg-gradient-to-r from-[rgb(64,7,64)] via-[rgb(35,11,58)] to-[rgb(68,9,82)] font-bold min-md:text-3xl  xl:text-4xl p-3 rounded-[.25rem]">- Sobre Mim -</h1>
                    <p className="max-[430px]:text-sm min-md:text-sm  xl:text-[1.25rem]">
                        Atualmente, estou finalizando meu Trabalho de Conclusão de Curso (TCC) em Tecnologia em Jogos Digitais no Instituto Federal de Educação, Ciência e Tecnologia da Bahia (IFBA) e cursando Ciência da Computação na Universidade Ruy Barbosa Wyden (UniRuy), em Salvador. Tenho uma paixão profunda por programação e design de jogos, com experiência prática em C# e Unity.
                        Participei do desenvolvimento de um jogo digital que preserva elementos histórico-culturais da Bahia, publicado na SBGames, o maior evento de jogos e entretenimento digital da América Latina.
                        Atualmente, trabalho como Atendente Comercial, adquirindo experiência no atendimento ao cliente e na gestão de demandas comerciais.
                        Minhas habilidades técnicas incluem HTML5 e CSS, adquiridas por meio de trabalhos freelancers e cursos online. Além disso, trabalhei como Chefe de Sala no Cebraspe, sendo responsável pelo manuseio e organização de provas de exame, e como Auxiliar Administrativo no IFBA, apoiando o Sistema Universidade Aberta da Bahia (UAB) e a Fundação Escola Politécnica da Bahia (FEP).
                        Tenho sólidos conhecimentos em design gráfico, modelagem 3D, animação e iluminação, utilizando ferramentas como Inkscape, Krita, Aseprite e DragonBones. Durante minha trajetória acadêmica no IFBA, participei do desenvolvimento de diversos projetos em equipe, adquirindo experiência em gestão de projetos e metodologias ágeis como Scrum e Kanban.
                        Atualmente, estou focado na conclusão da minha graduação em Ciência da Computação e no desenvolvimento da minha carreira na indústria de tecnologia, contribuindo para a inovação e a diversidade no setor. 🚀
                    </p>
                </div>
            </motion.div>
        </section>
    )
}