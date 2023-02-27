const initialState = null;

const changeMainTeam = (state = initialState , action) => {
    switch(action.type){
        case "MAINTEAM": return action.mainTeam;
        default: return state;
    }
}

export default changeMainTeam; 