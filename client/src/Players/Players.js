import React , {useEffect} from 'react'
import Header from '../components/Header'
import PlayersMid from './PlayersMid'
import PlayersTop from './PlayersTop'
import { motion } from "framer-motion"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Players() {
  const myUser=useSelector((state)=>
  state.changeUser
  );

  const history = useNavigate()

  useEffect(()=>{
    if(!myUser){
      history("/home")
    }
  })

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
        <PlayersTop/>
        <PlayersMid/>
    </motion.div>
  )
}

export default Players