import React , {useState , useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import { motion , AnimatePresence } from "framer-motion"

function ResumeTop() { 

    const [resume , setResume] = useState()
    const [team, setTeam] = useState();
    const [offers , setOffers] = useState()

    const history = useNavigate();

    const myResume=useSelector((state)=>
    state.changeCurrResume
  );

  const myUser=useSelector((state)=>
  state.changeUser
  );

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

  const fetchOffers = async () => {
    try{
    const res = await axios.get("api/offers/"+myResume+"/"+mainTeam);
    setOffers(res.data)
    }catch(e){
      console.log(e)
    }
  };

  useEffect(() => {
    fetchOffers();
  }, [])

  console.log(offers);

  const Kick = async () => {
    try {
          const resume = {
            team_id: "",
            team: "",
          };
            await axios.put("/api/resume/id/" + myResume, resume);
            history("/home")
            console.log("Kicked")
        } catch (e) {
          console.log(e);
        }
};

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
      }, [])

      
  const fetchTeam = async () => {
    try {
      const res = await axios.get("api/team/" + resume?.team_id);
      setTeam(res.data?.captain_id);
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(resume?.team_id)

      useEffect(() => {
        fetchTeam();
      }, [resume?.team_id])


      const handleClick = async (e) => {
        e.preventDefault();
          const offer = {
            player : resume?.username,
            player_id : resume?._id,
            team : teamName,
            team_id : mainTeam
          };
          try {
            await axios.post("/api/offers/create", offer);
            const res = await axios.delete("api/applications/"+resume?._id+"/"+mainTeam);
            const element = document.getElementById("invite");
            element.innerHTML = "Invited";
          } catch (err) {
            window.alert("An account with this Email already exists")
          }
      };

      console.log(team);
      console.log(resume?._id)

  return (
    <div className='md:h-44 h-36 w-full flex flex-row bg-gray-300 bg-opacity-25  xl:pl-32 lg:pl-24 sm:pl-12 pl-3 pr-3 bg-no-repeat bg-cover' >
      <div className='w-2/3 sm:mr-0 mr-3 flex flex-col justify-center'>
        <motion.div initial={{ x: '-10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className='md:text-2xl sm:text-lg text-slate-500 font-semibold mt-1'>{resume?.game}</motion.div>
        <motion.div initial={{ x: '100vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className='xl:text-5xl md:text-4xl sm:text-3xl text-xl font-semibold'>{((resume?.in_game_name)?.toUpperCase())?.slice(0,11)}</motion.div>
        <motion.div initial={{ x: '-10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className='md:text-2xl sm:text-lg text-slate-500 font-semibold wq:mt-1'>{(resume?.username)?.toUpperCase()} | {resume?.age} YEARS OLD</motion.div>
      </div>
      <Link className={`flex flex-col ${myUser?._id !== resume?.userId ? "hidden":""} justify-center`} to="/createResume">
      <button className='sm:text-lg text-sm w-full pt-2 rounded pb-2 sm:pl-3 sm:pr-3 pl-2 pr-2 border-2 border-white bg-gradient-to-r from-emerald-700 to-emerald-500 text-white'>UPDATE RESUME</button>
      </Link>
      <div id="invite" className={`flex ${mainUser===captain ? "" : "hidden"} ${mainTeam === resume?.team_id ? "hidden" : ""} flex-col ${myUser?._id === resume?.userId ? "hidden":""} ${offers?.length === 0?"":"hidden"} ${team===resume?._id?"hidden":""} $ justify-center`}>
      <button className='sm:text-lg text-sm w-full pt-2 rounded pb-2 sm:pl-3 sm:pr-3 pl-2 pr-2 border-2 border-white bg-gradient-to-r from-emerald-700 to-emerald-500 text-white' onClick={handleClick}>INVITE</button>
      </div>
      <div className={`flex ${mainUser===captain ? "" : "hidden"} ${mainTeam === resume?.team_id ? "hidden" : ""} flex-col ${myUser?._id === resume?.userId ? "hidden":""} ${offers?.length !== 0?"":"hidden"} $ justify-center`}>
      <div className='sm:text-lg text-sm w-full pt-2 rounded pb-2 sm:pl-3 sm:pr-3 pl-2 pr-2 border-2 border-white bg-gradient-to-r from-purple-700 to-purple-500 text-white'>INVITED</div>
      </div>
      <div className={`flex ${mainUser===captain ? "" : "hidden"} ${mainTeam !== resume?.team_id ? "hidden":""} flex-col ${myUser?._id === resume?.userId ? "hidden":""} justify-center`}>
      <button className='sm:text-lg text-sm w-full pt-2 rounded pb-2 sm:pl-3 sm:pr-3 pl-2 pr-2 border-2 border-white bg-gradient-to-r from-emerald-700 to-emerald-500 text-white' onClick={Kick}>KICK</button>
      </div>
    </div>
  )
}
 
export default ResumeTop