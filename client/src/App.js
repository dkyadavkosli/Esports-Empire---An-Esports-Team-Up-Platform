import React from "react";
import {BrowserRouter, Routes, Route , useLocation } from "react-router-dom";
import HomeScreen from "./Home/HomeScreen";
import './App.css'
import CreateResume from "./CreateResume/CreateResume";
import CreateTeam from "./CreateTeam/CreateTeam";
import Resume from "./Resume/Resume";
import TeamInfo from "./TeamInfo/TeamInfo";
import About from "./About/About";
import Players from "./Players/Players";
import Teams from "./Teams/Teams";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { motion , AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation()
  return (
    <div className="">
      {/* <BrowserRouter> */}
      <div>
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/createResume" element={<CreateResume/>}/> 
          <Route exact path="/createTeam" element={<CreateTeam/>}/>
          <Route exact path="/resume" element={<Resume/>}/>
          <Route exact path="/teamInfo" element={<TeamInfo/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/players" element={<Players/>}/>
          <Route exact path="/teams" element={<Teams/>}/>
          <Route exact path="/home" element={<HomeScreen/>}/>
          <Route exact path="/register" element={<Register/>}/>
      </Routes>
      </AnimatePresence>
      </div>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
