import { motion } from "motion/react";

export default function ImagePicture(props){
    return(
        <motion.div className='w-90 h-90 border-0 rounded-[5%] overflow-hidden'>
            <motion.img className="w-full h-full object-cover" src={props.source} />
        </motion.div>
    )
}