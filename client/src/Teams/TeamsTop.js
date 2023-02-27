import React , {useRef} from 'react'
import { motion } from "framer-motion"
import { FiSearch } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import {changeSearchTeam} from "../actions/index"

function TeamsTop() {

  const search = useRef();

  const dispatch = useDispatch();

  const teamSearch = () => {
    dispatch(changeSearchTeam(search.current.value.toUpperCase()));
  }
  const mySearch=useSelector((state)=>
  state.changeSearchPlayer
  );

  console.log(mySearch)
  
  const search1 = useRef();

  const teamSearch1 = () => {
    dispatch(changeSearchTeam(search1.current.value.toUpperCase()));
  }


  return (
    <div>
    <div className='md:h-44 h-32 w-full bg-gray-300 sm:flex hidden flex-row bg-opacity-25 xl:pl-32 lg:pl-24 sm:pl-12 xl:pr-32 lg:pr-24 sm:pr-12 pl-4 pr-4 bg-no-repeat bg-cover'>
    <div className='w-1/2 flex flex-col justify-center ' >
        <motion.div initial={{ x: '-10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className='md:text-2xl sm:text-lg text-slate-500 font-semibold'>SEARCH AND APPLY TO JOIN</motion.div>
        <motion.div initial={{ x: '100vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className='xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold'>TEAMS</motion.div>
        <motion.div initial={{ x: '-10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className='md:text-2xl sm:text-lg text-slate-500 font-semibold'>THAT YOU FIND SUITABLE</motion.div>
    </div> 
    <div className='flex w-1/2 flex-col justify-center'>
    <div className='flex flex-row justify-end p-2 sm:pr-4 pr-1 sm:pl-3 pl-1'>
            <input ref={search} type="text" placeholder='Search for a team' className="bg-slate-50 text-slate-800 border-b-2 border-l-2 border-t-2 border-slate-500 pt-1 pb-1 pl-2 pr-2 h-13"/>
            <div className='pr-2 border-b-2 border-r-2 border-t-2 border-slate-500 pt-2 pb-2 rounded-r bg-slate-50'>
            <FiSearch className='w-8 rounded text-white bg-purple-700 cursor-pointer p-1 h-8' onClick={teamSearch}/>
            </div>
      </div>
    </div>
    </div>
    <div className='sm:hidden bg-gray-100 pl-4 pr-4 h-44 flex flex-col justify-center'>
    <div className='sm:w-1/2 w-full flex flex-col justify-center ' >
        <motion.div initial={{ x: '-10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className='md:text-2xl sm:text-lg text-slate-500 font-semibold'>SEARCH AND APPLY TO JOIN</motion.div>
        <motion.div initial={{ x: '100vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className='xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold'>TEAMS</motion.div>
        <motion.div initial={{ x: '-10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className='md:text-2xl sm:text-lg text-slate-500 font-semibold'>THAT YOU FIND SUITABLE</motion.div>
    </div> 
    <div className='flex sm:w-1/2 sm:mt-0 mt-3 w-full flex-col justify-center'>
    <div className='flex flex-row sm:justify-end sm:p-2 sm:pr-4 pr-1 sm:pl-3'>
        <input ref={search1} type="text" placeholder='Search for a team' className="bg-slate-50 w-full text-slate-800 border-b-2 border-l-2 border-t-2 border-slate-500 pt-1 pb-1 pl-2 pr-2 h-13"/>
            <div className='pr-2 border-b-2 border-r-2 border-t-2 border-slate-500 pt-2 pb-2 rounded-r bg-slate-50'>
            <FiSearch className='w-8 rounded text-white bg-purple-700 cursor-pointer p-1 h-8' onClick={teamSearch1}/>
            </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default TeamsTop