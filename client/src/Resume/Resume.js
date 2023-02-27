import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ResumeMid from './ResumeMid'
import ResumeTop from './ResumeTop'
import { motion , AnimatePresence } from "framer-motion"

function Resume() {

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
        <ResumeTop/>
        <ResumeMid/>
        <Footer/>
    </motion.div>
  )
}

export default Resume