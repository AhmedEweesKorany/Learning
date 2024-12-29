import React from "react"


type StatusProps = {
    status : "loading" | "success" | "error";
}
function Status({status}:StatusProps) {
    let message ; 

    if(status === "loading"){
        message = "loading ... "   
    }
    else if (status === "success"){
        message = "success"
    } else if (status == "error"){
        message = "Error fetching data"
    }else{
        message = "internal server error"

    }
    
  return (
    <div>
<h1>{message}</h1>

    </div>
  )
}

export default Status