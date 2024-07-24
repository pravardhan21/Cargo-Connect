const express=require('express')
const { default: mongoose } = require('mongoose')
const app=express()
const cors=require('cors')
require('dotenv').config()
const truckroute=require('./routes/trucker')
const providerroute=require('./routes/provider')
app.use(cors())
const trucker=require('./models/trucker')
const provider=require('./models/provider')
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello")
})
app.use('/trucker',truckroute)
app.use('/provider',providerroute)

const connect=async()=>{
    try {
        await mongoose.connect(process.env.URL)
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
    }

    app.listen(3001,()=>{
        connect()
        console.log("Server is listening!!!")
    })