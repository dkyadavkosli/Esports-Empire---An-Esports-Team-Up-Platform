const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const entryRoute = require('./routes/entry');
const resumeRoute = require('./routes/resume');
const teamRoute = require('./routes/team');
const OffersRoute = require('./routes/offers');
const ApplicationsRoute = require('./routes/applications');


dotenv.config();

const DB = process.env.MONGO_URL;

const PORT = 5000;

mongoose.connect(DB).then(()=>{
    console.log("Success")
}).catch((err)=>{
    console.log("Error")
});

app.use(express.json());

app.use("/api/entry" , entryRoute)
app.use("/api/resume" , resumeRoute)
app.use("/api/team" , teamRoute)
app.use("/api/offers" , OffersRoute)
app.use("/api/applications" , ApplicationsRoute)

if(process.env.NODE_ENV=='production'){
    const path = require('path')

    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'client','build')))
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT,()=>{
    console.log("Backend is running")
})

