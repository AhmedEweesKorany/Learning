import React from "react"

type ButtonProps = {
    handleClick : (e:React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({handleClick}:ButtonProps)=>{

    return <button onClick={handleClick}>Click</button>
}

export default Button