import express from 'express';
import mongoose from 'mongoose'
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("database is working");
})

const app= express();
app.listen(5000, ()=>{
  console.log("server is running")
})
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/auth',authRouter);