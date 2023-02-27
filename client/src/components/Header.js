import React , {useState} from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';
import {GiHamburgerMenu} from "react-icons/gi"
import {useNavigate} from "react-router-dom"

function Header(props) {
  const history = useNavigate();

  const myUser=useSelector((state)=>
  state.changeUser
  );

  const [hi , setHi] = useState("N")

  const changeHi = () => {
    if(hi === "Y"){
      setHi("N")
    }else{
      setHi("Y")
    }
  }

  const logInOut = () =>{
    localStorage.removeItem('esp1');
    history("/");
  }

  return (
    <div className='flex flex-col justify-center bg-black w-full md:h-11 pr-2'>
    <div className='flex md:flex-row flex-col'>
      <div className='flex flex-row w-full'>
      <div className='md:hidden flex flex-row ml-4 mr-2 mb-2 mt-2'>
      <button>
      <GiHamburgerMenu className='h-8 w-8 p-1 bg-white' onClick={changeHi}/>
      </button>
      </div>
      <div className='xl:w-1/4 md:5/12 w-full flex flex-row md:mt-0 md:mb-0 mb-2 mt-2'>  
        <div className='md:text-2xl text-xl md:ml-6 ml-3 text-white'>Esports Empire</div> 
        </div>
        </div>
        <div className={`xl:w-3/4 w-7/12 md:flex hidden flex-row justify-end`}>
            <Link className={`text-white ${!myUser ? "hidden":""} ${props.hide === "Y" ? "hidden":""} p-1 pt-2 ml-3 mr-3`} to="/home">
              <button>Home</button>
            </Link>
            <Link className={`text-white ${!myUser ? "hidden":""} ${props.hide === "Y" ? "hidden":""} p-1 pt-2 ml-3 mr-3`} to="/players">
              <button>Players</button>
            </Link>
            <Link className={`text-white ${!myUser ? "hidden":""} ${props.hide === "Y" ? "hidden":""} p-1 pt-2 ml-3 mr-3`} to="/teams">
              <button>Teams</button>
            </Link>
            <div className={`text-white ${!myUser ? "hidden":""} p-1 pt-2 ml-3 mr-3`}>
              <button onClick={logInOut}>Login</button>
            </div>
            <Link className={`text-white p-1 pt-2 ml-3 mr-3`} to="/register">
              <button>Register</button>
            </Link>
        </div>
        <div className={`flex flex-col ${hi==="N"?"hidden":""} md:hidden mt-1 mb-2 z-50 justify-end`}>
            <Link className={`text-white ${!myUser ? "hidden":""} ${props.hide === "Y" ? "hidden":""} p-1 pt-2 ml-3 mr-3`} to="/home">
              <button>Home</button>
            </Link>
            <Link className={`text-white ${!myUser ? "hidden":""} ${props.hide === "Y" ? "hidden":""} p-1 pt-2 ml-3 mr-3`} to="/players">
              <button>Players</button>
            </Link>
            <Link className={`text-white ${!myUser ? "hidden":""} ${props.hide === "Y" ? "hidden":""} p-1 pt-2 ml-3 mr-3`} to="/teams">
              <button>Teams</button>
            </Link>
            <div className={`text-white ${!myUser ? "hidden":""} p-1 pt-2 ml-3 mr-3`}>
              <button onClick={logInOut}>Login</button>
            </div>
            <Link className={`text-white p-1 pt-2 ml-3 mr-3`} to="/register">
              <button>Register</button>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Header