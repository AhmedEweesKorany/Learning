import React from "react"


type Props = {
    arrData : {
        name:string,
        age:number
    }[]
}
const SayHello = ({arrData}:Props) => {
  return (
    arrData.map(item => <div>hello {item.name} your age is {item.age}</div>)
  )
}

export default SayHello