"use client"
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Contact = () => {
    return ( 
        <main className="flex min-h-screen  flex-col items-center justify-between p-12 max-w-screen-2xl mx-auto ">
            <div className="text-white bg-gradient-to-b from-slate-50/15 p-3 mb-96 to-transparent  flex-crow w-[100%] max-w-[1024px] rounded z-10 h-[600px] relative backdrop-blur-lg ">
                <motion.ul
                initial={{x:40, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{delay:0.5}}
                >
                    <li>Mi correo: <a href="mailto:valentinohontar15@gmail.com">
                    {(`valentinohontar15@gmail.com`).split("").map((char,index) => (
                        <motion.span
                        key={index}
                        initial={{opacity:0, filter: "blur(15px)"}}
                        animate={{opacity:1, filter: "blur(0px)"}}
                        transition={{delay:index*0.09}}
                        >
                            {char}
                        </motion.span>
                    ))}
                    </a></li>
                    <li>Mi número: +34 
                        <CountUp className="ml-2" end={6} start={0} duration={5} />    
                        <CountUp end={0} start={0} duration={5} />    
                        <CountUp end={3} start={0} duration={5} />    
                        <CountUp end={1} start={0} duration={5} />    
                        <CountUp end={1} start={0} duration={5} />    
                        <CountUp end={2} start={0} duration={5} />    
                        <CountUp end={4} start={0} duration={5} />    
                        <CountUp end={9} start={0} duration={5} />    
                        <CountUp end={6} start={0} duration={5} />    
                    </li>
                </motion.ul>
            </div>
        </main>

     );
}
 
export default Contact;