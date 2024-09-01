"use client"
import { dataAboutPage } from "@/data";
import TransitionApearence from "./transitionApearence";
import VisibleNotvisible from "./visible-notvisible";
import { motion } from "framer-motion";

const TimeLine = () => {
    return ( 
        <div className="flex flex-col justify-center divide-y divide-slate-200">
            <motion.div
            initial={{x:20, opacity:0, filter: "blur(15px)"}}
            animate={{x:0, opacity:1, filter: "blur(0px)"}}
            transition={{delay:4}}
            className="w-full max-w-3xl mx-auto md:pb-40 md:pt-20">
                <div className="-my-6">
                    {dataAboutPage.map((data, index) => (
                        <div key={data.id}
                            className="relative py-6 pl-8 sm:pl-32 group">
                            <motion.h3
                            initial={{x:20, opacity:0, filter: "blur(15px)"}}
                            animate={{x:0, opacity:1, filter: "blur(0px)"}}
                            transition={{delay:4.5}}
                            className="mb-1 text-2xl font-bold sm:mb-0 text-slate-50">{data.title}</motion.h3>
                            <div className="flex flex-col sm:flex-row items-start mb-1
                                        group-last:before:hidden before:absolute
                                        before:left-2 sm:before:left-0 before:h-full
                                        before:px-px before:bg-slate-300 sm:before:ml-[6.5rem]
                                        before:self-start before:-translate-x-1/2
                                        before:translate-y-3 after:absolute after:left-2
                                        sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600
                                        after:border-4 after:box-content after:border-slate-50
                                        after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2
                                        after:translate-y-1.5">
                                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center
                                            justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600
                                            bg-emerald-100 rounded-full
                                            ">{data.date}</time>
                                            <motion.p
                                            initial={{x:20, opacity:0, filter: "blur(15px)"}}
                                            animate={{x:0, opacity:1, filter: "blur(0px)"}}
                                            transition={{delay:5 + index}}                                            
                                            className="text-xl font-bold text-gray-300">{data.subtitle}</motion.p>
                            </div>
                            <motion.p
                            initial={{x:20, opacity:0, filter: "blur(15px)"}}
                            animate={{x:0, opacity:1, filter: "blur(0px)"}}
                            transition={{delay:5.5 + index}}
                            className="text-gray-100 max-w-md">{data.description}</motion.p>
                        </div>
                    ))}
                </div>
            </motion.div>
            
        </div>
     );
}
 
export default TimeLine;