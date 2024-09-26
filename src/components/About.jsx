import React from 'react'
import aboutImg from "../assets/pic2.png"
import { ABOUT_TEXT } from '../constants'

export default function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl' >About <span className='text-neutral-500'>Me</span> </h2>
        <div className="grid md:grid-cols-2 gap-4">
            <div className="w-full">
               <div className="">
                 <img className='rounded-2xl w-full' src={aboutImg} alt="Esther" />
               </div>              
            </div>
            <div className='w-full lg:1/2'>
                  <div className="flex  items-center text-center">
                    <p className='my-2 max-w-xl text-xl py-6'>{ABOUT_TEXT}</p>
                  </div>
               </div>
        </div>
    </div>
  )
}
