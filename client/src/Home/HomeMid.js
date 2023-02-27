import React, { useEffect, useState } from 'react'
import bg1 from "../assets/background1.jpg"
import bg2 from "../assets/background2.jpg"
import bg3 from "../assets/background3.jpg"
import img1 from "../assets/TeamImg.jpg"
import img2 from "../assets/PlayerImg.png"
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion , AnimatePresence } from "framer-motion"

function HomeMid() {
 
  const [back , setBack] = useState(bg1);

  const myResume=useSelector((state)=>
  state.changeCurrResume
  );

  const myUser=useSelector((state)=>
  state.changeUser
  );
 
  const history = useNavigate()

  useEffect(()=>{
    if(!myUser){
      history("/")
    }
  })

  const getBack = () => {
    if(back === bg1){
      setBack(bg2)
    }else if(back === bg2){
      setBack(bg3)
    }else if(back === bg3){
      setBack(bg1)
    }
  }

  useEffect(()=>{
    setTimeout(() => {
      getBack()
    }, 5000);
  } , [back])

  return (
    <div id='mid' className='md:h-103 sm:h-102 h-101 w-full flex flex-col rounded-b md:justify-start justify-center bg-no-repeat bg-cover' style={{backgroundImage: `url(${back})`}}>
    <AnimatePresence> 
     <div className='text-white h-full pb-10 flex flex-col justify-center lg:pl-36 md:pl-28 sm:pl-20 pl-4 sm:pr-12 pr-3 w-full'>   
     <div className='text-slate-400 sm:text-lg text-sm sm:font-medium font-semibold'>WELCOME TO INDIA'S FIRST TEAM FINDING PLATFORM</div>   
     <motion.div initial={{ x: '100vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type: 'spring'}} className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl wq:pt-4 pt-2 font-medium lg:w-7/12 md:w-2/3 sm:w-4/5'>FIND THE PERFECT TEAM AND TEAMMATES TO BOOST UP YOUR COMPETITIVE CAREER</motion.div> 
     <div className='text-slate-400 sm:text-lg text-sm lg:w-5/12 md:w-7/12 sm:w-3/4 wq:pt-4 pt-2 sm:font-medium font-semibold'>WE AIM TO ONBOARD ALL THE POTENTIAL GAMERS FROM ALL AROUND THE COUNTRY ON A SINGLE PLATFORM</div>
     <Link to="/about"> 
        <motion.button initial={{ x: '-10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type: 'spring'}} className='text-white bg-gradient-to-r from-sky-600 to-sky-400 sm:mt-6 mt-4 pt-3 pb-3 sm:text-base text-sm pl-3 pr-3 rounded' >EXPLORE MORE</motion.button>

      </Link>  
     </div>
     </AnimatePresence> 
    </div>
  )
}

export default HomeMid