import { motion } from "motion/react";

export default function ImagePicture(props){
    return(
        <motion.div className='max-sm:w-55 max-sm:h-55 max-lg:w-90 max-lg:h-90 border-0 rounded-[5%] overflow-hidden'>
            <motion.img className="w-full h-full object-cover" src={props.source} />
        </motion.div>
    )
}