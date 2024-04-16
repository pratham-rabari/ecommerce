import React from 'react'
import './Style/main.css'

const Catygory = () => {
  return (
   <>
   <h2 className='text-center my-2'>Our Products</h2>
    <div className='container d-flex my-2 cats'>
      <div className='box1 mt-2'>
        <div className='text'>
         <h4>Men's Clothing</h4>
         </div>
       </div>
      <div className='mx-2 my-2'>
        <div className='box2'>
        <div className='text'>
         <h4>Women's Clothing</h4>
         </div>
         </div>
        <div className='box3 mt-1'>
        <div className='text'>
         <h4>Electronic</h4>
         </div>
        </div>
      </div>
      <div className='mx-2 my-2 cats'>
        <div className='box4'>
        <div className='text'>
         <h4>Jwellery</h4>
         </div>
         </div>
        <div className='box5 mt-1'>
        <div className='text'>
         <h4>Others</h4>
         </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Catygory
