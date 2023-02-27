import React, { useEffect, useState } from 'react'
import CreatorMesage from './CreatorMesage'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeMid from './HomeMid'
import TeamPlayer from './TeamPlayer'
import { useSelector, useDispatch } from 'react-redux';
import {changeCurrTeam , changeGame , changeCaptain, changeSearchPlayer , changeSearchTeam, changeCurrResume , changeMainTeam , changeMainUser , changeTeamName , changeUserName} from "../actions/index"
import axios from 'axios'
import { motion } from "framer-motion"

function HomeScreen() { 

  const myTeam=useSelector((state)=>
  state.changeCurrTeam
  );
   
  const myResume=useSelector((state)=>
  state.changeCurrResume
  );

  const myUser=useSelector((state)=>
  state.changeUser
  );

  console.log(myUser)

  const mainUser=useSelector((state)=>
  state.changeMainUser
  );

  const mainTeam=useSelector((state)=>
  state.changeMainTeam
  );

  const userName=useSelector((state)=>
  state.changeUserName
  );

  const teamName=useSelector((state)=>
  state.changeTeamName
  );


  const captain=useSelector((state)=>
  state.changeCaptain
  );

  const myGame=useSelector((state)=> 
  state.changeGame
  );

  const fetchResumeId = async () => { 
    try{
    const res = await axios.get("api/resume/userId/"+myUser?._id);
    if(res.data !== null){
    dispatch(changeCurrResume(res.data?._id))
    dispatch(changeMainUser(res.data?._id))
    dispatch(changeUserName(res.data?.username))
    dispatch(changeGame(res.data?.game))
    }
    }catch(e){
      console.log(e)
    } 
  };

  const dispatch = useDispatch();
 
  const fetchTeamId = async () => {
    try{
      if(myResume!==null){
    const res = await axios.get("api/resume/id/"+myResume);
    if(res.data !== null){
      dispatch(changeCurrTeam(res.data?.team_id))
      dispatch(changeMainTeam(res.data?.team_id))
      dispatch(changeTeamName(res.data?.team))
      if(res.data?.team_id===""){
        const res = await axios.get("api/team/captain/"+myResume)
        if(res.data!==null){
          dispatch(changeCurrTeam(res.data?._id))
          const change = {
            team_id : res.data?._id 
          }
          await axios.put("/api/resume/id/"+myResume, change);
        }
      } }
    }
    }catch(e){
      console.log(e)
    }
  };  

  const fetchTeam = async () => {
    if(mainTeam!==""){
    try {
      const res = await axios.get("api/team/" + mainTeam);
      if(res.data!== null){
        dispatch(changeCaptain(res.data?.captain_id))
      }
    } catch (e) {
      console.log(e);
    }
  }
  };

  useEffect(() => {
    fetchTeam();
    dispatch(changeSearchPlayer(null));
    dispatch(changeSearchTeam(null));
  }, [mainTeam]);

  useEffect(()=>{
       fetchResumeId()
      fetchTeamId()
  },[myResume])

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
        <HomeMid/>
        <TeamPlayer/>
        <CreatorMesage/>
        <Footer/>
    </motion.div>
  )
}
 
export default HomeScreen