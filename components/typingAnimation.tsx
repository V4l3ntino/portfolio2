"use client"

import { TypeAnimation } from "react-type-animation";

const Typer = () => {
    return ( 
        <TypeAnimation 
                sequence={[
                    "Hola, soy valentino y Soy un desarrollador de tecnologías web apasionado en aprender y crear proyectos complejos.",
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={1}
                className='font-bold text-secondary'
                />
     );
}
 
export default Typer;