import React from 'react'
import Add from '../components/Add'
import Category from '../components/Category'
import View from '../components/View'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigateByUrl=useNavigate()
  return (
    <>
    <div className='container d-flex justify-content-between align-items-center mt-5 mb-5'>
      <div className='add_vdo'>
      <Add />
      </div>
      <div>
      <h3 style={{fontSize:"30px",cursor:"pointer"}} onClick={()=>{navigateByUrl('/watch')}}>Watch History</h3>
      </div>
      
      </div>
      <div className='container d-flex justify-content-between align-items-center mt-5 mb-5'>
        <div className='col-md-6 mt-5'>
          <h4>All Videos</h4>
          <View/>
        </div>
        <div className=''>
          <h4>Add Categories</h4>
          <Category />
        </div>
    </div>
    </>
  )
}

export default Home