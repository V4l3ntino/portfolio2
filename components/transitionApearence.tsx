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
            initial={{ opacity: inputOpacity, filter: `blur(${inputBlur}px)` }}  // Comienza con opacidad 0 y desenfoque
            animate={{ opacity: outputOpacity, filter: `blur(${outputBlur}px)` }}   // Termina con opacidad 1 y sin desenfoque
            transition={{ duration: 1.5, ease: "easeInOut", delay: delay }} // Duración de 1.5 segundos y suavizado
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