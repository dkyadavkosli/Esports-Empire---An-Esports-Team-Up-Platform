export const changeUser = (user) => {
    return{
        type:"CURRUSER",
        user:user
    }
}


export const changeCurrResume = (resume) => {
    return{
        type:"CURRESUME",
        resume:resume
    }
}


export const changeCurrTeam = (team) => {
    return{
        type:"CURRTEAM",
        team:team
    }
}

export const changeMainUser = (mainUser) => {
    return{
        type:"MAINUSER",
        mainUser:mainUser
    }
}

export const changeMainTeam = (mainTeam) => {
    return{
        type:"MAINTEAM",
        mainTeam:mainTeam
    }
}

export const changeUserName = (userName) => {
    return{
        type:"USERNAME",
        userName:userName
    }
}

export const changeTeamName = (teamName) => {
    return{
        type:"TEAMNAME",
        teamName:teamName
    }
}


export const changeCaptain = (captain) => {
    return{
        type:"CAPTAIN",
        captain:captain
    }
}


export const changeSearchTeam = (team) => {
    return{
        type:"SEARCHTEAM",
        team:team
    }
}


export const changeSearchPlayer = (player) => {
    return{
        type:"SEARCHPLAYER",
        player:player
    }
}


export const changeGame = (game) => {
    return{
        type:"GAME",
        game:game
    }
}