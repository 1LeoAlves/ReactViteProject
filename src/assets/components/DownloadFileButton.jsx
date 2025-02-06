import { motion } from "motion/react"

export default function DownloadFileButton(props){
    return <motion.a href={props.filePath} download={props.filePath} className="flex items-center justify-center text-center cursor-grab hover:scale-105 hover:drop-shadow-[0px_0px_5px_white] ease-in-out;"  
    initial={
        { 
            x: 500,
            opacity: 0.05
        }
    } 
    animate={
        { 
            ease: "easeInOut", 
            x: 0, 
            opacity: 1, 
            transition: {
                duration:.5, 
                delay: props.delay
            }
        }
    }
    >{props.text}</motion.a>
}