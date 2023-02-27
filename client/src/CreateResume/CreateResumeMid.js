import React, { useState , useRef , useEffect } from 'react'
import {MdOutlineArrowDropDown} from "react-icons/md"
import axios from 'axios'
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"

function CreateResumeMid() {

  const [resume , setResume] = useState()

  const myResume=useSelector((state)=>
  state.changeCurrResume
  );
 
  const history = useNavigate()

const myUser=useSelector((state)=>
state.changeUser
);

  const [game1 , setGame1] = useState(0)

  const [game , setGame] = useState(resume?.game)

  const getGame1 = () => {
    if(game1 === 0){
        setGame1(1)
    }else{
        setGame1(0)
    }
  }
 
  const fetchResume = async () => {
      try{
      if(myResume!==null){
      const res = await axios.get("api/resume/id/"+myResume);
      setResume(res.data)
      }
      }catch(e){
        console.log(e)
      }
    };
  
    useEffect(() => {
      fetchResume();
    },[])



  const [role1 , setRole1] = useState(0)

  const [role , setRole] = useState(resume?.role)

  const getRole1 = () => {
    if(role1 === 0){
        setRole1(1)
    }else{
        setRole1(0)
    }
  }


  const [search1 , setSearch1] = useState(0)

  const [search , setSearch] = useState(resume?.searching_team)

  const getSearch1 = () => {
    if(search1 === 0){
        setSearch1(1)
    }else{
        setSearch1(0)
    }
  }


  const Game = useRef();
  const IGN = useRef();
  const IGID = useRef();
  const Role = useRef();
  const fd = useRef();
  const curr_tier = useRef();
  const best_tier = useRef();
  const Search = useRef();
  const desc = useRef();
  const Name = useRef();
  const phone = useRef();
  const email = useRef();
  const address = useRef();
  const age = useRef();
  const insta = useRef();
  const pic = useRef();
  const facebook = useRef();
  const dis_tag = useRef();


  
  const handleClick = async (e) => {
    e.preventDefault();
      const resume = {
        username: (Name.current.value).toUpperCase(),
        userId: myUser?._id,
        email: email.current.value,
        in_game_name: IGN.current.value.toUpperCase(),
        game: Game.current.value,
        in_game_id: IGID.current.value,
        role: Role.current.value,
        f_d: fd.current.value,
        curr_tier: curr_tier.current.value.toUpperCase(),
        best_tier: best_tier.current.value.toUpperCase(),
        searching_team: Search.current.value,
        phone: phone.current.value,
        address: address.current.value,
        age: age.current.value,
        desc: desc.current.value,
        instagram: insta.current.value,
        facebook: facebook.current.value,
        discord_tag: dis_tag.current.value,
        profile_pic:pic.current.value
      };
      try {
        await axios.post("/api/resume/create", resume);
        history("/home");
      } catch (err) {
        console.log(err)
        window.alert("Something went wrong. Try rechecking whether you have filled all details")
      }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
      const resumeNow = {
        username: resume?.username.toUpperCase(),
        userId:myUser?._id,
        email: email.current.value,
        in_game_name: IGN.current.value.toUpperCase(),
        game: game,
        in_game_id: IGID.current.value,
        role: Role.current.value,
        f_d: fd.current.value,
        curr_tier: curr_tier.current.value.toUpperCase(),
        best_tier: best_tier.current.value.toUpperCase(),
        searching_team: Search.current.value,
        phone: phone.current.value,
        address: address.current.value,
        age: age.current.value,
        desc: desc.current.value, 
        instagram: insta.current.value,
        facebook: facebook.current.value,
        discord_tag: dis_tag.current.value,
        profile_pic:pic.current.value
      };
      try {
        console.log(game)
        await axios.put("/api/resume/id/"+myResume, resumeNow);
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
       <div className='flex flex-col justify-center md:w-1/4 sm:w-1/3 w-full mr-1'>
          <div className=''>GAME</div>
        </div>
          <div className='flex flex-row md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input defaultValue={game} onChange={()=>{console.log("Hi")}} ref={Game} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
            <MdOutlineArrowDropDown onClick={getGame1} className='bg-slate-200 cursor-pointer p-2 h-8 w-8'/>
          </div>
       </div>
       <div className={`flex ${game1 === 0 ? "hidden" : ""} flex-row`}>
            <div className='md:w-1/4 sm:w-1/3 sm:block hidden mr-1'></div>
            <div className='md:w-5/12 sm:w-2/3 w-full border-2 border-cyan-900 sm:pl-2 pl-1 pt-1 pb-1'>
                <div className=''>
                <button onClick={()=>setGame("BATTLEGROUNDS MOBILE INDIA")} className=''>BATTLEGROUNDS MOBILE INDIA</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setGame("VALORANT")} className=''>VALORANT</button>
                </div>
            </div>
        </div>
        <div className='flex sm:flex-row flex-col mt-6'>
        <div className='flex flex-col justify-center md:w-1/4 sm:w-1/3 w-full mr-1'>
          <div className=''>IN-GAME NAME</div>
        </div>
          <div className='flex flex-row md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" ref={IGN} defaultValue={resume?.in_game_name} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center md:w-1/4 sm:w-1/3 w-full mr-1'>
          <div className=''>IN-GAME ID</div>
        </div>
          <div className='flex flex-row md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" ref={IGID} defaultValue={resume?.in_game_id} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center md:w-1/4 sm:w-1/3 w-full mr-1'>
          <div className=''>ROLE</div>
        </div>
          <div className='flex flex-row md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" onChange={()=>{console.log("Hi")}} ref={Role} defaultValue={role} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
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
       <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center md:w-1/4 sm:w-1/3 w-full mr-1'>
          <div className=''>FINISH/DEATH (F/D)</div>
        </div>
          <div className='flex flex-row md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" defaultValue={resume?.f_d} ref={fd} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center md:w-1/4 sm:w-1/3 w-full mr-1'>
          <div className=''>CURRENT TIER</div>
        </div>
          <div className='flex flex-row md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" ref={curr_tier} defaultValue={resume?.curr_tier} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center md:w-1/4 sm:w-1/3 w-full mr-1'>
          <div className=''>BEST TIER REACHED</div>
        </div>
          <div className='flex flex-row md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" defaultValue={resume?.best_tier} ref={best_tier} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-7'>
        <div className='flex flex-col justify-center md:w-1/4 sm:w-1/3 w-full mr-1'>
          <div className=''>SEARCHING TEAM</div>
        </div>
          <div className='flex flex-row md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input onChange={()=>{console.log("Hi")}} ref={Search} defaultValue={search} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
            <MdOutlineArrowDropDown onClick={getSearch1} className='bg-slate-200 cursor-pointer p-2 h-8 w-8'/>
          </div>
       </div>
       <div className={`flex ${search1 === 0 ? "hidden" : ""} z-20 flex-row`}>
            <div className='md:w-1/4 sm:w-1/3 sm:block hidden mr-1'></div>
            <div className='md:w-5/12 sm:w-2/3 w-full border-2 border-cyan-900 pl-2 pt-1 pb-1'>
                <div>
                <button onClick={()=>setSearch("YES")} className=''>YES</button>
                </div>
                <div className='pt-1'>
                <button onClick={()=>setSearch("NO")} className=''>NO</button>
                </div>
            </div>
        </div>    
       
       </div>



       <div className='sm:mt-12 mt-8'>
       <div className='sm:text-2xl text-xl font-semibold'>PERSONAL INFORMATION</div>
       <div className='flex sm:flex-row flex-col sm:mt-6 mt-4'>
       <div className='flex flex-col justify-center md:w-1/4 sm:w-1/3 w-full mr-1'>
          <div className=''>NAME</div>
        </div>
          <div className='flex flex-row md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" defaultValue={resume?.phone} ref={Name} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center md:w-1/4 sm:w-1/3 w-full mr-1'>
          <div className=''>PHONE NO.</div>
        </div>
          <div className='flex flex-row md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" defaultValue={resume?.phone} ref={phone} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center md:w-1/4 sm:w-1/3 w-full mr-1'>
          <div className=''>EMAIL</div>
        </div>
          <div className='flex flex-row md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" defaultValue={resume?.email} ref={email} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center md:w-1/4 sm:w-1/3 w-full mr-1'>
          <div className=''>ADDRESS</div>
        </div>
          <div className='flex flex-row md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" defaultValue={resume?.address} ref={address} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center md:w-1/4 sm:w-1/3 w-full mr-1'>
          <div className=''>AGE</div>
        </div>
          <div className='flex flex-row md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="number" defaultValue={resume?.age} ref={age} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
        <div className='flex flex-col justify-center md:w-1/4 sm:w-1/3 w-full mr-1'>
          <div className=''>PROFILE PIC</div>
        </div>
          <div className='flex sm:flex-row flex-col md:w-5/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" defaultValue={resume?.profile_pic} ref={pic} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
    </div>

   
   <div className='sm:mt-12 mt-8'>
    <div className='sm:text-2xl text-xl font-semibold'>DESCRIPTION</div>
    <div className=' text-slate-400 mt-2 font-semibold'>A NICE AND COMPLETE DESCRIPTION WILL INCREASE YOUR CHANCES OF GETTING RECRUITED IN A TEAM.</div>
    <div className='mt-3 text-sm font-semibold'>TELL THE RECRUITERS ABOUT YOUR COMPETITIVE EXPERIENCE AND DESCRIBE YOUR SKILLS AND ROLE. ALSO MENTION YOUR ACHIEVEMENTS TILL NOW IN THE FIELD OF ESPORTS AND WHAT ARE YOUR AMBITIONS IN FUTURE.</div>
    <div className='mt-4'>
        <textarea className='w-full p-1 border-2 border-cyan-800' defaultValue={resume?.desc} ref={desc} rows={15} ></textarea>
    </div>
   </div>


   <div className='sm:mt-10 mt-7'>
       <div className='sm:text-2xl text-xl font-semibold'>YOUR SOCIALS</div>
        <div className='flex sm:flex-row flex-col mt-6 '>
        <div className='flex flex-col justify-center sm:w-1/3 w-full mr-1'>
          <div className=''>INSTAGRAM</div>
        </div>
          <div className='flex flex-row md:w-6/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" ref={insta} defaultValue={resume?.instagram} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center sm:w-1/3 w-full mr-1'>
          <div className=''>FACEBOOK</div>
        </div>
          <div className='flex flex-row md:w-6/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" ref={facebook} defaultValue={resume?.facebook} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
       <div className='flex sm:flex-row flex-col mt-6 '>
       <div className='flex flex-col justify-center sm:w-1/3 w-full mr-1'>
          <div className=''>DISCORD TAG</div>
        </div>
          <div className='flex flex-row md:w-6/12 sm:w-2/3 w-full sm:mt-0 mt-1'>
            <input type="text" ref={dis_tag} defaultValue={resume?.discord_tag} className='w-full h-8 bg-slate-100 hover:border-2 pt-1 pl-2 pb-1 pr-2 hover:border-gray-500'/>
          </div>
       </div>
    </div>


    <div className={`md:mt-16 sm:mt-12 mt-8 flex ${resume?._id ? "hidden":""} flex-row justify-center`}>
        <div className='bg-gradient-to-r from-sky-700 to-sky-500 pt-3 pb-3 text-white w-1/2 shadow-lg rounded flex flex-row justify-center'>
        <button type='submit' onClick={handleClick} className=''>CREATE</button>
        </div>
    </div>
    <div className={`md:mt-16 sm:mt-12 mt-8 ${!resume?._id ? "hidden":""} flex flex-row justify-center`}>
        <div className='bg-gradient-to-r from-sky-700 to-sky-500 pt-3 pb-3 text-white w-1/2 shadow-lg rounded flex flex-row justify-center'>
        <button type='submit' className='' onClick={handleUpdate}>UPDATE</button>
        </div>
    </div>
    </div>

    </div>
  )
}

export default CreateResumeMid