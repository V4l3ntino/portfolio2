"use client"
import { socialNetworks } from "@/data";
import { motion } from "framer-motion";

const SocialNetwork = () => {
    return ( 
        <div className="max-w-60 w-[100%]  flex m-auto justify-between">
            {
                socialNetworks.map((item, index) => (
                    <motion.span
                    key={index}
                    initial={{y: -20, opacity:0, color:"#92D500", filter: "blur(15px)"}}
                    animate={{y:0, opacity:1, color:"#ffff", filter: "blur(0px)"}}
                    transition={{delay:index*0.9}}
                    className="hover:bg-[#92D500] hover:text-black transition duration-500 rounded-full p-3"
                    >
                        <a href="#">{item.logo}</a>
                    </motion.span>
                ))
            }
        </div>
     );
}
 
export default SocialNetwork;