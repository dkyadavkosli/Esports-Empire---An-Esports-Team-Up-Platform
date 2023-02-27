import React , {useRef} from 'react'
import Header from '../components/Header'
import {MdLogin} from "react-icons/md"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { motion } from "framer-motion"

function Register() {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const cpassword = useRef();

  const history = useNavigate();


  const handleClick = async (e) => {
    e.preventDefault();
    if (cpassword.current.value !== password.current.value) {
      cpassword.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/api/entry/register", user);
        history("/")
      } catch (err) {
        window.alert("An account with this Email already exists")
      }
    }
  };

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
    <Header hide="Y"/>
    <div className='md:h-44 sm:h-36 sm:pt-0 sm:pb-0 pt-6 pb-6 w-full flex flex-col justify-center bg-gray-300 bg-opacity-25 xl:pl-52 lg:pl-36 md:pl-24 sm:pl-12 sm:pr-12 md:pr-24 pr-4 pl-4 bg-no-repeat bg-cover' >
        <motion.div initial={{ x: '-10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className='md:text-2xl sm:text-lg text-slate-500 font-semibold'>LET'S BEGIN A NEW JOURNEY</motion.div>
        <motion.div initial={{ x: '100vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className='xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold'>CREATE AN ACCOUNT</motion.div>
        <motion.div initial={{ x: '-10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className='md:text-2xl sm:text-lg text-slate-500 font-semibold'>AND START SEARCHING FOR GOOD TEAMS AND TEAMMATES.</motion.div>
    </div>
    <div className='xl:pl-52 xl:pr-52 lg:pl-36 lg:pr-36 md:pl-24 md:pr-24 sm:pl-12 sm:pr-12 pl-4 pr-4 pt-6 pb-6 flex w-full flex-row'>
    <div className='md:w-2/3 w-full border-2 border-cyan-800 p-3'> 
    <div className='w-full pb-3'>
      <MdLogin className='w-full h-44'/>
    </div>
    <form onSubmit={handleClick} method="POST">  
    <div className='flex sm:flex-row flex-col'>
        <div className='flex flex-col justify-center w-1/4 mr-1'>
          <div className=''>NAME</div>
        </div>
          <div className='flex flex-row sm:w-3/4 w-full sm:mt-0 mt-1'>
            <input type="text" ref={username} required className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center w-1/4 mr-1'>
          <div className=''>EMAIL</div>
        </div>
          <div className='flex flex-row sm:w-3/4 w-full sm:mt-0 mt-1'>
            <input type="email" ref={email} required className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center w-1/4 mr-1'>
          <div className=''>PASSWORD</div>
        </div>
          <div className='flex flex-row sm:w-3/4 sm:mt-0 mt-1 w-full'>
            <input type="password" ref={password} required className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center sm:w-1/4 w-full mr-1'>
          <div className=''>CONFIRM PASSWORD</div>
        </div>
          <div className='flex flex-row sm:w-3/4 w-full sm:mt-0 mt-1'>
            <input type="password" ref={cpassword} required className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='w-full mt-6 flex flex-row justify-center'>
       <button type='submit' className='text-lg pt-2 w-1/2 rounded pb-2  border-white bg-gradient-to-r from-sky-600 to-sky-400 text-white'>REGISTER</button>
       </div>
       </form>
       </div>
       </div>   
    </motion.div>
  )
}

export default Register