/*eslint-disable react/prop-types*/ 
import React,{useEffect,useState} from 'react'
import './Style/main.css'
import {useDispatch ,useSelector} from 'react-redux'
import {cart} from './Slices/Addcart'
import { Link } from 'react-router-dom'


const Data = ({card:card}) => { 
  const exist = useSelector((state)=>state.add.carts)
  const[show,setShow]=useState(false)
const dispatch = useDispatch()

const add = async (item)=>{
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


  return (
    <>
    {show?<div className="alert alert-success" role="alert">
    Item Added to cart
  </div>:""}
    <div className='container mx-2'>
      <h2>All Products</h2>
      <div className='row px- ml-2 prods'>
    { card && card.map((item)=>(
      <div className='px-1 py-1 my-2 mx-5 col-md-3 cardbox' key={item.id}>
      <div className="card" style={{width:"20rem"}}>
      <Link to={`/Detail/${item.id}`} style={{textDecoration:"none",color:"black"}}>
        <div className='text-center my-2'>
  <img src={item.images[0]} className="card-img-top photo2" alt="..."/>
  </div>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description.slice(0,43)}....</p>
    <p>Price:{item.price}$</p>
  </div>
  </Link>
  <button className="btn btn-primary" onClick={()=>{add(item)}}>Add To Cart</button>

</div>
      </div>
    ))
}
</div>
    </div> 
    </>
  )
}

export default Data
