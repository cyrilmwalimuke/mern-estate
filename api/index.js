import express from "express"
import mongoose from "mongoose"
const app = express()
import dotenv from 'dotenv'
import userRouter from "./routes/user.router.js"
import authRouter from "./routes/auth.router.js"
dotenv.config()


mongoose.connect(process.env.MONGO).then(()=>console.log("succesfully connected to the database"))
app.listen(3000,()=>{
    console.log('app is running on port 3000')
})
app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
app.use((rer,res,err,next)=>{
    const statusCode  = err.statusCode || 500
    const message = err.message || "internal server error"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    
    })
})
