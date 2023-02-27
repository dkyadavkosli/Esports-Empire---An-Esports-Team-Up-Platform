import React, { useEffect } from 'react'
import { motion , AnimatePresence, useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer";

function CreatorMesage() {

  const {ref , inView} = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
        animation.start({
            x : 0,
            transition:{
                duration:2 , type: 'spring'
            }
        })
    }
    if(!inView){
        animation.start({
            x:"-100vw"
        })
    }
  }, [inView])
  


  return (
    <div ref={ref} id='creator' className='w-full rounded xl:pl-56 xl:pr-56 lg:pl-44 lg:pr-44 md:pl-28 md:pr-28 sm:pl-16 sm:pr-16 pl-2 pr-2 pt-8 pb-8'>
        <AnimatePresence> 
        <div className='flex w-full flex-row justify-center'>
            <motion.div animate={animation} className='xl:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold'>A MESSAGE FROM OUR CREATORS</motion.div>
        </div>
        <div className='flex w-full flex-row justify-center mt-4'>
            <div className='w-full text-sm font-semibold text-slate-500'>ESPORTS IS ONE OF THE FASTEST GROWING SECTORS IN INDIA. THERE ARE VARIOUS OPPORTUNITIES
                TO PERSUE A CAREER IN THIS FIELD. ALL YOU NEED IS PASSION FOR THE GAME AND SOME GOOD TEAMMATES WHO
                ARE EQUALLY HARDWORKING AND SUPPORTIVE.
            </div>
        </div>
        <div className='flex w-full flex-row justify-center mt-3'>
        <div className='w-full text-sm font-semibold text-slate-500'>WE , AT ESPORTS EMPIRE , PROVIDE A PLATFORM TO ALL THE 
            POTENTIAL GAMERS TO FIND THE BEST TEAMMATES SO THAT THEY CAN SHOWCASE THEIR GAMING SKILLS AT NATIONAL AND INTERNATIONAL
            STAGES AND PERUE A GOOD CAREER IN THE FIELD OF ESPORTS.
        </div> 
        </div>
        <div className='flex w-full flex-row justify-center mt-3'>
        <div className='w-full text-sm font-semibold text-slate-500'>SO FIND THE BEST POSSIBLE TEAM AND START GRINDING HARD AND SHOW EVERYONE
        WHAT YOU ARE CAPABLE OF.
        </div>
        </div>
        <div className='w-full mt-3 flex flex-row justify-center'>
        <div className="sm:w-7/12 w-full flex flex-row justify-end">
            <div className='text-sm text-slate-500 font-semibold'>~ TEAM ESPORTS EMPIRE</div>
        </div>
        </div>
        </AnimatePresence> 
    </div>
  )
}

export default CreatorMesage