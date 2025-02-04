import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, imgsrc, href, delay }) {
    return (
        <motion.li
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay },
            }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255,255,255,0.5)" }}
            exit={{ x: 100, opacity: 0, transition: { duration: 0.3 } }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#070707] rounded-lg p-5 shadow-lg flex flex-col items-center text-center transition-all"
        >
            <img className="w-full h-40 object-cover rounded-md mb-4" src={imgsrc} alt={title} />
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-gray-400">{desc}</p>
            <a
                href={href}
                className="mt-4 inline-block px-4 py-2 text-white bg-purple-700 rounded-md hover:bg-purple-800 transition-all"
            >
                Ver mais
            </a>
        </motion.li>
    );
}
