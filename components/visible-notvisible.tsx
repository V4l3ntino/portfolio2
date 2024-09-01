"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
    text: string,
    inputTime: number,
    outputTime: number,
}

const VisibleNotvisible: React.FC<Props> = ({text, inputTime, outputTime}) => {
    const [isVisible, setIsvisible]  = useState (false);
    const [notVisible, setNotVisible] = useState(false);
    useEffect(() => {
        setIsvisible(true)

        const timer = setTimeout(() => {
            setIsvisible(false)
        },inputTime)
        
        return () => clearTimeout(timer)
    },[])
    useEffect(() => {
        setNotVisible(true)

        const timer = setTimeout(() => {
            setNotVisible(false)
        },outputTime)

        return () => clearTimeout(timer)
    },[isVisible])
    return ( 
        <div className="  flex flex-row w-[100%] justify-center z-0">
            {
                isVisible ? (
                    !notVisible ? (
                        <h1 className="absolute titulo">
                            {
                                (text).split(" ").map((word,key) => (
                                    <span key={key} className="inline-block mr-24">
                                        
                                        {
                                            word.split("").map((char, index) => (
                                                <motion.span
                                                key={index+key}
                                                className="inline-block"
                                                initial={{
                                                    opacity: 0,
                                                    y: -80,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                transition={{
                                                    delay: (key/10)+(index/10)*0.9
                                                }}  
                                                >
                                                    {char}
                                                </motion.span>
                                            ))
                                        }
                                        
                                    </span>
                                ))
                            }
                        </h1>
                    ):(``)

                ) : (
                    notVisible ? (
                        <h1 className="absolute titulo">
                            {
                                (`TRAYECTORIA`).split(" ").map((word,key) => (
                                    <span key={key} className="inline-block mr-24">
                                        
                                        {
                                            word.split("").map((char, index) => (
                                                <motion.span
                                                key={index+key}
                                                className="inline-block"
                                                initial={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                animate={{
                                                    opacity: 0,
                                                    y: -80,
                                                }}
                                                transition={{
                                                    delay: (key/10)+(index/10)*0.9
                                                }}  
                                                >
                                                    {char}
                                                </motion.span>
                                            ))
                                        }
                                        
                                    </span>
                                ))
                            }
                        </h1>
                    ) : (``)
                )
            }
        </div>
     );
}
 
export default VisibleNotvisible;