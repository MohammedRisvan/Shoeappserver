const express=require("express");
const Router=express.Router()
const Shoescontrolls=require('../conttrollers/shoe');
//addShoesproduct
Router.post("/shoe",Shoescontrolls.AddShoe);
//update Shoesproduct
Router.put("/shoe/:id",Shoescontrolls.UpdateShoe)
//Get Full Shoes
Router.get("/shoes",Shoescontrolls.GetShoes);
//Get OneShoe
Router.get("/shoe/:id",Shoescontrolls.GetOneShoe)


module.exports=Router