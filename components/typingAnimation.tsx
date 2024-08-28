"use client"

import { TypeAnimation } from "react-type-animation";

type TypeProps = {
    descriptions: string[],
    repeat?: number,
    infinito?: true | false,
    speed?: number,
    intervalo?: number,
}

const Typer: React.FC<TypeProps> = ({descriptions, repeat, infinito = true, speed=20, intervalo=1000}) => {
    return ( 
        <TypeAnimation 
        sequence={
            descriptions.reduce((acc: any[], description: string) => {
            return [...acc, description, intervalo];  
            }, [])
        }
        wrapper='span'
        speed={speed}
        repeat={infinito? Infinity : repeat}
        className='font-bold'
        />
     );
}
 
export default Typer;