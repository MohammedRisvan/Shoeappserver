const multer=require("multer");

const storage=multer.diskStorage({
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
});

const fileFilter=(req,file,cb)=>{
    if(file.minetype==='image/jpeg'||file.minetype==='image/png'){
        cb(null,true)
    }else{
        cb({message:'unsupported File Format'},false)
    }
}

const upload=multer({
    storage:storage,
    limits:{fileSize:1024*1024},
    fileFilter:fileFilter
})

module.exports=upload;