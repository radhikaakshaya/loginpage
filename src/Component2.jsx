import React from 'react'
import { useState } from 'react'
import Component3 from './Component3'

const Component2 = ({list,setList1}) => {
    const [demo,setDemo]=useState('Component2value')
  return (
    <>
     <div>Component2</div>
     <h2>{list}</h2>
     <button onClick={()=>setList1('Radhika Techhub')}>change</button>
     <h3>{list}</h3>
     <Component3 demo={demo} list={list}/>
    </>
   
  )
}

export default Component2