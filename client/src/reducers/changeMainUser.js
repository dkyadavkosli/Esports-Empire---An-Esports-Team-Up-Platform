const initialState = null;

const changeMainUser = (state = initialState , action) => {
    switch(action.type){
        case "MAINUSER": return action.mainUser;
        default: return state;
    }
}

export default changeMainUser; 