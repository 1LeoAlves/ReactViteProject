import ProjectCard from "./ProjectCard.jsx"

export default function ProjectsSection(){
    return(
        <section className="max-[430px]:p-2 w-full p-8 font-mono text-white">
            <div className="lg:flex flex-col drop-shadow-[3px_8px_7px_black] transition-drop-shadow duration-500 hover:drop-shadow-[0px_0px_7px_#FFFFFFE3] xl:gap-8 bg-[#0B0B0B] p-7">
                <h1 className="w-full flex justify-center align-middle bg-gradient-to-r from-[rgb(64,7,64)] via-[rgb(35,11,58)] to-[rgb(68,9,82)] font-bold min-md:text-3xl  xl:text-3xl p-3 rounded-[.25rem]">- Meus Projetos -</h1>
                <div className="w-full">
                    <ul className="w-full grid grid-cols-3 align-middle max-[430px]:gap-[.5rem] max-[769px]:grid-cols-3 pt-5 gap-5">
                        <ProjectCard title={"title"} desc={""} imgsrc={""} href={""}/>
                        <ProjectCard title={"title"} desc={""} imgsrc={""} href={""}/>
                        <ProjectCard title={"title"} desc={""} imgsrc={""} href={""}/>
                        <ProjectCard title={"title"} desc={""} imgsrc={""} href={""}/>
                    </ul>
                </div>
            </div>
        </section>
    )
}