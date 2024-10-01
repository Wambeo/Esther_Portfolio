import React from 'react'
import aboutImg from "../assets/pic2.png"
import { ABOUT_TEXT } from '../constants'
import {motion} from "framer-motion"

export default function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl' >About <span className='text-neutral-500'>Me</span> </h2>
        <div className="grid md:grid-cols-2 gap-4">
            <motion.div 
             whileInView={{opacity: 1, x:0}}
             initial = {{opacity: 0, x: -100}}
             transition={{duaration: 0.5}}
            className="w-full">
               <div className="">
                 <img className='rounded-2xl w-full' src={aboutImg} alt="Esther" />
               </div>              
            </motion.div>
            <motion.div 
             whileInView={{opacity: 1, x:0}}
             initial = {{opacity: 0, x:100}}
             transition={{duration: 0.5}}
            className='w-full lg:1/2'>
                  <div className="flex  items-center text-center">
                    <p className='my-2 max-w-xl  py-6'>{ABOUT_TEXT}</p>
                  </div>
               </motion.div>
        </div>
    </div>
  )
}
