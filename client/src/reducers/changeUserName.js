const initialState = null;

const changeUserName = (state = initialState , action) => {
    switch(action.type){
        case "USERNAME": return action.userName;
        default: return state;
    }
}

export default changeUserName; 