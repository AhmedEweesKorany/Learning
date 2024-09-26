import { useEffect, useState } from 'react'

import './App.css'
import  io from "socket.io-client";
const socket = io.connect("http://localhost:3001");
function App() {
  const [message,setMessage] = useState("");
   const [recieveMessage,setRecieveMessage] = useState(localStorage.getItem("recieveMessage") || []);
 
  const sendMessage = () => {
    socket.emit("sendMessage",{message});
    setMessage("");
  }

  useEffect(()=>{
socket.on("recieveMessage",(data)=>{
  setRecieveMessage([...recieveMessage,data.message]);
  localStorage.setItem("recieveMessage",JSON.stringify(recieveMessage));
})
  },[socket,recieveMessage])
  return (
    <>
     <div>
<input type="text" value={message} placeholder="Message..." onChange={(e)=>setMessage(e.target.value)}/>
<button onClick={sendMessage}>Send a message</button>
     </div>
     <div>
      {recieveMessage.map((message,index)=>(
        <h1 key={index}>{message}</h1>
      ))}
     </div>
    </>
  )
}

export default App
