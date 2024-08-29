import { delay, motion } from "framer-motion";

type Props = {
    character: string;
    fontSize: string;
    delay: number,
    color: string,
}

const TransitionApearence: React.FC<Props> = ({character, fontSize, delay, color}) => {
    return ( 
        <div>
            <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}  // Comienza con opacidad 0 y desenfoque
            animate={{ opacity: 1, filter: 'blur(0px)' }}   // Termina con opacidad 1 y sin desenfoque
            transition={{ duration: 1.5, ease: "easeInOut", delay: delay }} // Duración de 1.5 segundos y suavizado
            style={{
                color: color,
                fontSize: fontSize,
            }}
            >
                <span>{character}</span>
            </motion.div>
        </div>
     );
}
 
export default TransitionApearence;