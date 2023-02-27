const router = require('express').Router();
const User = require("../models/User")
const bcrypt = require('bcrypt')


//REGISTER
router.post("/register",async(req,res)=>{
    try{
    //for hashing password 
    const first = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,first)

    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:hashedPassword
    })    

        const user = newUser.save();
        res.status(200).json(user)
    }catch(err){   
     res.status(500).json(err)
    } 
})
 
//LOGIN
router.post('/login',async(req,res)=>{
    try{  
    const user = await User.findOne({email:req.body.email});
    !user && res.status(404).json("User not found");

    const correctPassword = await bcrypt.compare(req.body.password,user.password);
    !correctPassword && res.status(400).json("User not found");

    res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router 