import React from 'react'
import Button from './Button'

type ChildType = {
    children? : React.ReactNode
}
function Layout({children}:ChildType,) {
  return (
    <div>Layout <br /> 
    
    {children}

    <Button handleClick={(e)=>{console.log(e.target)}}/>
    </div>
  )
}

export default Layout