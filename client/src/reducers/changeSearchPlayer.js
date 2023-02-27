const initialState = null;

const changeSearchPlayer = (state = initialState , action) => {
    switch(action.type){
        case "SEARCHPLAYER": return action.player;
        default: return state;
    }
}

export default changeSearchPlayer;