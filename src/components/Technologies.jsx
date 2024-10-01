import React from 'react'
import { SiMysql } from "react-icons/si";
import { SiIbm } from "react-icons/si";
import { SiRstudioide } from "react-icons/si"
import  { SiMongodb } from 'react-icons/si'
import { FaPython } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { SiGooglecolab } from "react-icons/si";
import  { BiLogoPostgresql } from 'react-icons/bi';
import {motion} from "framer-motion"

const iconVariants = (duration) =>({
   initial: { y: -10},
   animate: {
      y: [10, -10],
      transition: {
         duration: duration,
         ease: "linear",
         repeat: Infinity,
         repeatType: "reverse"
      }
   }
})

export default function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
         whileInView={{opacity: 1, y:0}}
         initial = {{opacity: 0, y: -100}}
         transition = {{duration: 0.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial = {{ opacity: 0, x: -100}}
          transition={{ duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div  
              variants = {iconVariants(2.5)}
              initial = "initial"
              animate = "animate"
  
            className="rounded-2xl border-4 border-neutral-800 p-4">
               <SiRstudioide className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
             variants = {iconVariants(5)}
             initial = "initial"
             animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
               <SiJupyter className="text-7xl text-orange-400" />
            </motion.div>
            <motion.div 
              variants = {iconVariants(2)}
              initial = "initial"
              animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
               <FaPython className="text-7xl text-green-400" />
            </motion.div>
            <motion.div 
             variants = {iconVariants(6)}
             initial = "initial"
             animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
               <SiGooglecolab className="text-7xl text-orange-400" />
            </motion.div>
            <motion.div 
             variants = {iconVariants(2.5)}
             initial = "initial"
             animate = "animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
               <SiMysql className="text-7xl" />
            </motion.div>
            <motion.div 
             variants = {iconVariants(5)}
             initial = "initial"
             animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
               <SiMongodb className="text-7xl text-green-400" />
            </motion.div>
            <motion.div 
             variants = {iconVariants(2)}
             initial = "initial"
             animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
               <SiIbm className="text-7xl text-red-500" />
            </motion.div>
            
            <motion.div 
              variants = {iconVariants(4)}
              initial = "initial"
              animate = "animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
               <BiLogoPostgresql className="text-7xl text-sky-700" />
            </motion.div>
        </motion.div>
    </div>
  )
}
