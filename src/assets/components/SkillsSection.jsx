import SkillCard from "../components/SkillCard"

export default function SkillsSection(){
    return(
        <section className="w-full p-8 font-mono text-white">
            <div className="lg:flex drop-shadow-[3px_8px_7px_black] transition-drop-shadow duration-500 hover:drop-shadow-[0px_0px_7px_#FFFFFFE3] xl:gap-8 bg-[#0B0B0B] p-7">
                <div className="w-full">
                    <h1 className="flex justify-center align-middle bg-gradient-to-r from-[rgb(64,7,64)] via-[rgb(35,11,58)] to-[rgb(68,9,82)] font-bold min-md:text-3xl  xl:text-5xl p-3 rounded-[.25rem]">Linguagens e Ferramentas</h1>
                    <ul className="pt-5 gap-5 grid grid-rows-4 grid-cols-4">
                        <SkillCard title={"HTML/CSS"} src={"./vite.svg"}></SkillCard>
                        <SkillCard title={""} src={"./vite.svg"}></SkillCard>
                        <SkillCard title={""} src={"./vite.svg"}></SkillCard>
                        <SkillCard title={""} src={"./vite.svg"}></SkillCard>
                        <SkillCard title={""} src={"./vite.svg"}></SkillCard>
                        <SkillCard title={""} src={"./vite.svg"}></SkillCard>
                        <SkillCard title={""} src={"./vite.svg"}></SkillCard>
                        <SkillCard title={""} src={"./vite.svg"}></SkillCard>
                    </ul>
                </div>
            </div>
        </section>
    );
}