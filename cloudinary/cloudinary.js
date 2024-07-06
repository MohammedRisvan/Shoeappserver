const cloudinary=require('cloudinary').v2;
cloudinary.config({
    cloud_name:process.env.cloudinary_Name,
    api_key:process.env.cloudinary_api_key,
    api_secret:process.env.cloudinary_api_secretkey
});

exports.uploads=(file,folder)=>{
    return new Promise(resolve=>{
        cloudinary.uploader.upload(file,{result}=>{
            resolve({
                url:result.url,
                id:result.public_id
            })
        },{
            resource_type:"auto",
            folder:folder 
        })
    })
}