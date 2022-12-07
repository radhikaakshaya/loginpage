import React from 'react'
import { useState } from 'react'
import Component2 from './Component2'

const Component1 = () => {
    const [list,setList]=useState('Techhub')
  return (
    <div>
        <Component2 list={list} setList1={setList}/>
    </div>

  )
}

export default Component1