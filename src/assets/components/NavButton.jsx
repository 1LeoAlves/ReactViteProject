import { motion } from "motion/react"
import { useRef } from "react";

export default function NavButton(props){
    return <motion.button onClick={SmoothScrollTo(props.targetId)} className="cursor-grab hover:scale-105 hover:drop-shadow-[0px_0px_5px_white]"  
    initial={
        { 
            x: 500,
            opacity: 0
        }
    } 
    animate={
        { 
            ease: "easeInOut", 
            x: 0, opacity: 1, 
            transition: {
                duration:.5, 
                delay: props.delay
            }
        }
    }
    >{props.text}</motion.button>
}

function SmoothScrollTo(targetId){
    const element = document.getElementById(targetId);
    if(element){
        const offset = element.offsetTop - 50 // <- Ajuste para onde parar

        window.scrollTo({top:offset, behaiour:"smooth"});
    }
}