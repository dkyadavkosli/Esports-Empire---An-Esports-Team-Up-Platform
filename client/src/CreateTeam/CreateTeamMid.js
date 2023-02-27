import React, { useState , useRef , useEffect } from 'react'
import {MdOutlineArrowDropDown} from "react-icons/md"
import axios from 'axios'
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"

function CreateTeamMid() {
  const myResume=useSelector((state)=>
  state.changeCurrResume
  );

  const [resume , setResume] = useState()
 
  const history = useNavigate()

  const [myTeam , setMyTeam] = useState()

  const [game1 , setGame1] = useState(0)

  const [game , setGame] = useState(myTeam?.game)

  const getGame1 = () => {
    if(game1 === 0){
        setGame1(1)
    }else{
        setGame1(0)
    }
  }

  const Team=useSelector((state)=>
  state.changeCurrTeam
);

const fetchTeam = async () => {
  try{
  if(Team!==null && Team){
  const res = await axios.get("api/team/"+Team);
  setMyTeam(res.data)
  }
  }catch(e){
    console.log(e)
  }
};


useEffect(() => {
  fetchTeam();
}, [])


  const [role1 , setRole1] = useState(0)

  const [role , setRole] = useState(myTeam?.role_required)

  const getRole1 = () => {
    if(role1 === 0){
        setRole1(1)
    }else{
        setRole1(0)
    }
  }

  const [recruit1 , setRecruit1] = useState(0)

  const [recruit , setRecruit] = useState(myTeam?.recruiting)

  const getRecruit1 = () => {
    if(recruit1 === 0){
        setRecruit1(1)
    }else{
        setRecruit1(0)
    }
  }


  const fetchResume = async () => {
    try{
    const res = await axios.get("api/resume/id/"+myResume);
    setResume(res.data)
    }catch(e){
      console.log(e)
    }
  };

  useEffect(() => {
    fetchResume();
  },[])



  const Game = useRef();
  const team_name = useRef();
  const logo = useRef();
  const Role = useRef();
  const Recruiting = useRef();
  const country = useRef();
  const discord = useRef();
  const password = useRef();
  const desc = useRef();
  const insta = useRef();
  const facebook = useRef();


  
  const handleClick = async (e) => {
    e.preventDefault();
      const team = {
        name: team_name.current.value.toUpperCase(),
        captain_id: resume?._id,
        captain_email: resume?.email,
        captain_name: resume?.username,
        captain_phone: resume?.phone,
        game: Game.current.value,
        role_required: Role.current.value,
        logo: logo.current.value,
        recruiting: Recruiting.current.value,
        country: country.current.value,
        desc: desc.current.value,
        instagram: insta.current.value,
        facebook: facebook.current.value,
        discord_channel: discord.current.value,
        password: password.current.value
      };
      try {
        await axios.post("/api/team/create", team);
      } catch (err) {
        console.log(err)
        window.alert("Something went wrong. Try rechecking whether you have filled all details")
      }
      const resumeNow = {
        team :team_name.current.value,
      }
      try{
      await axios.put("/api/resume/id/"+myResume, resumeNow);
      history("/home");
      }catch(e){
        console.log(e)
      }
  };


  const handleUpdate = async (e) => {
    e.preventDefault();
      const team = {
        name: team_name.current.value.toUpperCase(),
        captain_id:myTeam?.captain_id,
        captain_email: myTeam?.captain_email,
        captain_name: myTeam?.captain_name,
        captain_phone: myTeam?.captain_phone,
        game: Game.current.value,
        role_required: Role.current.value,
        logo: logo.current.value,
        recruiting: Recruiting.current.value,
        country: country.current.value,
        desc: desc.current.value,
        instagram: insta.current.value,
        facebook: facebook.current.value,
        discord_channel: discord.current.value,
        password: password.current.value 
      };
      try {
        await axios.put("/api/team/"+myTeam?._id , team);
        history("/home");
      } catch (err) {
        console.log(err)
        window.alert("Something went wrong. Try rechecking whether you have filled all details")
      }
  };


  return (
    <div className='sm:pt-8 pt-4 xl:pl-52 xl:pr-52 lg:pl-24 lg:pr-24 sm:pl-12 sm:pr-12 pl-3 pr-3 sm:pb-10 pb-5'>
      <div>
       <div>
       <div className='sm:text-2xl text-xl font-semibold'>BASIC INFORMATION</div>
       <div className='flex sm:flex-row flex-col sm:mt-7 mt-5'>
          <div className='flex flex-col justify-center mr-1 md:w-1/4 sm:w-1/3 w-ful'>
          <div className=''>GAME</div>
          </div>
          <div className='flex flex-row md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input onChange={()=>{console.log("Hi")}} ref={Game} defaultValue={game} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
            <MdOutlineArrowDropDown onClick={getGame1} className='bg-slate-200 cursor-pointer p-2 h-8 w-8'/>
          </div>
       </div>
       <div className={`flex ${game1 === 0 ? "hidden" : ""} z-20 flex-row`}>
            <div className='md:w-1/4 sm:w-1/3 sm:block hidden mr-1'></div>
            <div className='md:w-5/12 sm:w-2/3 w-full border-2 border-cyan-900 sm:pl-2 pl-1 pt-1 pb-1'>
                <div>
                <button onClick={()=>setGame("BATTLEGROUNDS MOBILE INDIA")} className=''>BATTLEGROUNDS MOBILE INDIA</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setGame("VALORANT")} className=''>VALORANT</button>
                </div>
            </div>
        </div>
        <div className='flex sm:flex-row flex-col mt-6 '>
          <div className='flex flex-col justify-center md:w-1/4 sm:w-1/3 w-ful mr-1'>
          <div className=''>TEAM NAME</div>
          </div>
          <div className='flex flex-row md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" defaultValue={myTeam?.name} ref={team_name} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
        <div className='flex flex-col justify-center md:w-1/4 sm:w-1/3 w-ful mr-1'>
          <div className=''>LOGO</div>
        </div>
          <div className='flex flex-row md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" defaultValue={myTeam?.logo} ref={logo} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-7'>
        <div className='flex flex-col justify-center md:w-1/4 sm:w-1/3 w-ful mr-1'>
          <div className=''>RECRUITING PLAYERS</div>
        </div>
          <div className='flex flex-row md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input onChange={()=>{console.log("Hi")}} ref={Recruiting} defaultValue={recruit} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
            <MdOutlineArrowDropDown onClick={getRecruit1} onChange={()=>{console.log("Hi")}} className='bg-slate-200 cursor-pointer p-2 h-8 w-8'/>
          </div>
       </div>
       <div className={`flex ${recruit1 === 0 ? "hidden" : ""} z-20 flex-row`}>
            <div className='md:w-1/4 sm:w-1/3 sm:block hidden mr-1'></div>
            <div className='md:w-5/12 sm:w-2/3 w-full border-2 border-cyan-900 pl-2 pt-1 pb-1'>
                <div>
                <button onClick={()=>setRecruit("YES")} className=''>YES</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setRecruit("NO")} className=''>NO</button>
                </div>
            </div>
        </div>

        <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center md:w-1/4 sm:w-1/3 w-ful mr-1'>
          <div className=''>ROLE REQUIRED</div>
        </div>
          <div className='flex flex-row md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" ref={Role} onChange={()=>{console.log("Hi")}} defaultValue={role} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
            <MdOutlineArrowDropDown onClick={getRole1} className='bg-slate-200 cursor-pointer p-2 h-8 w-8'/>
          </div>
       </div>
       <div className={`flex ${role1 === 0 ? "hidden" : ""} flex-row`}>
            <div className='md:w-1/4 sm:w-1/3 sm:block hidden mr-1'></div>
            <div className='md:w-5/12 sm:w-2/3 w-full border-2 border-cyan-900 pl-2 pt-1 pb-1'>
                <div>
                <button onClick={()=>setRole("IN-GAME LEADER")} className=''>IN-GAME LEADER</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setRole("ASSAULTER")} className=''>ASSAULTER</button>
                </div>
                <div>
                <button onClick={()=>setRole("ENTRY FRAGGER")} className=''>ENTRY FRAGGER</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setRole("SUPPORTER")} className=''>SUPPORTER</button>
                </div>
            </div>
        </div>
       
       </div>


   
   <div className='sm:mt-12 mt-8'>
    <div className='sm:text-2xl text-xl font-semibold'>DESCRIPTION</div>
    <div className=' text-slate-400 mt-2 font-semibold'>A NICE AND COMPLETE DESCRIPTION WILL INCREASE THE CHANCES OF POTENTIAL PLAYERS GETTING ATTRACTED TOWARDS YOUR TEAM.</div>
    <div className='mt-3 text-sm font-semibold'>TELL THE  PLAYERS ABOUT THE COMPETITIVE HISTORY OF THE TEAM AND THE FACILITIES PROVIDED TO THE PLAYERS. ALSO MENTION THE ACHIEVEMENTS OF THE TEAM TILL NOW IN THE FIELD OF ESPORTS AND WHAT ARE THE FUTURE PLANS.</div>
    <div className='mt-4'>
        <textarea className='w-full p-1 border-2 border-cyan-800' defaultValue={myTeam?.desc} ref={desc} rows={15} ></textarea>
    </div>
   </div>


   <div className='sm:mt-10 mt-7'>
       <div className='sm:text-2xl text-xl font-semibold'>TEAM SOCIALS</div>
        <div className='flex sm:flex-row flex-col mt-6 '>
          <div className='flex flex-col justify-center sm:w-1/3 w-full mr-1'>
          <div className=''>INSTAGRAM</div>
          </div>
          <div className='flex flex-row md:w-6/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" defaultValue={myTeam?.instagram} ref={insta} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center sm:w-1/3 w-full mr-1'>
          <div className=''>FACEBOOK</div>
          </div>
          <div className='flex flex-row md:w-6/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" defaultValue={myTeam?.facebook} ref={facebook} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center sm:w-1/3 w-full mr-1'>
          <div className=''>DISCORD CHANNEL</div>
        </div>
          <div className='flex flex-row md:w-6/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" defaultValue={myTeam?.discord_channel} ref={discord} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center sm:w-1/3 w-full mr-1'>
          <div className=''>COUNTRY</div>
        </div>
          <div className='flex flex-row md:w-6/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" defaultValue={myTeam?.country} ref={country} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center sm:w-1/3 w-full mr-1'>
          <div className=''>JOINING PASSWORD</div>
        </div>
          <div className='flex flex-row md:w-6/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" ref={password} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
    </div>


    <div className={`md:mt-16 ${myTeam?._id ? "hidden":""} sm:mt-12 mt-8 flex flex-row justify-center`}>
        <div className='bg-gradient-to-r from-sky-700 to-sky-500 pt-3 pb-3 text-white w-1/2 shadow-lg rounded flex flex-row justify-center'>
        <button type='submit' className='' onClick={handleClick}>CREATE</button>
        </div>
    </div>
    <div className={`md:mt-16 ${!myTeam?._id ? "hidden":""} sm:mt-12 mt-8 flex flex-row justify-center`}>
        <div className='bg-gradient-to-r from-sky-700 to-sky-500 pt-3 pb-3 text-white w-1/2 shadow-lg rounded flex flex-row justify-center'>
        <button type='submit' className='' onClick={handleUpdate}>UPDATE</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default CreateTeamMid