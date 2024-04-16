import Home from "./component/Home"
import Product from "./component/Product"
import Nav from './component/Nav'
import Cart from './component/Cart'
import Detail from "./component/Detail"


import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
      <Nav className='position-sticky'/>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Product" element={<Product/>}/>
<Route path="/Cart" element={<Cart/>}/>
<Route path="/Detail/:id" element={<Detail style={{backgroundColor:"white"}}/>}/>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
