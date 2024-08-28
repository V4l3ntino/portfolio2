
"use client";
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
    const texto: string [] = ["Estudiante de desarrollo de aplicaciones web con sólida comprensión de programación y diseño web. Experimentado en tecnologías front-end como HTML, CSS, JavaScript, y frameworks como React, Vue, Django, Sprinboot. Capacidad demostrada para trabajar en equipos colaborativos, adaptarse a cambios rápidos y apasionado por aprender nuevas tecnologías. Busco oportunidades para contribuir al desarrollo de proyectos innovadores en aplicaciones web."]
    return ( 
        <div className="flex size-full justify-between">
            <motion.div
                    initial={{ scale: 0, opacity: 0, y: '-100vw' }}    // Comienza desde un tamaño pequeño y completamente transparente
                    animate={{ scale: 1, opacity: 1, y: 0 }}    // Expande hasta el tamaño original y se vuelve completamente visible
                    transition={{ type: "spring", stiffness: 50, duration: 2 }}  // Duración de 1.5 segundos con una transición suave
                    
                    className="flex flex-col items-center justify-center w-[49%] bg-slate-100 rounded "
            >
                    <div className="text-black mt-5 text-6xl">
                        {/* <Typer descriptions={descripciones} speed={10} intervalo={5000}/> */}
                        
                            <h1 className="font-bold flex">
                                {/* Valentino Hontar <TransitionApearence text="a" fontSize="15px"/> */}
                                {nombre.map((item, index) => (
                                    <TransitionApearence key={index} text={item} fontSize="40px" delay={index*0.2} color={`${item == "V" || item == "A" ? "#92D500" : "black"}`}/>
                                ))}
                            </h1>
                        
                    </div>
                <div className="z-10">
                    <br />
                    <Image src="/services.png"  alt="Avatar" width={500} height={500}/>
                </div>
            </motion.div>
            <div className=" w-[48%] flex justify-center  relative pointer-events-none backdrop-blur-sm z-10">
                <iframe className="absolute" src="https://giphy.com/embed/GRLqeKQjvmx9MtCIrH" width="480" height="480" allowFullScreen></iframe>
                <p className="w-[45%] text-base mt-28"><Typer descriptions={texto} speed={60}/></p>
                <iframe className="absolute pointer-events-none mt-80" src="https://giphy.com/embed/cRNeCftHi7SlX3Fwml" width="480" height="480" allowFullScreen></iframe>
            </div>
        </div>
     );
}
 
export default Description;