import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FunctionalComponent = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
console.log("Component did mount")
    },[])
    useEffect(()=>{
        if(count!==0){
            console.log("Component did update")
        }

    },[count])
    useEffect(()=>{
return ()=>{
    console.log("Component will unmount")
}
    },[])
  return (
    <div>
        {/* <h1>FunctionalComponent</h1> */}
        <h2>count value is {count}</h2>
        <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}

export default FunctionalComponent