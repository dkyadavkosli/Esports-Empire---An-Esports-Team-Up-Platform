import React from 'react'
import Header from '../components/Header'
import TeamsMid from './TeamsMid'
import TeamsTop from './TeamsTop'
import { motion , AnimatePresence } from "framer-motion"


function Teams() {
  
  const myVariant = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{duration:1.5}
    },
    exit:{
      x:'-100vw',
      transition:{ease : 'easeInOut' , duration:0.5}
    }
  }

  return (
    <motion.div variants={myVariant} initial="hidden" animate='visible' exit='exit'>
        <Header/>
        <TeamsTop/>
        <TeamsMid/>
    </motion.div>
  )
}

export default Teams