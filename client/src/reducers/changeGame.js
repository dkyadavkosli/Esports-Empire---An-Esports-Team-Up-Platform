const initialState = null;

const changeGame = (state = initialState , action) => {
    switch(action.type){
        case "GAME": return action.game;
        default: return state;
    }
}

export default changeGame; 