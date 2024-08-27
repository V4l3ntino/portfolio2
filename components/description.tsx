
import { TypeAnimation } from "react-type-animation";
import Typer from "./typingAnimation";
import Image from "next/image";

const Description = () => {
    const descripciones: string[] = ["Estudiante","Apasionado","Trabajador"]
    const texto: string [] = ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem aut voluptas nemo similique delectus voluptatum nisi praesentium ab distinctio magni sequi voluptatem veniam, officiis, earum hic dolores velit voluptates molestiae."]
    return ( 
        <div className="flex size-full justify-between">
            <div className="flex flex-col items-center justify-center w-[49%] bg-slate-100 rounded ">
                <div className="text-black mt-5 text-6xl">
                    <Typer descriptions={descripciones}/>
                </div>
                <br />
                <Image src="/services.png" alt="Avatar" width={500} height={500}/>
            </div>
            <div className=" w-[48%] flex justify-center items-center"><p className="w-[50%] text-base"><Typer descriptions={texto}/></p></div>
        </div>
     );
}
 
export default Description;