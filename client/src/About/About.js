import React from 'react'
import AboutMid from './AboutMid'
import AboutTop from './AboutTop'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion , AnimatePresence } from "framer-motion"

function About() {

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
        <AboutTop/>
        <AboutMid/>
        <Footer/>
    </motion.div>
  )
}

export default About