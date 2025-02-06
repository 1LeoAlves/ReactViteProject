import { motion} from "motion/react";

export default function SkillCard(props){
    return(
        <motion.li 
        initial={{x: 100, opacity: 0.05}} 
        whileInView={{ease:"easeInOut", x: 0, opacity: 1, transition: { duration:.3, delay: props.delay}}}
        whileHover={{scale: 1.1}}  
        viewport={{ once: true, amount: 0.3 }}
        className="drop-shadow-[0px_0px_8px_#4A4A4A] lg:min-h-50 lg:max-h-70 max-[430px]:p-2 p-3 lg:p-5 flex justify-around align-middle flex-col bg-[#070707] rounded-[10px] " >
            <img className="max-[430px]:p-1 sm:p-0.5 lg:p-0 lg:h-[75%] lg:w-auto object-contain" src={props.src} alt="skil_Icon" />
            <h3 className="max-[430px]:text-[.45rem] text-[1rem] font-bold text-center">{props.title}</h3>
        </motion.li>
    );
}