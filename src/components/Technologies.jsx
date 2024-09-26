import React from 'react'
import { SiMysql } from "react-icons/si";
import { SiIbm } from "react-icons/si";
import { SiRstudioide } from "react-icons/si"
import  { SiMongodb } from 'react-icons/si'
import { FaPython } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { SiGooglecolab } from "react-icons/si";
import  { BiLogoPostgresql } from 'react-icons/bi'

export default function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <SiRstudioide className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <SiJupyter className="text-7xl text-orange-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <FaPython className="text-7xl text-green-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <SiGooglecolab className="text-7xl text-orange-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <SiMysql className="text-7xl" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <SiMongodb className="text-7xl text-green-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <SiIbm className="text-7xl text-red-500" />
            </div>
            
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <BiLogoPostgresql className="text-7xl text-sky-700" />
            </div>
        </div>
    </div>
  )
}
