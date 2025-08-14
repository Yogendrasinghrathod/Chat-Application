const express= require('express');
const app=express();
const http=require('http');
const server=



app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})


app.listen(2001,()=>{
    console.log("Application running")
})
