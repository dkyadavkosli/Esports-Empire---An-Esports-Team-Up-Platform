const mongoose = require('mongoose');

const Offers = new mongoose.Schema({
    team:{
        type:String,
        require:true,
        min:3,
        max:25
    },
    player:{
        type:String,
        require:true
    },
    team_id:{
        type:String,
        require:true
    },
    player_id:{
        type:String,
        default:""
    }, 
},
{timestamps:true}); 

module.exports = mongoose.model("Offers",Offers);