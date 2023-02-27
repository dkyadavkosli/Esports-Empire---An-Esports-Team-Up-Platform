
const initialState = null;

const changeCurrTeam = (state = initialState , action) => {
    switch(action.type){
        case "CURRTEAM": return action.team;
        default: return state;
    }
}

export default changeCurrTeam;  