import React from 'react'
import { motion } from "framer-motion"

function CreateResumeTop() {
  return (
    <div className='md:h-44 h-32 flex flex-col justify-center w-full bg-gray-300 bg-opacity-25 xl:pl-52 lg:pl-24 sm:pl-12 pl-4 pr-4 bg-no-repeat bg-cover' >
        <motion.div initial={{ x: '-10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type: 'spring'}}  className='text-sm text-slate-500 font-semibold'>GET RECOGNISED BY YOUR SKILLS</motion.div>
        <motion.div initial={{ x: '100vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type: 'spring'}}  className='md:text-2xl sm:text-lg text-slate-500 font-semibold mt-2'>CREATE YOUR</motion.div>
        <motion.div initial={{ x: '-10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type: 'spring'}}  className='xl:text-5xl md:text-4xl sm:text-3xl text-2xl  font-semibold'>RESUME</motion.div>
    </div>
  )
}

export default CreateResumeTop 