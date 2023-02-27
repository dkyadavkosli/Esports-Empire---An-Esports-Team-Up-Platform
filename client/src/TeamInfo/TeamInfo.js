import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TeamInfoMid from './TeamInfoMid'
import TeamInfoTop from './TeamInfoTop'
import { motion } from "framer-motion"

function TeamInfo() {

  const myVariant = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{duration:1}
    },
    exit:{
      x:'-100vw',
      transition:{ease : 'easeInOut' , duration:0.5}
    }
  }

  return (
    <motion.div variants={myVariant} initial="hidden" animate='visible' exit='exit'>
        <Header/>
        <TeamInfoTop/>
        <TeamInfoMid/>
        <Footer/>
    </motion.div>
  )
}

export default TeamInfo