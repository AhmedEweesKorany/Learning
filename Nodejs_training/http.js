const http = require("http")
const listenPort = 4010

const server = http.createServer((req,res)=>{

    res.end("hello world")
}).listen(listenPort)

server.on("clientError",(err,socket)=>{
    socket.end("error 400 : Bad request")
})