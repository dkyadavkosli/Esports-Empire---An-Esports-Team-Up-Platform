const initialState = null;

const changeCaptain = (state = initialState , action) => {
    switch(action.type){
        case "CAPTAIN": return action.captain;
        default: return state;
    }
}

export default changeCaptain; 