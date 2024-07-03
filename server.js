const express=require('express')
const app=express();
const dotenv=require('dotenv')
const cookieParser=require("cookie-parser");
const mongoose=require('mongoose')
const authRoute=require("./routes/users.js");
const shoesRoute=require("./routes/Shoesroute.js")
const cors=require("cors")

const connect=async()=>{
    try{

        await mongoose.connect(process.env.mongodburl);
        console.log("mongodb connected");
    }catch(err){
        console.log("this is the ",err)
    }
}  
mongoose.connection.on("connected",()=>{
    console.log('Mongodb Connected');
});
mongoose.connection.on("disconnected",()=>{
    console.log("Mongodb disconnected")
}) 

app.use(cors())
dotenv.config({path:"./.env"})
//Middleware
app.use(cookieParser());
app.use(express.json())


app.use("/api/auth",authRoute)
app.use("/api/product",shoesRoute)


app.use((err,req,res,next)=>{
    const errorStatus=err.status||500;
    const errorMessage=err.message||"Somthing went Wrong";
    return res.status(errorStatus).json({
        success:false,
        errorStatus:errorStatus,
        errorMessage:errorMessage,
        Stack:err.Stack

    })
})
app.listen(process.env.Port,()=>{ 
    connect()
    console.log("port is ",process.env.Port)})