"use client"

import { TypeAnimation } from "react-type-animation";

type TypeProps = {
    descriptions: string[],
    repeat?: number,
    infinito?: true | false,
    intervalo?: number,
}

const Typer: React.FC<TypeProps> = ({descriptions, repeat, infinito = true, intervalo=1000}) => {
    return ( 
        <TypeAnimation 
        sequence={
            descriptions.reduce((acc: any[], description: string) => {
            return [...acc, description, intervalo];  
            }, [])
        }
        wrapper='span'
        speed={50}
        repeat={infinito? Infinity : repeat}
        className='font-bold'
        />
     );
}
 
export default Typer;