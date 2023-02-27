const router = require('express').Router();
const Resume = require("../models/Resume")


//REGISTER
router.post("/create",async(req,res)=>{
    try{

    const newResume = new Resume({
        username:req.body.username,
        userId:req.body.userId,
        in_game_name:req.body.in_game_name,
        in_game_id:req.body.in_game_id,
        role:req.body.role,
        f_d:req.body.f_d, 
        game:req.body.game,
        curr_tier:req.body.curr_tier,
        best_tier:req.body.best_tier,
        searching_team:req.body.searching_team,
        phone:req.body.phone,
        email:req.body.email,
        address:req.body.address,
        age:req.body.age,
        desc:req.body.desc,
        instagram:req.body.instagram,
        facebook:req.body.facebook,
        discord_tag:req.body.discord_tag
    }) 
 
        const resume = newResume.save();
        res.status(200).json(resume)
    }catch(err){
     res.status(500).json("error")
    }
})


router.put("/id/:id",async(req,res)=>{
    try{   
        const resume = await Resume.findByIdAndUpdate(req.params.id,{
            $set:req.body, 
        })
        res.status(200).json("Account has been updated")
    }catch(e){
        console.log(e)
    }
}
)  

//getting
router.get("/userId/:userId",async(req,res)=>{
try{
 const resume = await Resume.findOne({ userId: req.params.userId }); 
res.status(200).json(resume)
}catch(err){
console.log(err)
}
})


router.get("/:username",async(req,res)=>{
    try{
     const resume = await Resume.find({ username: req.params.username }); 
    res.status(200).json(resume)
    }catch(err){
    console.log(err)
    }
    })

    router.get("/id/:id",async(req,res)=>{
        try{
         const resume = await Resume.findOne({ _id: req.params.id }); 
        res.status(200).json(resume)
        }catch(err){
        console.log(err)
        } 
        }) 

        router.get("/search/:name",async(req,res)=>{
            try{
             const resume = await Resume.find({ in_game_name: req.params.name }); 
            res.status(200).json(resume)
            }catch(err){
            console.log(err)
            } 
            })

    router.get("/team/:team_id",async(req,res)=>{
        try{
         const resume = await Resume.find({ team_id: req.params.team_id }); 
        res.status(200).json(resume)
        }catch(err){
        console.log(err)
        }
        
    }) 


//getting
router.get("/all/:game",async(req,res)=>{
    try{
     const resume = await Resume.find({game : req.params.game}); 
    res.status(200).json(resume)
    }catch(err){
    console.log(err)
    }
    }) 

//getting
router.get("/find/:role/:tier/:game",async(req,res)=>{
    try{
     const resume = await Resume.find({ role: req.params.role , curr_tier: req.params.tier , game:req.params.game}); 
    res.status(200).json(resume)
    }catch(err){
    console.log(err)
    }
    })


module.exports = router 