import React from 'react'
import './Style/main.css'

const Demo = () => {
  return (
<div className='container my-2'>
    <div className='row' style={{border:"3px solid black"}}>
      <div className='col-md-4 text-center' style={{border:"2px solid black"}}>
        <img src="https://cdn-icons-png.flaticon.com/128/6831/6831000.png" className='icon'/>
        <h4>Free Shipping on Time</h4>
      </div>
      <div className='col-md-4 text-center' style={{border:"2px solid black"}}>
      <img src="https://cdn-icons-png.flaticon.com/128/5469/5469919.png" className='icon'/>
        <h4>3o Days Retuen</h4>
     </div>
     <div className='col-md-4 text-center' style={{border:"2px solid black"}}>
     <img src="https://cdn-icons-png.flaticon.com/128/2058/2058414.png" className='icon'/>
        <h4>100% payment secure</h4>
    </div>
  </div>
</div> 
  )
}

export default Demo
