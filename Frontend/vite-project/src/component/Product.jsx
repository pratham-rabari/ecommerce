import React, { useEffect, useState } from 'react'
import './Style/Side.css'
import Data from './Data'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { cart } from './Slices/Addcart'

import { useDispatch, useSelector } from 'react-redux'




const Product = () => {
  const [input, setInput] = useState("")
  const [search, setSearch] = useState("")
  const [fil, setFil] = useState([])
  const [active, setActive] = useState(false)

  const adding = (val) => {
    setInput(val)
  }
  const [card, setCard] = useState([])

  // const state =useSelector((state) => state.add.title)
  const fetch = async () => {
    if (input === "") {
      const res = await axios.get(`https://dummyjson.com/products?limit=100`)
      setCard(res.data.products)
    }
    else {
      const res = await axios.get(`https://dummyjson.com/products/category/${input}`)
      setCard(res.data.products)
    }

  }

  useEffect(() => {
    fetch()
  }, [input])

  const itemm = card.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    setFil(itemm)
    if (itemm.length === 0) {
      console.log("no found")

    }

  }, [search])

  const exist = useSelector((state) => state.add.carts)

  const dispatch = useDispatch()

  const add = async (item) => {
    const find = exist.find((pro) => pro.product.id === item.id)
    if (find) {
      return alert("item alredy exist in cart")
    }
    else {
      dispatch(cart(item))
      alert("item added to cart")


    }

  }
  return (
    <>
      {/* <input placeholder='seatch' className='text-center' value={search} onChange={(e)=>{setSearch(e.target.value)}}/> */}
      <div className='row'>
        <div className='col-md-2 dnone' style={{ display: active ? "block" : "", zIndex: active ? "1" : "" }}>
          <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
            <ul className="nav flex-column text-white w-100">
              <h2 className='my-2 mx-2'>Catygory</h2>
              {active ? <div style={{ position: "absolute", right: "4px" }} className='mx-2 my-2'>
                <button className='btn btn-danger' onClick={() => { setActive(false) }}>X</button>
              </div> : ""}
              <li href="#" className="nav-link">
                <i className="bx bxs-dashboard"></i>
                <span className="mx-2 cursor" onClick={() => adding("mens-shirts")}>Men's clothing</span>
              </li>
              <li href="#" className="nav-link">
                <i className="bx bx-user-check"></i>
                <span className="mx-2 cursor" onClick={() => adding("womens-dresses")}>Women's clothing</span>
              </li>
              <li href="#" className="nav-link">
                <i className="bx bx-conversation"></i>
                <span className="mx-2 cursor" onClick={() => adding("laptops")}>Electrics</span>
              </li>
              <li href="#" className="nav-link">
                <i className="bx bx-conversation"></i>
                <span className="mx-2 cursor" onClick={() => adding("womens-jewellery")}>Jwellory</span>
              </li>
              <li href="#" className="nav-link">
                <i className="bx bx-conversation"></i>
                <span className="mx-2 cursor" onClick={() => adding("smartphones")}>Smartphones</span>
              </li>
              <li href="#" className="nav-link">
                <i className="bx bx-conversation"></i>
                <span className="mx-2 cursor" onClick={() => adding("mens-shoes")}>Mens-shoes</span>
              </li>
              <li href="#" className="nav-link">
                <i className="bx bx-conversation"></i>
                <span className="mx-2 cursor" onClick={() => adding("sunglasses")}>Sunglasses</span>
              </li>
              <li href="#" className="nav-link">
                <i className="bx bx-conversation"></i>
                <span className="mx-2 cursor" onClick={() => adding("")}>All Products</span>
              </li>
            </ul>

            <span href="#" className="nav-link h4 w-100 mb-5">
              <a href=""><i className="bx bxl-instagram-alt text-white"></i></a>
              <a href=""><i className="bx bxl-twitter px-2 text-white"></i></a>
              <a href=""><i className="bx bxl-facebook text-white"></i></a>
            </span>
          </div>
        </div>

        

        <div className='col-md-10 container' style={{ zIndex: active ? "-1" : "" }}>
          <div>
          <div className="contenir">
            <input type="text" className="search my-3" id="search-inp" placeholder="Search..." value={search} onChange={(e) => { setSearch(e.target.value) }} />
            <button className="search-btn" id="search-inp-btn">&#x027A4;</button>
          </div>
          <span><button className='btn btn-info btpop' onClick={() => { setActive(true) }}>Catygories</button></span>
          </div>

          <h2 className='text-center'>{itemm.length === 0 ? "Item Not Found" : ""}</h2>

          {search ? <div className='row px- ml-2'>
            {fil.map((item) => (
              <div className='px-1 py-1 my-2 mx-5 col-md-3 cardbox' key={item.id}>
                <div className="card" style={{ width: "20rem" }}>
                  <Link to={`/Detail/${item.id}`} style={{ textDecoration: "none", color: "black" }}>
                    <div className='text-center my-2'>
                      <img src={item.images[0]} className="card-img-top photo2" alt="..." />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description.slice(0, 43)}....</p>
                      <p>Price:{item.price}$</p>
                    </div>
                  </Link>
                  <button className="btn btn-primary" onClick={() => { add(item) }}>Add To Cart</button>

                </div>
              </div>
            ))
            }
          </div> : <Data card={card} setcard={setCard} />

          }
        </div>
      </div>

    </>
  )
}

export default Product
