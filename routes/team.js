const router = require('express').Router();
const Team = require("../models/Team")
const bcrypt = require('bcrypt')


//REGISTER
router.post("/create",async(req,res)=>{
    try{
    //for hashing password 
    const first = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,first)

    const newTeam = new Team({
        name:req.body.name,
        captain_id:req.body.captain_id,
        captain_name:req.body.captain_name,
        captain_phone:req.body.captain_phone,
        captain_email:req.body.captain_email,
        game:req.body.game,
        logo:req.body.logo,
        recruiting:req.body.recruiting,
        desc:req.body.desc,
        role_required : req.body.role_required,
        instagram:req.body.instagram,
        facebook:req.body.facebook,
        discord_channel:req.body.discord_channel,
        country:req.body.country,
        password:hashedPassword
    })
 
        const team = newTeam.save();
        res.status(200).json(team)
    }catch(err){
     res.status(500).json(err)     
    } 
})


router.put("/:id",async(req,res)=>{
    try{
        const table = await Team.findByIdAndUpdate(req.params.id,{
            $set:req.body, 
        })
        res.status(200).json("Account has been updated")
    }catch(e){
        res.status(500).json(err)
    }    
} 
) 

router.post('/join',async(req,res)=>{
    try{
    const team = await Team.findOne({_id:req.body._id});
    !team && res.status(404).json("Error");

    const correctPassword = await bcrypt.compare(req.body.password,team.password);
    !correctPassword && res.status(404).json("Error");

     res.status(200).json("Yes") 
    }catch(err){
        res.status(500).json(err)
    }
})

//getting
router.get("/:_id",async(req,res)=>{
try{ 
 const table = await Team.findOne({ _id: req.params._id }); 
res.status(200).json(table)
}catch(err){
    res.status(500).json(err)
}
})

router.get("/search/:name",async(req,res)=>{
    try{
     const table = await Team.find({ name: req.params.name }); 
    res.status(200).json(table)
    }catch(err){
        res.status(500).json(err)
    }
    })

router.get("/captain/:captain_id",async(req,res)=>{
    try{
     const table = await Team.findOne({captain_id: req.params.captain_id }); 
    res.status(200).json(table)
    }catch(err){
        res.status(500).json(err)
    } 
    })


//getting
router.get("/all/:game",async(req,res)=>{
    try{
     const table = await Team.find({ game : req.params.game }); 
    res.status(200).json(table)
    }catch(err){
        res.status(500).json(err)
    }
    })

//getting
router.get("/name",async(req,res)=>{
    try{
     const table = await Team.find({ name: req.body.name }); 
    res.status(200).json(table)
    }catch(err){
         res.status(500).json(err)
    }
    })


//getting
router.get("/find/:game/:role",async(req,res)=>{
    try{
     const table = await Team.find({ game: req.params.game , role_required: req.params.role }); 
    res.status(200).json(table)
    }catch(err){
         res.status(500).json(err)
    }
    })


module.exports = router 