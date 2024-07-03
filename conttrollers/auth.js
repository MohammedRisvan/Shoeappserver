const Users=require("../model/User");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const {createError} =require("../utils/error");


//User Signup
const Signup=async(req,res,next)=>{
try{
    const {username,email}=req.body
    const check=await Users.findOne({username:username}||{email:email})
    if(check){return next(createError(403,"email or username already existed"))}
}catch(err){
next(err)
}
}


//User Register
const register=async(req,res,next)=>{
    
    try{
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(req.body.password,salt)
        const newUser=new Users({
            username:req.body.username,
            email:req.body.email,
            password:hash
        })
        await newUser.save();
        res.status(200).send("User has been created")
    }catch(err){
        next(err)
    }
}

// UserLogin
const login=async(req,res,next)=>{

try{
    const user=await Users.findOne({username:req.body.username});
    if(!user){return next(createError(404,"User Not Found!"))}
    const truePassword=await bcrypt.compare(req.body.password,user.password)
    if(!truePassword){return next(createError(400,"Wrong username or password!"))}
    const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT,{expiresIn: '1h' });
    const {password,isAdmin,...othersDetailes}=user._doc;
    return res.cookie("shoeshopeaccess_token",token);
}
catch(err){  
    next(err)}
}

module.exports={
    Signup,
    register,
    login
}
