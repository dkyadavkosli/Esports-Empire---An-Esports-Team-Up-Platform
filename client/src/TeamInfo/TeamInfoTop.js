import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import { motion } from "framer-motion"

function TeamInfoTop() {

  const [team, setTeam] = useState();

  const history = useNavigate();

  const myTeam = useSelector((state) => state.changeCurrTeam);

  const myResume = useSelector((state) => state.changeCurrResume);

  const fetchTeam = async () => {
    try {
      const res = await axios.get("api/team/" + myTeam);
      setTeam(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);
  
  const [resume , setResume] = useState()

  const fetchResume = async () => {
    if(myResume !== null){
      try{
      const res = await axios.get("api/resume/id/"+myResume);
      setResume(res.data)
      }catch(e){
        console.log(e)
      }
    }
    };

    const [offers , setOffers] = useState()
    
  const mainUser=useSelector((state)=>
  state.changeMainUser
  );
  const captain=useSelector((state)=>
  state.changeCaptain
  );

  const mainTeam=useSelector((state)=>
  state.changeMainTeam
  );

  const userName=useSelector((state)=>
  state.changeUserName
  );

    useEffect(() => {
      fetchResume();
    }, [])

    const Leave = async () => {
      try {
            const resume = {
              team_id: "",
              team: "",
            };
              await axios.put("/api/resume/id/" + mainUser, resume);
              history("/home")
          } catch (e) {
            console.log(e);
          }
};


const fetchOffers = async () => {
  try{
  const res = await axios.get("api/applications/"+myTeam+"/"+mainUser);
  setOffers(res.data)
  }catch(e){
    console.log(e)
  }
};

useEffect(() => {
  fetchOffers();
}, [])

    const handleClick = async (e) => {
      e.preventDefault();
        const offer = {
          player : userName,
          player_id : mainUser,
          team : team?.name,
          team_id : team?._id
        };
        try {
          await axios.post("/api/applications/create", offer);
          const result = await axios.delete("api/offers/"+mainUser+"/"+team?._id);
          const element = document.getElementById("apply");
            element.innerHTML = "Applied";
        } catch (err) {
          window.alert("An account with this Email already exists")
        }
    };

  return (
    <div className="md:h-44 h-32 w-full flex flex-row bg-gray-300 bg-opacity-25  xl:pl-32 lg:pl-24 sm:pl-12 pl-3 pr-3 bg-no-repeat bg-cover">
      <div className="w-2/3 sm:mr-0 mr-3 flex flex-col justify-center">
        <motion.div initial={{ x: '-10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className="md:text-2xl sm:text-lg text-slate-500 font-semibold mt-1">
          TEAM
        </motion.div>
        <motion.div initial={{ x: '100vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className="xl:text-5xl md:text-4xl sm:text-3xl text-xl font-semibold">
          {(team?.name?.toUpperCase())?.slice(0,11)}
        </motion.div>
        <motion.div initial={{ x: '-10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type:'spring'}} className="md:text-2xl sm:text-lg text-slate-500 font-semibold mt-1">
          {team?.game?.toUpperCase()}
        </motion.div>
      </div>
      <Link
        className={`flex flex-col ${
          team?.captain_id !== myResume ? "hidden" : ""
        } justify-center`}
        to="/createTeam"
      >
        <button
          className={`sm:text-lg text-sm w-full pt-2 rounded pb-2 sm:pl-3 sm:pr-3 pl-2 pr-2 border-2 border-white bg-gradient-to-r from-emerald-700 to-emerald-500 text-white`}
        >
          UPDATE TEAM
        </button>
      </Link>
      <div id="apply"
        className={`flex flex-col ${mainUser === captain ? "hidden":""} ${
          team?.captain_id === myResume ? "hidden" : ""
        } ${resume?.team_id !== team?._id ? "" : "hidden"} ${offers?.length === 0?"":"hidden"} justify-center`}
      >
        <button
          onClick={handleClick}
          className={`sm:text-lg text-sm w-full pt-2 rounded pb-2 sm:pl-3 sm:pr-3 pl-2 pr-2 border-2 border-white bg-gradient-to-r from-emerald-700 to-emerald-500 text-white`}
          >
          JOIN
        </button>
      </div>
      <div
        className={`flex flex-col ${mainUser === captain ? "hidden":""} ${
          team?.captain_id === myResume ? "hidden" : ""
        } ${resume?.team_id !== team?._id ? "" : "hidden"} ${offers?.length !== 0?"":"hidden"} justify-center`}
      >
        <div className='sm:text-lg text-sm w-full pt-2 rounded pb-2 sm:pl-3 sm:pr-3 pl-2 pr-2 border-2 border-white bg-gradient-to-r from-purple-700 to-purple-500 text-white'>APPLIED</div>
      </div>
      <div
        className={`flex flex-col ${mainUser!==captain ? "" : "hidden"} ${
          team?.captain_id === myResume ? "hidden" : ""
        } justify-center ${mainTeam === ""? "hidden":""}`}
      >
        <button
          onClick={Leave}
          className={`sm:text-lg text-sm ${mainTeam !== myTeam ? "hidden":""} w-full pt-2 rounded pb-2 sm:pl-3 sm:pr-3 pl-2 pr-2 border-2 border-white bg-gradient-to-r from-emerald-700 to-emerald-500 text-white`}
          >
          LEAVE
        </button>
      </div>
    </div>
  );
}

export default TeamInfoTop;
