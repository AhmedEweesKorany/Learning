import React, { useState } from 'react'


type User = {
    name : string;
    age:number;
}
function Styles({styles}:{styles : React.CSSProperties}) {
    const [data,setData] = useState({} as User)
  return (
    <>
    
    <div style={styles}>Styles</div>
    <button onClick={()=>{ setData({name:"ahmed",age:22})}}>login</button>
    <button onClick={()=>{ setData({} as User)}}>login</button>

    <h1>{data.age}</h1>
    <h1>{data.name}</h1>
    </>
  )
}

export default Styles