const initialState = null;

const changeTeamName = (state = initialState , action) => {
    switch(action.type){
        case "TEAMNAME": return action.teamName;
        default: return state;
    }
}

export default changeTeamName; 