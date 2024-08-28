"use client"

import { itemsNavbar } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/motion-transitions";
import CoverParticles from "./cover-particles";


const NavBar = () => {
    const path = usePathname();
    return ( 
        
        <div className="mt-6 ">
            <motion.div
                variants={fadeIn("bottom")}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <CoverParticles />
                <nav>
                    <iframe src="https://giphy.com/embed/wJP3DKVDD4Wm5s2Vpm" className="absolute translate-y-12 pointer-events-none" allowFullScreen></iframe>
                    <div className="flex items-center justify-center gap-2 px-4 py-1 z-20 backdrop-blur-sm">
                        {itemsNavbar.slice(0,3).map((item) => (
                            <div
                            key={item.id}
                            className={`px-3 py-2 transition duration-100
                                rounded-full cursor-pointer hover:bg-[#92D500] hover:text-black hover:font-bold
                                ${path === item.link && 'bg-slate-100 text-black font-bold'}
                                `}
                            >
                                <Link href={item.link}>{item.title}</Link>
                            </div>
                        ))}
                    </div>
                </nav>
            </motion.div>
        </div>
     );
}
 
export default NavBar;