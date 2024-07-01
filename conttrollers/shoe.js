const Shoe = require("../model/Shoe");
const Shoes=require("../model/Shoe");




//Add Shoe
const AddShoe=async(req,res,next)=>{
    try{
        const shoe= new Shoe(req.body)
    const saveShoes=await shoe.save()
        res.status(200).json({success:true,saveShoes})
    }catch(err){next(err)}
}


//update Shoes
const UpdateShoes=async(req,res,next)=>{
try{
    const UpdateShoes=await Shoes.findByIdAndUpdate(
        req.params.id,
        {$set:req.body},
        {new:true}
    )
    res.status(200).json(UpdateShoes);
}catch(err){next(err)}
}

//Delete Shoes
const DeleteShoes=async(req,res,next)=>{
    try{
        const deletedShoe=await Shoes.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message:"Shoe product is deleted",
            deletedShoe
        })
    }catch(err){next(err)}
}

//Get all Shoes
const GetShoes=async(req,res,next)=>{
try{
    const allShoes=await Shoes.find();
    res.status(200).json({
        success:true,
        allShoes
    })
}
catch(err){next(err)}
} 

//Get a specifc shoe
const GetOneShoe=async(req,res,next)=>{
try{

}catch(err){
    next(err)
}
}


module.exports={
    GetShoes,
    GetOneShoe,
    AddShoe,
    UpdateShoes
}