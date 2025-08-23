const express =require('express');
const app =express();
const {Server}=require('socket.io');

const http=require('http');
const server=http.createServer(app);
const io = new Server(server);

const env=require('dotenv').config();

const myRoute=require('./routes/myRoute')


app.use(myRoute);
app.use(express.static('frontend'))
io.on('connection',(socket)=>{
    console.log("User Connected");
    socket.on('disconnect',()=>{
        console.log("User Disconnected");
        
    })
    
})

server.listen(process.env.PORT,()=>{
    console.log("Running on port 3000");
    
})
