import React , {useState , useEffect} from 'react'
import player from "../assets/ResumeImage.png"
import PlayerCard from '../components/PlayerCard'
import axios from "axios"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TeamOffer from './TeamOffer';

function TeamInfoMid() {

    const myResume=useSelector((state)=>
    state.changeCurrResume
    );

    const captain=useSelector((state)=>
    state.changeCaptain
    );

    const mainUser=useSelector((state)=>
    state.changeMainUser
    );

    const [offers , setOffers] = useState()
   
    const history = useNavigate()
  
    useEffect(()=>{
      if(!myResume){
        history("/")
      }
    })

    const [team , setTeam] = useState()
    const [players , setPlayers] = useState([])

    const myTeam=useSelector((state)=> 
    state.changeCurrTeam
    );

    const fetchTeam = async () => {
        try{
        const res = await axios.get("api/team/"+myTeam);
        setTeam(res.data)
        }catch(e){
          console.log(e)
        }
      };

      const fetchPlayers = async () => {
        try{
        const res = await axios.get("api/resume/team/"+team?._id);
        setPlayers(res.data)
        }catch(e){
          console.log(e)
        }
      };

      const fetchOffers = async () => {
        try{
        const res = await axios.get("api/applications/"+myTeam);
        setOffers(res.data)
        }catch(e){
          console.log(e)
        }
      };

      console.log(myTeam)
    
      useEffect(() => {
        fetchTeam();
        fetchPlayers();
        fetchOffers();
      }, [team?._id])


  return (
    <div className=' xl:pl-32 lg:pl-24 sm:pl-12 lg:pr-32 xl:pr-32 sm:pr-12  pl-4 pr-4 pt-8 pb-10 '>
    <div className='flex lg:flex-row flex-col'>
     <div>   
     <div className='lg:block sm:hidden w-full'>
        <img src={team?.logo !== "" ? team?.logo : player} className="lg:w-64 w-full border border-gray-600 h-72"/>  
        <div className='text-lg text-slate-600 font-semibold lg:w-64 w-full pt-6 pb-6 flex flex-row justify-center border border-gray-600'>{((team?.name)?.toUpperCase())?.slice(0,14)}</div>   
        <div className='text-lg text-slate-600 font-semibold lg:w-64 w-full pt-6 pb-6 flex flex-row justify-center border border-gray-600'>{((team?.country)?.toUpperCase())?.slice(0,14)}</div>   
     </div>
     <div className='w-full lg:hidden hidden sm:flex flex-row'>
        <img src={team?.logo !== "" ? team?.logo : player} className="w-1/2 border border-gray-600 h-48"/>  
        <div className='w-1/2'>
        <div className='sm:text-lg text-sm text-slate-600 font-semibold w-full h-24 pt-8 pb-8 flex flex-row justify-center border border-gray-600'>{((team?.name)?.toUpperCase())?.slice(0,14)}</div>   
        <div className='sm:text-lg text-sm text-slate-600 font-semibold w-full pt-8 h-24 pb-8 flex flex-row justify-center border border-gray-600'>{((team?.country)?.toUpperCase())?.slice(0,14)}</div>  
        </div> 
     </div>
     </div>

     <div className='lg:pl-16 lg:mt-0 mt-10 w-full'>
        <div className='flex sm:flex-row flex-col w-full'>
            <div className="sm:w-1/2 w-full">
                <div className='md:text-2xl text-xl font-semibold'>TEAM CAPTAIN</div>
                <div className='text-slate-500 mt-1'>{(team?.captain_name)?.toUpperCase()}</div>
            </div>
            <div className="sm:w-1/2 w-full sm:mt-0 mt-10">
                <div className='md:text-2xl text-xl font-semibold'>CAPTAIN'S PHONE NO.</div>
                <div className='text-slate-500 mt-1'>{team?.captain_phone}</div>
            </div>
        </div>
        <div className='flex sm:flex-row flex-col w-full sm:mt-10'>
            <div className="sm:w-1/2 sm:mt-0 mt-10 w-full">
                <div className='md:text-2xl text-xl font-semibold'>CAPTAIN'S EMAIL</div>
                <div className='text-slate-500 mt-1'>{team?.captain_email}</div>
            </div>
            <div className="sm:w-1/2 sm:mt-0 mt-10 w-full">
                <div className='md:text-2xl text-xl font-semibold'>RECRUITING PLAYERS</div>
                <div className='text-slate-500 mt-1'>{(team?.recruiting)?.toUpperCase()}</div>
            </div>
        </div>
        <div className='mt-10'>
            <div className='md:text-2xl text-xl font-semibold'>DESCRIPTION</div>
            <div className='text-slate-500 mt-1'>{(team?.desc)?.toUpperCase()} </div>
        </div>
        <div className='flex sm:flex-row flex-col w-full sm:mt-10'>
            <div className="sm:w-1/2 sm:mt-0 mt-10 w-full">
                <div className='md:text-2xl text-xl font-semibold'>INSTAGRAM</div>
                <div className='text-slate-500 mt-1'>{team?.instagram}</div>
            </div>
            <div className="sm:w-1/2 sm:mt-0 mt-10 w-full">
                <div className='text-2xl font-semibold'>FACEBOOK</div>
                <div className='text-slate-500 mt-1'>{team?.facebook}</div>
            </div>
        </div>
        <div className='flex sm:flex-row flex-col w-full sm:mt-10'>
            <div className="sm:w-1/2 sm:mt-0 mt-10 w-full">
                <div className='md:text-2xl text-xl font-semibold'>DISCORD CHANNEL</div>
                <div className='text-slate-500 mt-1'>{team?.discord_channel}</div>
            </div>
            <div className="sm:w-1/2 sm:mt-0 mt-10 w-full">
                <div className='md:text-2xl text-xl font-semibold'>COUNTRY</div>
                <div className='text-slate-500 mt-1'>{team?.country}</div>
            </div>
        </div>
     </div>
     </div>
     <div className={`mt-10 ${mainUser===team?.captain_id ? "" : "hidden"}`}>
        <div className='text-slate-500 '>EVERY GOOD TEAM ALWAYS KEEPS SEARCHING FOR NEW AND BETTER ADDITIONS.
        THERE ARE SOME PLAYERS WHO FOUND YOUR TEAM PERFECT FOR THEM AND WANNA JOIN YOU. LET'S SEE WHO DESERVES TO BE HERE.
        </div>
        <div className='md:text-2xl text-xl mt-2 font-semibold'>APPLICATIONS</div>
        <div className={`h-64 overflow-y-scroll ${offers?.length === 0 ? "hidden":""} pl-1 pr-1 no-scrollbar border-2 border-slate-500 mt-2 w-full`}>
        {offers?.map((elem)=>{
              return(
               <TeamOffer key={elem?._id} id={elem?._id} player={elem?.player} player_id={elem?.player_id}/>
              )
            })} 
        </div>
        <div className={`h-64 overflow-y-scroll ${offers?.length !== 0 ? "hidden":""} pl-1 pr-1 no-scrollbar border-2 border-slate-500 mt-2 w-full`}>
        <div className='font-semibold mt-1'>YOUR TEAM HAS NO APPLICATIONS.</div>
        </div>
    </div>
     <div className='text-2xl mt-8 font-semibold'>PLAYERS</div>
     <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 items-baseline'>
     {players?.map((elem)=>{
              return(
               <PlayerCard key={elem?._id} id={elem?._id} in_game_name={elem?.in_game_name} pic={elem?.profile_pic} userId={elem?.userId} username={elem?.username} age={elem?.age} game={elem?.game} tier={elem?.curr_tier}/>
              )
            })}
        </div>
    </div>
  )
}

export default TeamInfoMid