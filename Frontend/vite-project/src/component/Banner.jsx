import React from 'react'
import './Style/main.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='container main my-2' style={{height:"350px"}}>
    <div className='row' style={{position:"relative"}}>
      <div className='col-md-6'>
        <div className='mt-5 text-center'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vitae maxime pariatur cum tenetur quasi dolorem consequuntur placeat ea architecto?</p>
        <h1 style={{fontSize:"55px"}}>New Collection</h1>
        <Link to="/Product"><button className='btn btn-info'>Shop Now</button></Link>
        </div>
      </div>
      <div className='col-md-6 tops'>
 <img src="https://images.unsplash.com/photo-1568306281824-7afe898030d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D" className='pic text-center'/>
      </div>
    </div>
    </div>
  )
}

export default Banner
