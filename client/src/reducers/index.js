import changeMainUser from "./changeMainUser";
import changeMainTeam from "./changeMainTeam";
import  changeUser  from "./changeUser";
import  changeCurrResume  from "./changeCurrResume";
import  changeCurrTeam  from "./changeCurrTeam";
import changeTeamName from "./changeTeamName";
import changeUserName from "./changeUserName";
import changeCaptain from "./changeCaptain";
import changeSearchTeam from "./changeSearchTeam";
import changeSearchPlayer from "./changeSearchPlayer";
import changeGame from "./changeGame";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeMainUser , 
    changeUser,
    changeCurrResume,
    changeCurrTeam,
    changeMainTeam,
    changeUserName,
    changeTeamName,
    changeCaptain,
    changeSearchTeam,
    changeSearchPlayer,
    changeGame
})

export default rootReducer;