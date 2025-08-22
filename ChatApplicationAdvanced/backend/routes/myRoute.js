const express=require('express')

const myRoute=express.Router();

myRoute.get('/',(req,res)=>{
    var dir=__dirname.replace(/\\/g, '/');;
    dir=dir.slice(0,-14);
    res.sendFile(dir+'/frontend/index.html')
    
})

module.exports=myRoute;