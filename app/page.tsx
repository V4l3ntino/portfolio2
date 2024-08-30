"use client"
import Description from "@/components/description";
import Typer from "@/components/typingAnimation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 max-w-screen-2xl mx-auto ">
          <motion.div
          initial={{x:'10vw', opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{delay:2}}
          className="absolute flex w-[100%] -translate-y-6 max-w-[800px] m-auto"
          >
            <div className="flex w-40  justify-center">
                  <iframe src="https://giphy.com/embed/g5nbfmiZQAjihMx4Oi" className="pointer-events-none" allowFullScreen></iframe>
                  <div className="opacity-0">
                      <Typer descriptions={[ "","*****"]} speed={50} intervalo={1200}/>
                  </div>
            </div>
          </motion.div>
      <Description />
    </main>
  );
}
