"use client"

import { TypeAnimation } from "react-type-animation";

type TypeProps = {
    descriptions: string[],
    repeat?: number,
    infinito?: true | false,
}

const Typer: React.FC<TypeProps> = ({descriptions, repeat, infinito = true}) => {
    return ( 
        <TypeAnimation 
        sequence={
            descriptions.reduce((acc: any[], description: string) => {
            return [...acc, description, 10000];  
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