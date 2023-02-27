const router = require('express').Router();
const Offers = require("../models/Offers")


//REGISTER
router.post("/create",async(req,res)=>{
    try{

    const newOffer = new Offers({
        team:req.body.team,
        player:req.body.player,
        team_id:req.body.team_id,
        player_id:req.body.player_id,
    }) 
 
    const offer = newOffer.save();
    res.status(200).json(offer)
    }catch(err){
     res.status(500).json("error")
    }
})

    router.get("/:player_id",async(req,res)=>{
        try{
         const offer = await Offers.find({ player_id: req.params.player_id }); 
        res.status(200).json(offer)
        }catch(err){
        console.log(err)
        } 
        })

        router.get("/:player_id/:team_id",async(req,res)=>{
            try{
             const offer = await Offers.find({ player_id: req.params.player_id , team_id : req.params.team_id }); 
            res.status(200).json(offer)
            }catch(err){
            console.log(err)
            } 
            })

        router.delete("/:_id",async(req,res)=>{ 
            try{
             const offer = await Offers.findByIdAndDelete( req.params._id );
            res.status(200).json("Deleted")
            }catch(err){
            console.log(err)
            } 
            })

        router.delete("/:player_id/:team_id",async(req,res)=>{ 
                try{
                 const offer = await Offers.deleteOne({ player_id : req.params.player_id , team_id:req.params.team_id });
                res.status(200).json("Deleted")
                }catch(err){
                console.log(err)
                } 
            })


module.exports = router 