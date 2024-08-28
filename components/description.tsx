
"use client";
import { TypeAnimation } from "react-type-animation";
import Typer from "./typingAnimation";
import Image from "next/image";
import { motion } from "framer-motion"
import CoverParticles from "./cover-particles";

const Description = () => {
    const descripciones: string[] = ["Estudiante","Apasionado","Trabajador"]
    const texto: string [] = ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem aut voluptas nemo similique delectus voluptatum nisi praesentium ab distinctio magni sequi voluptatem veniam, officiis, earum hic dolores velit voluptates molestiae."]
    return ( 
        <div className="flex size-full justify-between">
            <motion.div
                    initial={{ x: '-100vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 50, duration: 2 }}
                    className="flex flex-col items-center justify-center w-[49%] bg-slate-100 rounded "
            >
                <CoverParticles />
                    <div className="text-black mt-5 text-6xl">
                        {/* <Typer descriptions={descripciones} speed={10} intervalo={5000}/> */}
                        
                            <h1 className="font-bold">Valentino Hontar</h1>
                        
                    </div>
                <div className="z-10">
                    <br />
                    <Image src="/services.png"  alt="Avatar" width={500} height={500}/>
                </div>
            </motion.div>
            <div className=" w-[48%] flex justify-center items-center relative pointer-events-none bg-black z-10">
                <iframe className="absolute" src="https://giphy.com/embed/GRLqeKQjvmx9MtCIrH" width="480" height="480" allowFullScreen></iframe>
                <p className="w-[50%] text-base"><Typer descriptions={texto} speed={60}/></p>
            </div>
        </div>
     );
}
 
export default Description;