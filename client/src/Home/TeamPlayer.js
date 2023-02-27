import {Link} from "react-router-dom"
import React , {useState , useEffect} from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {changeCurrTeam , changeCurrResume} from "../actions/index"
import {useNavigate} from "react-router-dom"
import TeamImg from "../assets/TeamImg.jpg"
import PlayerImg from "../assets/PlayerImg.png"


function TeamPlayer() {

  const history = useNavigate();

  const myResume=useSelector((state)=>
  state.changeCurrResume
  );

   const getResume = () => {
      history("/resume")
   }

   const getTeam = () => {
    history("/teamInfo")
 }

 const myTeam=useSelector((state)=>
 state.changeCurrTeam
 );


  return (
    <div>
      <div id='player' className='flex sm:flex-row flex-col md:mt-0 sm:pt-10 pt-6 sm:pb-10 pb-6 xl:pl-36 xl:pr-36 lg:pl-28 lg:pr-28 md:pl-10 md:pr-10 sm:pl-8 sm:pr-8 pl-3 pr-3'>
      <div className="xl:h-44 sm:w-44 sm:h-64 w-full flex flex-row justify-center sm:mt-6 xl:ml-16 md:ml-8 mr-16">
      <img className='sm:h-full sm:w-full w-1/2 h-44' src={PlayerImg} alt=""/>
      </div>
      <div className='sm:w-5/12 w-full pt-3 sm:mt-0 mt-2 sm:pb-0 pb-4 pr-6'> 
        <div className='text-slate-500 font-semibold'>YOU JOINED AS A </div>
        <div className='md:text-5xl sm:text-4xl text-3xl font-medium mt-1 text-sky-700'>PLAYER</div>
        <div className='font-semibold sm:mt-3 mt-2 sm:text-lg'>BE A PART OF YOUR DREAM TEAM</div>
        <div className='mt-4 font-semibold text-slate-500'>𝐂𝐫𝐞𝐚𝐭𝐞 𝐚𝐧𝐝 𝐩𝐮𝐛𝐥𝐢𝐬𝐡 𝐲𝐨𝐮𝐫 𝐑𝐞𝐬𝐮𝐦𝐞 and put all your skills and gaming experience in it so that teams searching for players can contact you.</div>
        <div className='mt-4 font-semibold text-slate-500'>𝐒𝐞𝐚𝐫𝐜𝐡 𝐟𝐨𝐫 𝐯𝐚𝐫𝐢𝐨𝐮𝐬 𝐫𝐞𝐜𝐫𝐮𝐢𝐭𝐦𝐞𝐧𝐭𝐬 𝐨𝐟𝐟𝐞𝐫𝐬 from different teams across the country.</div>
      </div>
      <div>
        <Link to="/createResume" className={`${myResume ? "hidden" : ""}`}>
        <button className='text-lg w-full pt-2 rounded pb-2 border-2 border-white bg-gradient-to-r from-sky-600 to-sky-400 text-white'>CREATE RESUME</button>
        </Link>
        <div onClick={getResume} className={`${!myResume ? "hidden" : ""}`}>
        <button className='text-lg w-full pt-2 rounded pb-2 border-2 border-white bg-gradient-to-r from-sky-600 to-sky-400 text-white'>SEE RESUME</button>
        </div>
        <Link to="/teams">
        <button className='text-lg w-full pt-2 rounded pb-2 border-2 border-sky-500 text-sky-600 mt-3'>SEARCH TEAMS</button>
        </Link>
        <div className='mt-3 bg-slate-200 p-5'>
          <div className='text-lg bg-clip-text text-transparent font-semibold bg-gradient-to-r from-sky-600 to-sky-400'>3 STEPS TO FIND A TEAM</div>
          <div className='text-sm text-slate-500 mt-2'>1 - 𝐂𝐑𝐄𝐀𝐓𝐄 AND PUBLISH YOUR CV</div>
          <div className='text-sm text-slate-500 mt-1'>2 - 𝐒𝐄𝐀𝐑𝐂𝐇 FOR RECRUITMENT OFFERS</div>
          <div className='text-sm text-slate-500 mt-1'>3 - 𝐀𝐏𝐏𝐋𝐘 TO JOIN A TEAM</div>
        </div>
      </div>
      </div>
      <div id='team' className='flex sm:flex-row flex-col bg-slate-100 sm:pt-10 pt-6 sm:pb-10 pb-6  xl:pl-36 xl:pr-36 lg:pl-28 lg:pr-28 md:pl-10 md:pr-10 sm:pl-8 sm:pr-8 pl-2 pr-2'>
      <div className="xl:h-44 sm:w-44 sm:h-64 w-full flex flex-row justify-center sm:mt-6 xl:ml-16 md:ml-8 mr-16"> 
      <img className='sm:h-full sm:w-full w-1/2 h-44' src={TeamImg} alt=""/>
      </div> 
      <div className='sm:w-5/12 w-full sm:pb-0 pb-4 pt-3 pr-6'> 
        <div className='text-slate-500 font-semibold'>YOU WANT TO FORM A </div>
        <div className='md:text-5xl sm:text-4xl text-3xl font-medium mt-1 text-fuchsia-700'>TEAM</div>
        <div className='font-semibold sm:mt-3 mt-2 sm:text-lg'>SEARCH THE BEST PLAYERS FOR YOUR TEAM</div>
        <div className='mt-4 font-semibold text-slate-500'>𝐂𝐫𝐞𝐚𝐭𝐞 𝐲𝐨𝐮𝐫 𝐨𝐰𝐧 𝐭𝐞𝐚𝐦 so that the players seeking for good teams can apply to join your team.</div>
        <div className='mt-4 font-semibold text-slate-500'>𝐒𝐞𝐚𝐫𝐜𝐡 𝐟𝐨𝐫 𝐯𝐚𝐫𝐢𝐨𝐮𝐬 𝐭𝐞𝐚𝐦 𝐬𝐞𝐞𝐤𝐢𝐧𝐠 𝐩𝐥𝐚𝐲𝐞𝐫𝐬 from all across the country.</div>
      </div>
      <div>
        <Link to="/createTeam" className={`${myTeam ? "hidden" : ""}`}>
        <button className='text-lg w-full pt-2 rounded pb-2  border-white bg-gradient-to-r from-fuchsia-600 to-fuchsia-400 text-white'>CREATE TEAM</button>
        </Link>
        <div onClick={getTeam} className={`${!myTeam ? "hidden" : ""}`}>
        <button className='text-lg w-full pt-2 rounded pb-2  border-white bg-gradient-to-r from-fuchsia-600 to-fuchsia-400 text-white'>SEE TEAM</button>
        </div>
        <Link to="/players">
        <button className='text-lg w-full pt-2 rounded pb-2 border-2 border-fuchsia-700 text-fuchsia-700 mt-3'>SEARCH PLAYERS</button>
        </Link>
        <div className='mt-3 pr-8 bg-slate-200 p-5 w-full'>
          <div className='text-lg bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-fuchsia-400 font-semibold'>3 STEPS TO FIND PLAYERS</div>
          <div className='text-sm text-slate-500 mt-2'>1 - 𝐂𝐑𝐄𝐀𝐓𝐄 YOUR TEAM</div>
          <div className='text-sm text-slate-500 mt-1'>2 - 𝐏𝐔𝐁𝐋𝐈𝐒𝐇 A RECRUITMENT OFFERS</div>
          <div className='text-sm text-slate-500 mt-1'>3 - 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 AVAILABLE PLAYERS</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default TeamPlayer