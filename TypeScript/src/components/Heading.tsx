import React from 'react'


type ChildProps = {
    children : string
}
function Heading({children}:ChildProps) {
  return (
    <div>{children}</div>
  )
}

export default Heading