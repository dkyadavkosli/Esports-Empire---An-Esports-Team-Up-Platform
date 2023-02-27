const router = require('express').Router();
const Applications = require("../models/Applications")


//REGISTER
router.post("/create",async(req,res)=>{
    try{

    const newApplication = new Applications({
        team:req.body.team,
        player:req.body.player,
        team_id:req.body.team_id,
        player_id:req.body.player_id,
    }) 
 
    const application = newApplication.save();
    res.status(200).json(application)
    }catch(err){
     res.status(500).json("error")
    }
})

    router.get("/:team_id",async(req,res)=>{
        try{
         const application = await Applications.find({ team_id: req.params.team_id }); 
        res.status(200).json(application)
        }catch(err){
        console.log(err)
        } 
        })

        router.get("/:team_id/:player_id",async(req,res)=>{
            try{
             const application = await Applications.find({ team_id: req.params.team_id , player_id : req.params.player_id }); 
            res.status(200).json(application)
            }catch(err){
            console.log(err)
            } 
            })

        router.delete("/:_id",async(req,res)=>{
            try{
             const application = await Applications.findByIdAndDelete( req.params._id );
            res.status(200).json("Deleted")
            }catch(err){
            console.log(err)
            } 
            })

            router.delete("/:player_id/:team_id",async(req,res)=>{
                try{
                 const application = await Applications.deleteOne( {player_id:req.params.player_id , team_id : req.params.team_id} );
                res.status(200).json("Deleted")
                }catch(err){
                console.log(err)
                } 
                })


module.exports = router 