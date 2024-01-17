import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Style/main.css'
import {cart} from './Slices/Addcart'
import Demo from './Demo'
import { useDispatch ,useSelector} from 'react-redux'

const Detail = () => {
 const[detail,setDetail]=useState()
 const[show,setShow]=useState(false)

const {id} = useParams()
console.log(id)

const data = async()=>{
const res = await axios.get(`https://dummyjson.com/products/${id}`)
console.log(res.data)
setDetail(res.data)
console.log("detd",detail)
}
const dispatch = useDispatch()
const exist = useSelector((state)=>state.add.carts)

const add = async(item)=>{
  localStorage.setItem("product",JSON.stringify(item))
  const find = exist.find((pro)=>pro.product.id === item.id)
  if(find){
    return alert("item alredy exist in cart")
  }
  else{
    dispatch(cart(item))
    setShow(true)
 }
}

setTimeout(()=>{
  setShow(false)
},[800])

useEffect(()=>{
data()
},[id])
  return (
    <>
        {show?<div className="alert alert-success" role="alert">
    Item Added to cart
  </div>:""}
    <div className='row bigbox' style={{height:"100%"}}>
  <div className='col-md-8 d-flex justify-content-center'>
    <div id="carouselExampleIndicators" className="carousel slide boxx my-4 ">
     <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
  <div className="carousel-inner text-center mx-3 my-3 dp">
    <div className="carousel-item active">
      <img src={detail?detail.thumbnail:""} className="d-block w-100 bigimage" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={detail?detail.images[1]:"bn"} className="d-block w-100 bigimage" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={detail?detail.images[2]:""} className="d-block w-100 bigimage" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

</div>


  </div>

  
  <div className='col-md-4 rect'>
  <div className='' style={{border:"2 px solid red"}}>
      <div className='mx-2 my-2'>
      <h2 className='my-4'>Name:{detail?detail.title:""}</h2>
        <h2 className='my-4'>Price:{detail?detail.price:""}$</h2>
        <h2 className='my-4'>Rating:{detail?detail.rating:""}*</h2>
        <h2 className='my-4'>Catygory:{detail?detail.category:""}</h2>
        <h3 className='my-4'>desc:{detail?detail.description:""}</h3>
        <button className='btn btn-info my-4' style={{width:"100%"}} onClick={()=>{add(detail)}}>Add to Cart</button>
      </div>
  </div>
  </div>
    </div>
    <div className='my-5'>
    <Demo className='my-4'/>
    </div>
</>
  )
}

export default Detail
