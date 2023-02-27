const initialState = null;

const changeSearchTeam = (state = initialState , action) => {
    switch(action.type){
        case "SEARCHTEAM": return action.team;
        default: return state;
    }
}

export default changeSearchTeam; 