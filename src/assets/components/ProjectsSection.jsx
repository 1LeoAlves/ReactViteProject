import ProjectCard from "./ProjectCard.jsx";

export default function ProjectsSection() {
    return (
        <section className="w-full p-6 sm:p-10 font-mono text-white">
            <div className="lg:flex flex-col drop-shadow-lg transition-shadow duration-500 hover:drop-shadow-[0px_0px_10px_#ffffffcc] bg-[#0B0B0B] p-7 rounded-lg">
                <h1 className="text-center bg-gradient-to-r from-purple-800 via-purple-900 to-purple-950 font-bold text-2xl sm:text-3xl p-4 rounded-md shadow-md">
                    - Meus Projetos -
                </h1>
                <div className="w-full mt-6">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                        <ProjectCard title="Projeto 1" desc="Descrição breve." imgsrc="/img1.jpg" href="#" delay={0.1} />
                        <ProjectCard title="Projeto 2" desc="Descrição breve." imgsrc="/img2.jpg" href="#" delay={0.2} />
                        <ProjectCard title="Projeto 3" desc="Descrição breve." imgsrc="/img3.jpg" href="#" delay={0.3} />
                        <ProjectCard title="Projeto 4" desc="Descrição breve." imgsrc="/img4.jpg" href="#" delay={0.4} />
                    </ul>
                </div>
            </div>
        </section>
    );
}
