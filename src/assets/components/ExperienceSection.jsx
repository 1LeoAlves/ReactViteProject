import {motion} from "motion/react";

export default function ExperienceSection(){
    const experiences = [
        {
            title: "Atendente Comercial",
            company: "Grupo F&F",
            period: "2024 - Atualemente",
            description: "Atendimento à clientes e suporte externo e interno da corporação. Fiz o treinamento para trabalhar como analista de redes e enquanto estudava, trabalhei no desenvolvimento de um sistema de LPR usando C#, EmguCV, ML.NET e TesseractOCR"
        },
        {
            title: "Desenvolvedor web Freelance",
            company: "Molduarte HomeDecor",
            period: "2024",
            description: "Projetei e desenvolvi uma página web com HTML, CSS e Javascript, com banco de dados no PHPMyAdmin, hospedado no Hostinger."
        },
        {
            title: "Chefe de Sala",
            company: "CEBRASPE - Centro Brasileiro de Pesquisa em Avaliação e Seleção e de Promoção de Eventos",
            period: "2024",
            description: "Organizar e fiscalizar realização de exame em Monte Gordo, Camaçari, Ba."
        },
        {
            title: "Auxiliar Administrátivo",
            company: "IFBA - Instituto Federal de ciência e tecnológia da Bahia",
            period: "2023",
            description: "Auxiliar nos setores internos do campus Lauro de Freitas."
        },
        {
            title: "Palestrante de artigo",
            company: "SBGames - Sociedade Brasileira de Games",
            period: "2022",
            description: "Organizar, preparar, e discorrer em apresentação de 15 minutos sobre o desenvolvimento do jogo desenvolvido no projeto de pesquisa."
        },
        {
            title: "Desenvolvedor de Jogos",
            company: "IFBA",
            period: "2021 - 2022",
            description: "Projeto de pesquisa com enfasse no desenvolvimento de jogo utilizando C# e Unity, retratando a cultura da Bahia e o camdomblé."
        },
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
                            whileHover={{scale: 1.1}}  
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