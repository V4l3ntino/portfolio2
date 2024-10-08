"use client"

import { itemsNavbar } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/motion-transitions";
import CoverParticles from "./cover-particles";
import Typer from "./typingAnimation";


const NavBar = () => {
    const path = usePathname();
    return ( 
        <motion.div
                initial={{y:'-10vw'}}
                animate={{y: 0}}
                exit="hidden"
                className="pb-4"
            >
                <nav className="max-w-screen-2xl mx-auto bg-slate-50/15 rounded backdrop-blur-sm p-4">

                    <ul className="flex items-center justify-center gap-2 px-4 py-1 z-20 ">
                        {itemsNavbar.slice(0,3).map((item) => (
                            <motion.ul
                            key={item.id}
                            initial={{y:'-10vw'}}
                            animate={{y: 0}}
                            transition={{delay: item.id * 0.1}}                            >
                                <li
                                className={`px-3 py-2 transition duration-500
                                    rounded-full cursor-pointer hover:bg-[#92D500] hover:text-black hover:font-bold
                                    ${path === item.link ? 'text-black bg-slate-100  font-bold' : `text-white`}
                                    `}
                                >
                                    <Link href={item.link}>{item.title}</Link>
                                </li>
                            </motion.ul>
                        ))}
                    </ul>
                </nav>
            </motion.div>
     );
}
 
export default NavBar;