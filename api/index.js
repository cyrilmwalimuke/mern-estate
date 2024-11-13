import express from "express"
import mongoose from "mongoose"
const app = express()
import dotenv from 'dotenv'
dotenv.config()


mongoose.connect(process.env.MONGO).then(()=>console.log("succesfully connected to the database"))
app.listen(3000,()=>{
    console.log('app is running on port 3000')
})