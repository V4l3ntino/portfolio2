import {  motion } from "framer-motion";

type Props = {
    character: string;
    delay: number,
    color: string,
    inputOpacity: number,
    outputOpacity: number,
    inputBlur: number,
    outputBlur: number
}

const TransitionApearence: React.FC<Props> = ({character, delay, color, inputOpacity, outputOpacity, inputBlur, outputBlur}) => {
    return ( 
        <div>
            <motion.div
            initial={{ opacity: inputOpacity, filter: `blur(${inputBlur}px)` }}  
            animate={{ opacity: outputOpacity, filter: `blur(${outputBlur}px)` }}   
            transition={{ duration: 1.5, ease: "easeInOut", delay: delay }} 
            style={{
                color: color,
                
            }}
            >
                <span className="inline-block titulo">{character}</span>
            </motion.div>
        </div>
     );
}
 
export default TransitionApearence;