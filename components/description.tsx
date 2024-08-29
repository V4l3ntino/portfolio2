"use client"
import { TypeAnimation } from "react-type-animation";
import Typer from "./typingAnimation";
import Image from "next/image";
import { motion } from "framer-motion"
import CoverParticles from "./cover-particles";
import TransitionApearence from "./transitionApearence";

const Description = () => {
    const descripciones: string[] = ["Estudiante","Apasionado","Trabajador"]
    let nombre: string[] = []
    nombre = ('ValentinoArmindo').split("");
    let apellido: string[] = []
    apellido = ('Hontar_Dos_Santos').split("");
    


    return ( 
        <div className="bg-gradient-to-b from-slate-50/15  to-transparent  flex-crow w-[100%] max-w-[1024px] rounded z-10 h-[600px] relative ">
            <h1 className="absolute -top-6 left-0 w-auto flex">
                {
                    ("Web Developer").split(" ").map((word, key) => (
                        <span className="mr-5 flex font-bold">
                            {
                                word.split("").map((char, index) => (
                                    <TransitionApearence 
                                    character={char}
                                    fontSize="50px"
                                    delay={key+index*0.09}
                                    color="white"
                                    />
                                ))
                            }
                        </span>
                    ))
                }
            </h1>
            <div className="-translate-y-40">
                <motion.div
                initial={{y:-20, opacity: 0}}
                animate={{opacity:1, y:0}}
                >
                    <div className="-full flex justify-center items-end h-[49%]">
                        <Image src="/services.png" className="z-20" width={500} height={500} alt="Avatar"/>
                    </div>
                    <div className="w-[100%] max-w-[500px] m-auto p-2  bg-gradient-to-b from-slate-100 z-20  to-transparent rounded-md h-auto min-h-[50%] text-black">
                        <h2 className="font-bold text-xl">
                            {
                                ("Nombre: Valentino Armindo Hontar Dos Santos").split(" ").map((word,key) => (
                                    <span key={key} className={`inline-block mr-2`}>
                                        {
                                            word.split("").map((char, index) => (
                                                <motion.span
                                                key={index*key}
                                                className="inline-block"
                                                initial={{
                                                    opacity:0,
                                                    y: -20,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                transition={{
                                                    delay: 0.9 + (index/100) + (key/100)
                                                }}
                                                >
                                                    {char}
                                                </motion.span>
                                            ))
                                        }
                                    </span>
                                ))
                            }
                        </h2>
                        <p>
                            {
                                ("Edad: 21 años").split(" ").map((word,key) => (
                                    <span key={key} className="inline-block mr-2">
                                        {
                                            word.split("").map((char, index) => (
                                                <motion.span
                                                key={index*key}
                                                className="inline-block"
                                                initial={{
                                                    opacity:0,
                                                    y: -20,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                transition={{
                                                    delay: 0.9 + (index/100) + (key/100)
                                                }}
                                                >
                                                    {char}
                                                </motion.span>
                                            ))
                                        }
                                    </span>
                                ))
                            }
                        </p>
                        <p>
                        {
                            (`Me dedico al desarrollo de páginas web, actualmente estoy aprendiendo React y Framer Motion. Mi objetivo es trabajar duro y crecer exponelcialmente en cualquier empesa. Soy una persona trabajadora y con mucha actitud.`).split(" ").map((word, key) => (
                                <span key={key} className={`inline-block mr-2 ${word == "React" || word == "Framer" || word == "Motion." || word == "trabajadora" || word == "actitud" || word == "persona" ? "font-bold" : ""}`}>
                                    {
                                        word.split("").map((character, index) => (
                                            <motion.span
                                            key={index*key}
                                            className="inline-block"
                                            initial={{
                                                opacity: 0,
                                                y: -20,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                delay: (key/10)+(index/10)*0.01
                                            }}
                                            >
                                                {character}
                                            </motion.span>
                                        ))
                                    }
                                </span>
                            ))
                        }
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
     );
}
 
export default Description;