const express= require('express');
const app=express();
const http=require('http');


const{Server}=require('socket.io');
const server=http.createServer(app);
const io = new Server(server);



app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

io.on('connection', (socket) => {
    console.log('A user connected',socket.id);
    socket.on('disconnected',()=>{
        console.log('A user is Disconnected',socket.id);
    })
   
});

server.listen(2001,()=>{
    console.log("Application running")
})
