import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import {changeCurrResume} from "../actions/index"
import {useNavigate} from "react-router-dom"
import axios from "axios";

function TeamOffer(props) {
  const history = useNavigate()
  const [team, setTeam] = useState();

const dispatch = useDispatch();

const myTeam = useSelector((state) => state.changeCurrTeam);

const setResume = () => {
  dispatch(changeCurrResume(props?.player_id))
  console.log(props?.id)
  history("/resume")
}

  const deleteOffers = async () => {
    try{
    const res = await axios.delete("api/applications/"+props?.id);
    const element = document.getElementById("offer");
    element.innerHTML = "Rejected";
    }catch(e){
      console.log(e)
    }
  };


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

  const Join = async () => {
        try {
              const resume = {
                team_id: team?._id,
                team: team?.name,
              };
                await axios.put("/api/resume/id/" + props?.player_id, resume);
                const res = await axios.delete("api/applications/"+props?.id);
                history("/home")
            } catch (e) {
              console.log(e);
            }
  };


  return (
    <div>
    <div id="offer" className="pt-1 pb-1 pr-2 pl-2 bg-slate-100 mt-1 mb-1 border-0 rounded">
      <div className="border-0 font-semibold leading-5">
        NAME : {props?.player}
      </div>
      <div className="mt-1">{props?.player} JUST APPLIED FOR GETTING RECRUITED IN YOUR TEAM.</div>
      <div className="mt-1 flex flex-row">
      <button className='text-sm pt-2 rounded pb-2 sm:pl-3 sm:pr-3 pl-1 pr-1 border-2 border-white bg-gradient-to-r from-slate-700 to-slate-500 text-white' onClick={setResume}>VIEW</button>
      <button className='text-sm pt-2 ml-2 rounded pb-2 sm:pl-3 sm:pr-3 pl-1 pr-1 border-2 border-white bg-gradient-to-r from-slate-300 to-slate-200' onClick={Join}>ACCEPT</button>
      <button className='text-sm pt-2 ml-2 rounded pb-2 sm:pl-3 sm:pr-3 pl-1 pr-1 border-2 border-white bg-gradient-to-r from-slate-200 to-slate-100' onClick={deleteOffers}>REJECT</button>
      </div>
    </div>
  </div>
  );
}

export default TeamOffer;