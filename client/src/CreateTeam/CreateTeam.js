import React from 'react'
import CreateTeamMid from './CreateTeamMid'
import CreateTeamTop from './CreateTeamTop'
import Footer from '../components/Footer'
import Header from "../components/Header"
import { motion , AnimatePresence } from "framer-motion"

function CreateTeam() {

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
    <motion.div variants={myVariant} initial="hidden" animate='visible' exit='exit' className=''>
        <Header/>
        <CreateTeamTop/>
        <CreateTeamMid/>
        <Footer/>
    </motion.div>
  )
}

export default CreateTeam