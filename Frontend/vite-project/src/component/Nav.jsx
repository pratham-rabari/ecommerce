import React, { useState } from 'react'
import './Style/main.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Nav = () => {
  const User = useSelector((state)=>state.users.user)
  return (
    <div className='position-stickey b'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src='https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-happy-shopping-logo-template_467913-990.jpg?size=626&ext=jpg&ga=GA1.1.750386880.1702900078&semt=ais' className='logo'/>
    <a className="navbar-brand mx-2" href="#"><h5>SnoopStore</h5></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Product" className="nav-link">product</Link>
        </li>
      </ul>
    </div>
  </div>
  <div className='d-flex'>
    <Link to="/Login">
    <button className='btn btn-info mx-3'>{User?"Logout":"Login"}</button>
    </Link>
    {/* <Link to="/Profile">
    <span><img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" className='cart mx-2'/></span>
    </Link> */}
    <Link to="/Cart">
    <span><img src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png" className='cart mx-3'/></span>
    </Link>
  
  </div>
</nav>
    </div>
  )
}

export default Nav
