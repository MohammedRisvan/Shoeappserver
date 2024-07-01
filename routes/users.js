const express=require("express");
const Router=express.Router();
const auth=require("../conttrollers/auth");


Router.get("/",auth.Signup)
Router.post("/register",auth.register)
Router.post("login",auth.login);


module.exports= Router;