import { motion } from "motion/react";

export default function ImagePicture(props){
    return(
        <motion.div className='w-85 h-85 border-1 rounded-[50%] bg-amber-200 overflow-hidden'>
            <motion.img className="w-auto h-auto object-cover" src={props.source} />
        </motion.div>
    )
}