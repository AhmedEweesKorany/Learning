import React from 'react'
import Button from './Button'

type ChildType = {
    children? : React.ReactNode
}
function Layout({children}:ChildType,) {
  return (
    <div>
    
    {children}

    </div>
  )
}

export default Layout