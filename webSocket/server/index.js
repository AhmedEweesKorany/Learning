const express = require('express');
const app = express();
const http = require("http");
const cors = require("cors");
const {Server} = require("socket.io");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"],
    }
}); 

io.on("connection",(socket)=>{
    console.log(`user ${socket.id} has connected`);

    socket.on("sendMessage",(data)=>{
        console.log(data);
        socket.broadcast.emit("recieveMessage",data);
    });
}); 


server.listen(3001,()=>{
    console.log("SERVER IS RUNNING");
});

