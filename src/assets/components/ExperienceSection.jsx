import {motion} from "motion/react";

export default function ExperienceSection(){
    const experiences = [
        {
            title: "Desenvolvedor Full Stack",
            company: "Empresa X",
            period: "2022 - Presente",
            description: "Atuando no desenvolvimento de aplicações web com React, Tailwind, ASP.NET Core e bancos de dados relacionais."
        },
        {
            title: "Desenvolvedor Front-End",
            company: "Startup Y",
            period: "2020 - 2022",
            description: "Criação de interfaces modernas e responsivas utilizando React.js e integração com APIs RESTful."
        },
        {
            title: "Estagiário em TI",
            company: "Empresa Z",
            period: "2019 - 2020",
            description: "Auxílio no suporte técnico e desenvolvimento de pequenas funcionalidades para sistemas internos."
        }
    ];

    return(
        <section className="bg-[#070707] text-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: -50 }} 
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} 
                    className="text-4xl font-bold text-center mb-10"
                >
                    Minhas Experiências
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} 
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.2 } }} 
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-[#191919] p-6 rounded-lg shadow-lg border-l-4 border-purple-500"
                        >
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <p className="text-purple-400">{exp.company} | {exp.period}</p>
                            <p className="text-gray-300 mt-2">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}