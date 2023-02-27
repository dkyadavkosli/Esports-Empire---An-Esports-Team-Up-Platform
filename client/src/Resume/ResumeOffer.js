import React from "react";
import { useDispatch } from 'react-redux';
import {changeCurrTeam} from "../actions/index"
import {useNavigate} from "react-router-dom"
import axios from "axios";

function ResumeOffer(props) {
  const history = useNavigate()

  const dispatch = useDispatch();
  
  const setTeam = () => {
    dispatch(changeCurrTeam(props?.team_id))
    history("/teamInfo")
  }

  const deleteOffers = async () => {
    try{
    const res = await axios.delete("api/offers/"+props?.id);
    const element = document.getElementById("offer");
    element.innerHTML = "Rejected";
    }catch(e){
      console.log(e)
    }
  };


  return (
    <div>
    <div id="offer" className="pt-1 pb-1 pr-2 pl-2 bg-slate-100 mt-1 mb-1 border-0 rounded">
      <div className="border-0 font-semibold leading-5">
        TEAM : {props?.team}
      </div>
      <div className="mt-1">YOU JUST GOT AN RECRUITMENT OFFER FROM TEAM {props?.team}</div>
      <div className="mt-1 flex flex-row">
      <button className='text-sm pt-2 rounded pb-2 sm:pl-3 sm:pr-3 pl-1 pr-1 border-2 border-white bg-gradient-to-r from-slate-700 to-slate-500 text-white' onClick={setTeam}>SEE TEAM</button>
      <button className='text-sm pt-2 ml-2 rounded pb-2 sm:pl-3 sm:pr-3 pl-1 pr-1 border-2 border-white bg-gradient-to-r from-slate-200 to-slate-100' onClick={deleteOffers}>REJECT</button>
      </div>
    </div>
  </div>
  );
}

export default ResumeOffer;
