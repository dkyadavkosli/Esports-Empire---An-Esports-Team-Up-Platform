import React , {useRef} from 'react'
import { motion } from "framer-motion"
import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import {changeSearchPlayer} from "../actions/index"


function PlayersTop() {

  const search = useRef();

  const dispatch = useDispatch();

  const playerSearch = () => {
    dispatch(changeSearchPlayer(search.current.value.toUpperCase()));
  }
  
  const search1 = useRef();

  const playerSearch1 = () => {
    dispatch(changeSearchPlayer(search1.current.value.toUpperCase()));
  }



  return (
    <div>
    <div className='md:h-44 h-32 w-full bg-gray-300 sm:flex hidden sm:flex-row flex-col bg-opacity-25 xl:pl-32 lg:pl-24 sm:pl-12 xl:pr-32 lg:pr-24 sm:pr-12 pl-4 pr-4 bg-no-repeat bg-cover'>
    <div className='sm:w-1/2 w-full flex flex-col justify-center ' >
    <motion.div initial={{ x: '-10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className='md:text-2xl sm:text-lg text-slate-500 font-semibold'>SEARCH , CONTACT AND RECRUIT</motion.div>
        <motion.div initial={{ x: '100vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className='xl:text-5xl md:text-4xl sm:text-3xl text-2xl  font-semibold'>PLAYERS</motion.div>
        <motion.div initial={{ x: '-10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className='md:text-2xl sm:text-lg text-slate-500 font-semibold'>FOR YOUR TEAM</motion.div>
    </div> 
    <div className='flex sm:w-1/2 w-full flex-col justify-center'>
    <div className='flex flex-row sm:justify-end p-2 sm:pr-4 pr-1 sm:pl-3 pl-1'>
            <input type="text" ref={search} placeholder='Search for a player' className="bg-slate-50 text-slate-800 border-b-2 border-l-2 border-t-2 border-slate-500 pt-1 pb-1 pl-2 pr-2 h-13"/>
            <div className='pr-2 border-b-2 border-r-2 border-t-2 border-slate-500 pt-2 pb-2 rounded-r bg-slate-50'>
            <FiSearch className='w-8 rounded text-white bg-purple-700 cursor-pointer p-1 h-8' onClick={playerSearch}/>
            </div>
      </div>
    </div>

    </div>
    <div className='sm:hidden bg-gray-100 pl-4 pr-4 h-44 flex flex-col justify-center'>
    <div className='sm:w-1/2 w-full flex flex-col justify-center ' >
    <motion.div initial={{ x: '-10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className='md:text-2xl sm:text-lg text-slate-500 font-semibold'>SEARCH , CONTACT AND RECRUIT</motion.div>
        <motion.div initial={{ x: '100vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className='xl:text-5xl md:text-4xl sm:text-3xl text-2xl  font-semibold'>PLAYERS</motion.div>
        <motion.div initial={{ x: '-10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className='md:text-2xl sm:text-lg text-slate-500 font-semibold'>FOR YOUR TEAM</motion.div>
    </div> 
    <div className='flex sm:w-1/2 sm:mt-0 mt-3 w-full flex-col justify-center'>
    <div className='flex flex-row sm:justify-end sm:p-2 sm:pr-4 pr-1 sm:pl-3'>
            <input ref={search1} type="text" placeholder='Search for a player' className="bg-slate-50 text-slate-800 border-b-2 border-l-2 border-t-2 border-slate-500 w-full  pt-1 pb-1 pl-2 pr-2 h-13"/>
            <div className='pr-2 border-b-2 border-r-2 border-t-2 border-slate-500 pt-2 pb-2 rounded-r bg-slate-50'>
            <FiSearch className='w-8 rounded text-white bg-purple-700 cursor-pointer p-1 h-8' onClick={playerSearch1}/>
            </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default PlayersTop