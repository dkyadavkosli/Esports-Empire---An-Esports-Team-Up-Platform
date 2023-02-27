import React from 'react'
import img from "../assets/ResumeImage.png"
import { useDispatch } from 'react-redux';
import {changeCurrTeam} from "../actions/index"
import {useNavigate} from "react-router-dom"

function TeamCard(props) {

  const history = useNavigate()

  const dispatch = useDispatch();
  
  const setTeam = () => {
    dispatch(changeCurrTeam(props?.team_id))
    history("/teamInfo")
  }


  return (
    <div className='mt-4 hover:scale-110 mr-2 ml-2 cursor-pointer shadow-lg rounded border-2 border-black ' onClick={setTeam}>
        <div className='flex flex-row w-full justify-center'>
        <img src={props?.logo !== "" ? props?.logo : img} className="w-full border-b-2 border-black h-44" alt=""/>
        </div>
        <div className='flex flex-row pt-4 pb-4 w-full justify-center'>
        <div className='font-semibold text-lg'>{((props?.name).toUpperCase())?.slice(0,14)}</div>
        </div>
        <div className='flex flex-row w-full'>
            <div className='flex flex-row w-1/2 border border-cyan-800 border-l-0 pt-4 pb-4 justify-center'>
                <div className='text-md pl-2 pr-2 font-semibold text-slate-500'>{props?.game === "BATTLEGROUNDS MOBILE INDIA" ? "BGMI":props?.game}</div>
            </div>
            <div className='flex flex-row w-1/2 border border-cyan-800 border-x-0 pt-4 pb-4 justify-center'>
                <div className='text-md pl-2 pr-2 font-semibold text-slate-500'>{((props?.country).toUpperCase())?.slice(0,10)}</div>
            </div>
        </div> 
        <div className='flex flex-row pt-4 pb-4 w-full justify-center'>
        <div className='font-semibold'>{props?.role ? props?.role : "-"}</div>
        </div>
    </div>
  )
}

export default TeamCard