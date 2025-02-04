import SkillCard from "../components/SkillCard"

export default function SkillsSection(){
    return(
        <section className="max-[430px]:p-2 w-full p-8 font-mono text-white">
            <div className="lg:flex drop-shadow-[3px_8px_7px_black] transition-drop-shadow duration-500 hover:drop-shadow-[0px_0px_7px_#FFFFFFE3] xl:gap-8 bg-[#0B0B0B] p-7">
                <div className="w-full">
                    <h1 className="flex justify-center align-middle bg-gradient-to-r from-[rgb(64,7,64)] via-[rgb(35,11,58)] to-[rgb(68,9,82)] font-bold min-md:text-3xl  xl:text-3xl p-3 rounded-[.25rem]">- Minhas Habilidades -</h1>
                    <ul className="align-middle max-[430px]:gap-[.5rem] max-[769px]:grid-cols-3 pt-5 gap-5 grid grid-cols-7">
                        <SkillCard title={"HTML"} src={"./html-icon.png"} delay={0.15}></SkillCard>
                        <SkillCard title={"CSS3"} src={"./css-icon.webp"} delay={0.25}></SkillCard>
                        <SkillCard title={"JS"} src={"./js-icon.png"} delay={0.35}></SkillCard>
                        <SkillCard title={"PHP"} src={"./php-icon.png"} delay={0.45}></SkillCard>
                        <SkillCard title={"React"} src={"./react-icon.png"} delay={0.55}></SkillCard>
                        <SkillCard title={"C#"} src={"./csharp-icon.png"} delay={0.65}></SkillCard>
                        <SkillCard title={"Python"} src={"./python-icon.webp"} delay={0.75}></SkillCard>
                        <SkillCard title={"MySQL"} src={"./mysql-icon.png"} delay={0.15}></SkillCard>
                        <SkillCard title={"Unity"} src={"./unity-icon.png"} delay={0.25}></SkillCard>
                        <SkillCard title={"Blender"} src={"./blender-icon.png"} delay={0.35}></SkillCard>
                        <SkillCard title={"Inkscape"} src={"./inkscape-icon.png"} delay={0.45}></SkillCard>
                        <SkillCard title={"PowerBI"} src={"./pbi-icon.png"} delay={0.55}></SkillCard>
                        <SkillCard title={"Google"} src={"./goffice-icon.png"} delay={0.65}></SkillCard>
                    </ul>
                </div>
            </div>
        </section>
    );
}