import React , {useState , useEffect} from 'react'
import player from "../assets/ResumeImage.png"
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ResumeOffer from './ResumeOffer';

function ResumeMid() {

    const [resume , setResume] = useState()
    const [offers , setOffers] = useState()

    const myResume=useSelector((state)=>
    state.changeCurrResume
    );

    const myUser=useSelector((state)=>
    state.changeUser
    );
   
    const history = useNavigate()
  
    useEffect(()=>{
      if(!myResume){
        history("/")
      }
    })

    console.log(offers)
    const fetchResume = async () => {
        try{
        const res = await axios.get("api/resume/id/"+myResume);
        setResume(res.data)
        }catch(e){
          console.log(e)
        }
      }; 

      const fetchOffers = async () => {
        try{
        const res = await axios.get("api/offers/"+myResume);
        setOffers(res.data)
        }catch(e){
          console.log(e)
        }
      };
    
      useEffect(() => {
        fetchResume();
        fetchOffers();
      },[])

  return (
    <div className=' xl:pl-32 lg:pl-24 sm:pl-12 lg:pr-32 xl:pr-32 sm:pr-12 pl-3 pr-3 pt-8 pb-10 '>
     <div className='flex lg:flex-row flex-col'> 
     <div>
     <div className='lg:block sm:hidden w-full'>
        <img src={resume?.profile_pic !== "" ? resume?.profile_pic : player} className="lg:w-64 w-full border border-gray-600 h-72"/>  
        <div className='text-lg text-slate-600 font-semibold lg:w-64 w-full pt-6 pb-6 flex flex-row justify-center border border-gray-600'>{((resume?.username)?.toUpperCase())?.slice(0,16)}</div>   
        <div className='text-lg text-slate-600 font-semibold lg:w-64 w-full pt-6 pb-6 flex flex-row justify-center border border-gray-600'>{resume?.age} YEARS OLD</div>   
     </div>
     <div className='lg:hidden hidden w-full sm:flex flex-row'>
        <img src={resume?.profile_pic !== "" ? resume?.profile_pic : player} className="w-1/2 border border-gray-600 h-48"/>  
        <div className='w-1/2'>
        <div className='text-lg text-slate-600 font-semibold w-full h-24 pt-8 pb-8 flex flex-row justify-center border border-gray-600'>{((resume?.username)?.toUpperCase())?.slice(0,16)}</div>   
        <div className='text-lg text-slate-600 font-semibold w-full h-24 pt-8 pb-8 flex flex-row justify-center border border-gray-600'>{resume?.age} YEARS OLD</div>  
        </div> 
     </div>
     </div>  
     <div className='lg:pl-16 lg:mt-0 mt-10 w-full'>
        <div className='flex sm:flex-row flex-col w-full'>
            <div className="sm:w-1/2 w-full">
                <div className='md:text-2xl text-xl font-semibold'>IN-GAME NAME</div>
                <div className='text-slate-500 mt-1'>{(resume?.in_game_name)?.toUpperCase()}</div>
            </div>
            <div className="sm:w-1/2 w-full sm:mt-0 mt-10">
                <div className='md:text-2xl text-xl font-semibold'>IN-GAME ID</div>
                <div className='text-slate-500 mt-1'>{resume?.in_game_id}</div>
            </div>
        </div>
        <div className='flex sm:flex-row flex-col w-full sm:mt-10'>
            <div className="sm:w-1/2 sm:mt-0 mt-10 w-full">
                <div className='md:text-2xl text-xl font-semibold'>ROLE</div>
                <div className='text-slate-500 mt-1'>{resume?.role}</div>
            </div>
            <div className="sm:w-1/2 sm:mt-0 mt-10 w-full">
                <div className='md:text-2xl text-xl font-semibold'>FINISH/DEATH (F/D)</div>
                <div className='text-slate-500 mt-1'>{resume?.f_d}</div>
            </div>
        </div>
        <div className='flex sm:flex-row flex-col w-full sm:mt-10'>
            <div className="sm:w-1/2 sm:mt-0 mt-10 w-full">
                <div className='md:text-2xl text-xl font-semibold'>CURRENT TIER</div>
                <div className='text-slate-500 mt-1'>{(resume?.curr_tier)?.toUpperCase()}</div>
            </div>
            <div className="sm:w-1/2 sm:mt-0 mt-10 w-full">
                <div className='md:text-2xl text-xl font-semibold'>BEST TIER REACHED</div>
                <div className='text-slate-500 mt-1'>{(resume?.best_tier)?.toUpperCase()}</div>
            </div>
        </div>
        <div className='flex sm:flex-row flex-col w-full sm:mt-10'>
            <div className="sm:w-1/2 sm:mt-0 mt-10 w-full">
                <div className='md:text-2xl text-xl font-semibold'>EMAIL</div>
                <div className='text-slate-500 mt-1'>{(resume?.email)}</div>
            </div>
            <div className="sm:w-1/2 sm:mt-0 mt-10 w-full">
                <div className='md:text-2xl text-xl font-semibold'>PHONE NO.</div>
                <div className='text-slate-500 mt-1'>{resume?.phone}</div>
            </div>
        </div>
        <div className='mt-10'>
            <div className='md:text-2xl text-xl font-semibold'>DESCRIPTION</div>
            <div className='text-slate-500 mt-1'>{(resume?.desc)?.toUpperCase()}</div>
        </div>
        <div className='flex sm:flex-row flex-col w-full sm:mt-10'>
            <div className="sm:w-1/2 sm:mt-0 mt-10 w-full">
                <div className='md:text-2xl text-xl font-semibold'>INSTAGRAM</div>
                <div className='text-slate-500 mt-1'>{(resume?.instagram)}</div>
            </div>
            <div className="sm:w-1/2 sm:mt-0 mt-10 w-full">
                <div className='md:text-2xl text-xl font-semibold'>FACEBOOK</div>
                <div className='text-slate-500 mt-1'>{resume?.facebook}</div>
            </div>
        </div>
        <div className='flex sm:flex-row flex-col w-full sm:mt-10'>
            <div className="sm:w-1/2 sm:mt-0 mt-10 w-full">
                <div className='md:text-2xl text-xl font-semibold'>DISCORD TAG</div>
                <div className='text-slate-500 mt-1'>{resume?.discord_tag}</div>
            </div>
            <div className="sm:w-1/2 sm:mt-0 mt-10 w-full">
                <div className='md:text-2xl text-xl font-semibold'>ADDRESS</div>
                <div className='text-slate-500 mt-1'>{(resume?.address)?.toUpperCase()}</div>
            </div>
        </div>
     </div>
    </div>
    <div className={`mt-10 ${myUser?._id !== resume?.userId ? "hidden":""}`}>
        <div className='text-slate-500 sm:text-base text-sm sm:font-normal font-semibold'>DON'T FORGET THERE ARE ALWAYS SOME PEOPLE WHO ARE CONTINUOUSLY OBSERVING YOUR PROFILE.
            YOU'LL GET A RECRUITMENT WHENEVER ANY TEAM FINDS YOU PERFECT FOR THE ROLE REQUIRED.
            SO, IT BECOMES VERY IMPORTANT FOR YOU TO KEEP AN CONSTANT EYE ON THE OFFERS SECTION.
        </div>
        <div className='md:text-2xl text-xl mt-2 font-semibold'>OFFERS</div>
        <div className={`md:h-64 h-72 ${offers?.length === 0 ? "hidden":""} overflow-y-scroll pl-1 pr-1 no-scrollbar border-2 border-slate-500 mt-2 w-full`}>
        {offers?.map((elem)=>{
              return(
               <ResumeOffer key={elem?._id} id={elem?._id} team={elem?.team} team_id={elem?.team_id}/>
              )
            })}
        </div>
        <div className={`md:h-64 h-72 ${offers?.length !== 0 ? "hidden":""} overflow-y-scroll pl-1 pr-1 no-scrollbar border-2 border-slate-500 mt-2 w-full`}>
          <div className='font-semibold mt-1'>YOU HAVE NO RECRUITMENT OFFERS.</div>
        </div>
    </div>
    </div>
  )
}

export default ResumeMid