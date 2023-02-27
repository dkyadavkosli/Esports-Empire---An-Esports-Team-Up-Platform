import React, { useState , useEffect } from 'react'
import {MdOutlineArrowDropDown} from "react-icons/md"
import PlayerCard from '../components/PlayerCard'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {changeSearchPlayer , changeSearchTeam} from "../actions/index"

function PlayersMid() {
  const myResume=useSelector((state)=>
  state.changeCurrResume
  );

  const dispatch = useDispatch();

  const mySearch=useSelector((state)=>
  state.changeSearchPlayer
  );

  const myGame=useSelector((state)=>
  state.changeGame
  );
 
  const history = useNavigate()

  useEffect(()=>{
    if(!myGame){
      history("/home")
    }
  })

  const [players , setPlayers] = useState([])

  const [role1 , setRole1] = useState(0)

  const [role , setRole] = useState("")

  const getRole1 = () => {
    if(role1 === 0){
        setRole1(1)
    }else{
        setRole1(0)
    }
  }

  const [tier1 , setTier1] = useState(0)

  const [tier , setTier] = useState("")

  const getTier1 = () => {
    if(tier1 === 0){
        setTier1(1)
    }else{
        setTier1(0)
    }
  }

  const fetchPlayers = async () => {
    try{
    const res = await axios.get("api/resume/all/"+myGame);
    setPlayers(res.data)
    }catch(e){
      console.log(e)
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, [])

  console.log(mySearch)

  const fetchSearch = async () => {
    try{
    if(mySearch!==null){  
    const res = await axios.get("api/resume/search/"+mySearch);
    setPlayers(res.data)
    }
    }catch(e){
      console.log(e)
    }
  };

  useEffect(() => {
    fetchSearch();
    dispatch(changeSearchPlayer(null));
    dispatch(changeSearchTeam(null));
  }, [mySearch])

  const fetchSearchPlayers = async () => {
    try{
    const Role = document.getElementById("Role").value
    const Tier = document.getElementById("Tier").value
    const res = await axios.get("api/resume/find/"+Role+"/"+Tier+"/"+myGame);
    setPlayers(res.data)
    }catch(e){
      console.log(e)
    }
  };


  return (
    <div className='w-full xl:pl-32 z-20 lg:pl-24 sm:pl-12 lg:pr-32 xl:pr-32 sm:pr-12 pl-3 pr-3 pb-8'>
        <div className='w-full flex sm:flex-row flex-col'>
        <div className='sm:w-5/12 w-full mr-5'>     
       <div className='flex flex-row mt-7 w-full'>
       <div className='flex flex-col justify-center w-1/4'>
          <div className='font-semibold'>ROLE</div>
        </div>
          <div className='flex flex-row w-3/4 pr-1'>
            <input value={role} onChange={()=>{console.log("Hi")}} id="Role" className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
            <button>
            <MdOutlineArrowDropDown onClick={getRole1} className='bg-slate-200 p-2 h-8 w-8'/>
            </button>
          </div>
       </div>
       <div className={`flex ${role1 === 0 ? "hidden" : ""} pr-1 mr-3 w-full flex-row`}>
            <div className='w-1/4'></div>
            <div className='w-3/4  overflow-y-scroll max-h-16 border-2 border-cyan-900 pl-1 pt-1 pb-1'>
                <div>
                <button onClick={()=>setRole("IN-GAME LEADER")} className='text-sm'>IN-GAME LEADER</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setRole("ASSAULTER")} className='text-sm'>ASSAULTER</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setRole("ENTRY FRAGGER")} className='text-sm'>ENTRY FRAGGER</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setRole("SUPPORTER")} className='text-sm'>SUPPORTER</button>
                </div>
            </div>
        </div>
        </div>

        <div className='sm:w-5/12 w-full mr-5 sm:pl-5'>     
       <div className='flex flex-row mt-7 w-full'>
       <div className='flex flex-col justify-center w-1/4'>
          <div className='font-semibold'>TIER</div>
        </div>
          <div className='flex flex-row w-3/4 pr-1'>
            <input value={tier} onChange={()=>{console.log("Hi")}} id="Tier" className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
            <button>
            <MdOutlineArrowDropDown onClick={getTier1} className='bg-slate-200 p-2 h-8 w-8'/>
            </button>
          </div>
       </div>
       <div className={`flex ${tier1 === 0 ? "hidden" : ""} pr-1 mr-3 w-full flex-row`}>
            <div className='w-1/4'></div>
            <div className='w-3/4  overflow-y-scroll max-h-16 border-2 border-cyan-900 pl-1 pt-1 pb-1'>
                <div>
                <button onClick={()=>setTier("PLATINUM")} className='text-sm'>PLATINUM</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setTier("DIAMOND")} className='text-sm'>DIAMOND</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setTier("ACE")} className='text-sm'>ACE</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setTier("CONQUEROR")} className='text-sm'>CONQUEROR</button>
                </div>
            </div>
        </div>
        </div>

        <div className='pt-6 sm:w-1/6 w-full h-16 flex flex-row justify-center'>
        <button onClick={fetchSearchPlayers} className='sm:pl-3 sm:pr-3 pl-16 pr-16 pt-2 text-sm rounded pb-2 border-2 border-white bg-gradient-to-r from-sky-600 to-sky-400 text-white'>SEARCH</button>
        </div>

        </div>

        <div className={`grid xl:grid-cols-4 md:grid-cols-3 ${players.length===0?"hidden":""} sm:grid-cols-2 mt-2 pt-4 items-baseline`}>
            {players.map((elem)=>{
              return(
               <PlayerCard key={elem?._id} id={elem?._id} in_game_name={elem?.in_game_name} pic={elem?.profile_pic} userId={elem?.userId} username={elem?.username} age={elem?.age} game={elem?.game} tier={elem?.curr_tier}/>
              )
            })}
        </div>
        <div className={`mt-8 flex flex-row justify-center w-full ${players.length!==0?"hidden":""}`}>
            <div className='font-semibold'>NO PLAYERS FOUND</div>
        </div>

    </div>
  )
}

export default PlayersMid