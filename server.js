const express=require('express')
const app=express();
const dotenv=require('dotenv')
const cookieParser=require("cookie-parser")


app.use(cookieParser())

dotenv.config({path:"./.env"})

app.listen(process.env.Port,()=>{console.log("port is ",process.env.Port)})