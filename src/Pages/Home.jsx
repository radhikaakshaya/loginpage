import React from 'react'
import SideNav from './SideNav'
import {Routes,Route} from 'react-router-dom'
import About from './About'
import Approval from './Approval'

const Home = () => {
  return (
    <div className='flex gap-4 w-full'>
<div className='w-1/5 bg-green-400'>
  <SideNav/>
</div>
<div className='w-4/5 bg-blue-400'>
<Routes>
  <Route path='/about' element={<About/>}/>
  <Route path='/approval' element={<Approval/>}/>
</Routes>
</div>
    </div>
  )
}

export default Home