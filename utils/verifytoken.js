const { createError } = require("../../api/utils/error");
const Users=require("../model/User");
const jwt =require('jsonwebtoken')
const verifyUser=(req,res,next)=>{
const token=req.cookies.access_token;
if(!token){
    return next(createError(403,"You are not authenticated"));
}
jwt.verify(token,process.env.JWT)
}