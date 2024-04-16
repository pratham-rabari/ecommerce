import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { cart } from './Slices/Addcart'
import { useDispatch, useSelector } from 'react-redux'
import './Style/main.css'
import { Link } from 'react-router-dom'

const Top = () => {
  const [card, setCard] = useState([])
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()
  const fetch = async () => {
    const res = await axios.get("https://dummyjson.com/products?limit=8")
    setCard(res.data.products)
  }

  const exist = useSelector((state) => state.add.carts)

  const add = async (item) => {
    const find = exist.find((pro) => pro.product.id === item.id)
    if (find) {
      return alert("item alredy exist in cart")
    }
    else {
      dispatch(cart(item))
      setShow(true)

    }
  }
  setTimeout(() => {
    setShow(false)
  }, [800])
  useEffect(() => {
    fetch()
  }, [])

  return (
    <>
      {show ? <div className="alert alert-success" role="alert">
        Item Added to cart
      </div> : ""}
      <div className='container my-3'>
        <h2 className='text-center'>Top Products</h2>
        <div className='row px- ml-2 prods'>
          {card && card.map((item) => (
            <div style={{ width: "19rem", borderRadius: "12px" }} className='px-1 py-1 my-2 mx-2 col-md-3' key={item.id}>
              <div className="card boxa" style={{ width: "18rem" }}>
                <Link to={`/Detail/${item.id}`} style={{ textDecoration: "none", color: "black" }}>
                  <img src={item.images[0]} className="card-img-top photo" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description.slice(0, 43)}....</p>
                    <p>Price:{item.price}$</p>
                  </div>
                </Link>
                <a href="#" className="btn btn-primary" onClick={() => { add(item) }}>Add to Cart</a>

              </div>

            </div>
          ))
          }
        </div>
      </div>
    </>
  )
}

export default Top
