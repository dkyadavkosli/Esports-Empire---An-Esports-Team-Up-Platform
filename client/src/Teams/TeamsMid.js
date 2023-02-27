import React, { useState , useEffect } from 'react'
import {MdOutlineArrowDropDown} from "react-icons/md"
import TeamCard from '../components/TeamCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchPlayer , changeSearchTeam} from "../actions/index"

function PlayersMid() {

  const myResume=useSelector((state)=>
  state.changeCurrResume
  );

  const mySearch=useSelector((state)=>
  state.changeSearchTeam
  );

  const myGame=useSelector((state)=>
  state.changeGame
  );
 
  const history = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    if(!myResume){
      history("/home")
    }
  })

  const [teams , setTeams] = useState([])
 
  const [game1 , setGame1] = useState(0)

  const [game , setGame] = useState("")

  const getGame1 = () => {
    if(game1 === 0){
        setGame1(1)
    }else{
        setGame1(0)
    }
  }  

  const [role1 , setRole1] = useState(0)

  const [role , setRole] = useState("")

  const getRole1 = () => {
    if(role1 === 0){
        setRole1(1)
    }else{
        setRole1(0)
    }
  }

  const fetchTeams = async () => {
    try{
    const res = await axios.get("api/team/all/"+myGame);
    setTeams(res.data)
    }catch(e){
      console.log(e)
    }
  };

  const fetchSearch = async () => {
    try{
    if(mySearch!==null){  
    const res = await axios.get("api/team/search/"+mySearch);
    setTeams(res.data)
    }
    }catch(e){
      console.log(e)
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [mySearch])

  useEffect(() => {
    fetchTeams();
    dispatch(changeSearchPlayer(null));
    dispatch(changeSearchTeam(null));
  }, [])


  const fetchSearchTeams = async () => {
    try{
    const Game = document.getElementById("Game").value
    const Role = document.getElementById("Role").value
    const res = await axios.get("api/team/find/"+Game+"/"+Role);
    setTeams(res.data)
    }catch(e){
      console.log(e)
    }
  };
  


  return (
    <div className='w-full xl:pl-32 lg:pl-24 sm:pl-12 lg:pr-32 xl:pr-32 sm:pr-12 pl-3 pr-3 pb-8'>
        <div className='w-full flex sm:flex-row flex-col'>
       <div className='sm:w-5/12 w-full mr-5'>     
       <div className='flex flex-row mt-7 w-full'>
       <div className='flex flex-col justify-center w-1/4'>
          <div className='font-semibold'>GAME</div>
        </div>
          <div className='flex flex-row w-3/4 pr-1'>
            <input value={game} id="Game" onChange={()=>{console.log("Hi")}} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
            <button>
            <MdOutlineArrowDropDown onClick={getGame1} className='bg-slate-200 p-2 h-8 w-8'/>
            </button>
          </div>
       </div>
       <div className={`flex ${game1 === 0 ? "hidden" : ""} pr-1 mr-3 w-full flex-row`}>
            <div className='w-1/4'></div>
            <div className='w-3/4 border-2 border-cyan-900 pl-1 pt-1 pb-1'>
                <div>
                <button onClick={()=>setGame("BATTLEGROUNDS MOBILE INDIA")} className='text-sm'>BGMI</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setGame("VALORANT")} className='text-sm'>VALORANT</button>
                </div>
            </div>
        </div>
        </div>

        <div className='sm:w-5/12 w-full mr-5 sm:ml-6'>     
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

        <div className='pt-6 sm:w-1/6 w-full flex flex-row h-16 justify-center'>
        <button onClick={fetchSearchTeams} className='sm:pl-3 sm:pr-3 pl-16 pr-16 pt-2 text-sm rounded pb-2 border-2 border-white bg-gradient-to-r from-sky-600 to-sky-400 text-white'>SEARCH</button>
        </div>

        </div>

        <div className={` ${teams.length===0?"hidden":""} grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-2 pt-4 items-baseline`}>
            {teams.map((elem)=>{
              return(
               <TeamCard key={elem?._id} logo={elem?.logo} team_id={elem?._id} name={elem?.name} country={elem?.country} game={elem?.game} role={elem?.role_required}/>
              )
            })}
        </div>

        <div className={`mt-8 flex flex-row justify-center w-full ${teams.length!==0?"hidden":""}`}>
            <div className='font-semibold'>NO TEAMS FOUND</div>
        </div>

    </div>
  )
}

export default PlayersMid