import React from 'react'
import CreateResumeMid from './CreateResumeMid'
import CreateResumeTop from './CreateResumeTop'
import Footer from '../components/Footer'
import Header from "../components/Header"

function CreateResume() {

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
    <div variants={myVariant} initial="hidden" animate='visible' exit='exit' className=''>
        <Header/>
        <CreateResumeTop/>
        <CreateResumeMid/>
        <Footer/>
    </div>
  )
}

export default CreateResume