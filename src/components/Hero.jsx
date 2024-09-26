import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/pic1.png"

export default function Hero() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className="grid md:grid-cols-2 gap-4">
            <div className="w-full lg:1/2">
              <div className="flex flex-col items-center lg:items-start">
                <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl '>Esther Wambeo</h1>
                <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Data Scientist</span>
                <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
              
               </div>               
            </div>
            <div className="">
              <div className="">
                <img src={profilePic} className='w-full' alt="Esther Wambeo" />
              </div>
            </div>           
        </div>
        
    </div>
  )
}

