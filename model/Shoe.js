const mongoose=require("mongoose");

const ShoeSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    images:[{
        typ:String,
        required:true
    },],
    price:{
        type:Number,
        required:true,
    },
   
});
module.exports=mongoose.model("Shoes",ShoeSchema)