import React from 'react'
import notebook from "../assets/notebook.png"
import team from "../assets/team.svg"
import playerlist from "../assets/playerlist.png"
import teamlist from "../assets/teamlist.png"
import open from "../assets/open.png"

function AboutMid() {
  return (
    <div className='xl:pl-32 lg:pl-24 md:pl-16 xl:pr-32 lg:pr-24 md:pr-16 pb-4'>
        <div className='sm:pt-8 sm:pb-8 pt-4 pb-4 sm:pl-12 sm:pr-12 wq:pl-8 wq:pr-8 pl-4 pr-4 flex flex-row'>
            <img src={notebook} className="h-36 wq:block hidden w-36 m-1 mt-5"/>
            <div className='sm:pl-24 wq:pl-8'>
              <div className='lg:text-4xl md:text-2xl sm:text-xl text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-600'>CREATE A GOOD RESUME</div>
              <div className='md:mt-6 sm:mt-4 mt-3 md:text-base sm:text-sm text-xs font-semibold text-slate-500'>IF YOU ARE A PLAYER SEEKING TO JOIN A GOOD TEAM , ONE OF THE ESSENTIAL THINGS THAT YOU NEED IS A GOOD RESUME.</div> 
              <div className='md:mt-5 sm:mt-3 mt-2 md:text-base sm:text-sm text-xs font-semibold text-slate-500'>A GOOD RESUME SAYS IT ALL ABOUT YOUR SKILLS AND ACHIEVEMENTS.</div>
              <div className='md:mt-5 sm:mt-3 mt-2 md:text-base sm:text-sm text-xs text-slate-500 font-semibold'>CREATE A COMPLETE AND FASCINATING RESUME TO GET ATTENTION OF GOOD PLAYER SEEKING TEAMS.</div>
            </div>
        </div>
        <div className='sm:pt-8 sm:pb-8 pt-4 pb-4 sm:pl-12 sm:pr-12 wq:pl-8 wq:pr-8 pl-4 pr-4 flex bg-slate-100 flex-row'>
            <div className='sm:pr-24 wq:pr-8'>
              <div className='lg:text-4xl md:text-2xl sm:text-xl text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600'>REGISTER YOUR TEAM</div>
              <div className='md:mt-6 sm:mt-4 mt-3 md:text-base sm:text-sm text-xs font-semibold text-slate-500'>IF YOU ARE SEARCHING FOR POTENTIAL PLAYERS FOR YOUR TEAM , YOU NEED TO REGISTER YOUR TEAM ON ESPORTS EMPIRE.</div> 
              <div className='md:mt-5 sm:mt-3 mt-2 md:text-base sm:text-sm text-xs font-semibold text-slate-500'>MAKE YOUR TEAM OPEN FOR NEW RECRUITMENTS.</div>
              <div className='md:mt-5 sm:mt-3 mt-2 md:text-base sm:text-sm text-xs text-slate-500 font-semibold'>FILL ALL THE NECESSARY DETAILS ABOUT YOUR TEAM SO THAT PLAYERS CAN COME TO KNOW ABOUT YOUR ACHIEVEMENTS.</div>
            </div>
            <img src={team} className="h-36 wq:block hidden w-36 m-1 mt-8"/>
        </div>
        <div className='sm:pt-8 sm:pb-8 pt-4 pb-4 sm:pl-12 sm:pr-12 wq:pl-8 wq:pr-8 pl-4 pr-4 flex flex-row'>
            <img src={teamlist} className="h-36  wq:block hidden w-36 m-1 mt-8"/>
            <div className='sm:pl-24 wq:pl-8'>
              <div className='lg:text-4xl md:text-2xl sm:text-xl text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-600'>SEARCH GOOD TEAMS</div>
              <div className='md:mt-6 sm:mt-4 mt-3 md:text-base sm:text-sm text-xs font-semibold text-slate-500'>THE TEAM SECTION SHOWS THE LIST OF TEAMS THAT ARE CURRENTLY RECRUITING PLAYERS.</div> 
              <div className='md:mt-5 sm:mt-3 mt-2 md:text-base sm:text-sm text-xs font-semibold text-slate-500'>EXPLORE AS MUCH AS YOU CAN TO INCREASE THE CHANCES OF FINDING THE PERFECT MATCHING TEAM FOR YOURSELF.</div>
              <div className='md:mt-5 sm:mt-3 mt-2 md:text-base sm:text-sm text-xs text-slate-500 font-semibold'>CONTACT THE CAPTAIN OR OWNERS OF THE TEAM THAT YOU FIND WORTH JOINING AND PROVIDE THEM NECESSARY DETAILS.</div>
            </div>
        </div>
        <div className='sm:pt-8 sm:pb-8 pt-4 pb-4 sm:pl-12 sm:pr-12 wq:pl-8 wq:pr-8 pl-4 pr-4 flex bg-slate-100 flex-row'>
            <div className='sm:pr-24 wq:pr-8'>
              <div className='lg:text-4xl md:text-2xl sm:text-xl text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-600'>FIND POTENTIAL PLAYERS</div>
              <div className='md:mt-6 sm:mt-4 mt-3 md:text-base sm:text-sm text-xs font-semibold text-slate-500'>THE PLAYER SECTION SHOWS THE LIST OF PLAYERS THAT ARE CURRENTLY SEARCHING FOR TEAMS.</div> 
              <div className='md:mt-5 sm:mt-3 mt-2 md:text-base sm:text-sm text-xs font-semibold text-slate-500'>EXPLORE AS MUCH AS YOU CAN TO INCREASE THE CHANCES OF FINDING THE PERFECT MATCHING PLAYERS FOR YOUR TEAM.</div>
              <div className='md:mt-5 sm:mt-3 mt-2 md:text-base sm:text-sm text-xs text-slate-500 font-semibold'>CONTACT THE PLAYERS WHOM YOU FIND PERFECT AS PER YOUR REQUIREMENTS AND PROVIDE THEM NECESSARY DETAILS</div>
            </div>
            <img src={playerlist} className="h-36  hidden  wq:block w-36 m-1 mt-8"/>
        </div>
        <div className='sm:pt-8 sm:pb-8 pt-4 pb-4 sm:pl-12 sm:pr-12 wq:pl-8 wq:pr-8 pl-4 pr-4 flex flex-row'>
            <img src={open} className="h-36 wq:block hidden w-36 m-1 mt-6"/>
            <div className='sm:pl-24 wq:pl-8'>
              <div className='lg:text-4xl md:text-2xl sm:text-xl text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600'>OPEN FOR EVERYONE</div>
              <div className='md:mt-6 sm:mt-4 mt-3 md:text-base sm:text-sm text-xs font-semibold text-slate-500'>ESPORTS EMPIRE IS A PLATFORM WHICH IS DEDICATED TO HELP EACH AND EVERY ESPORTS ATHLETE TO FIND A GOOD TEAM.</div> 
              <div className='md:mt-5 sm:mt-3 mt-2 md:text-base sm:text-sm text-xs font-semibold text-slate-500'>THERE IS NO BAR OF SKILLS OR ACHIEVEMENTS FOR ANY PLAYER OR ANY TEAM.</div>
              <div className='md:mt-5 sm:mt-3 mt-2 md:text-base sm:text-sm text-xs text-slate-500 font-semibold'>EVEN A BEGINNER OR AN EXPERIENCED PLAYER CAN FIND A PERFECT MATCHING TEAM FOR THEMSELVES.</div>
            </div>
        </div>
    </div>
  )
}

export default AboutMid