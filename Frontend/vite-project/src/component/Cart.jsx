import { useCallback, useState } from 'react'
import './Style/cart.css'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from './Slices/Addcart'
import { useEffect } from 'react'

const Cart = () => {
  const [show, setShow] = useState(false)

  const [save, setSave] = useState([])
  const prod = useSelector((state) => state.add.carts)

  const [yes, setYes] = useState(true)

  const dp = JSON.parse(localStorage.getItem("newp"))
  const total = dp?dp.reduce((total, item) => total + item.product.price, 0):""

  const dispatch = useDispatch()

  const dele = (id) => {
    dispatch(remove(id))
    setShow(true)
    location.reload()
  }
  setTimeout(() => {
    setShow(false)
  }, [800])

  useEffect(() => {
    if (yes) {
      setYes(false)
      setSave(JSON.parse(localStorage.getItem("newp")))
    }
  }, [save, yes])

  return (
    <div className='row'>
      {show ? <div className="alert alert-danger" role="alert">
        Item remove From Cart
      </div> : ""}

      <h2 className='text-center'>My Cart</h2>
      <div className="col-lg-8 p-5 bg-white rounded shadow-sm mb-5">
        <div className="table-responsive">
          <table className="table">
            {save && save.length === 0 ?
              <div>
                <h2 className='text-center'>Your Cart Is Empty</h2>
                <div className='text-center'>
                  <img src="https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg?size=626&ext=jpg" className='carti my-2' />
                </div>
              </div> :
              <thead>
                <tr>
                  <th scope="col" className="border-0 bg-light">
                    <div className="p-2 px-3 text-uppercase">Permits</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Price</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Quantity</div>
                  </th>
                </tr>
              </thead>
            }
            <tbody>

              {save && save.map((item) => {
                return (
                  <>
                    <tr key={item.product.id}>
                      <th scope="row" className="border-0">
                        <div className="p-2">
                          <img src={item.product.images[0]} alt="" width="70" className="img-fluid rounded shadow-sm cartimage" />
                          <div className="ml-3 d-inline-block align-middle mx-1">
                            <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{item.product.title}</a></h5>
                            <p >{item.product.description.slice(0, 45)}....</p>
                          </div>
                        </div>
                      </th>
                      <td className="border-0 align-middle"><strong>{item.product.price}$</strong></td>
                      <td className="border-0 align-middle"><strong>1</strong></td>
                      <td className="border-0 align-middle"><a href="#" className="text-dark"><i className="fa fa-trash"></i></a></td>
                      <td className="border-0 align-middle"><img src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" className='icon' onClick={() => { dele(item.product.id) }} /></td>
                    </tr>
                    <hr />
                  </>
                )
              })
              }

            </tbody>
          </table>
        </div>
      </div>
      {/* end */}
      <div className='col-lg-4 box10' >
        <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
        <div className="p-4">
          <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
          <ul className="list-unstyled mb-4">
            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>{total}$</strong></li>
            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Totle</strong>
              <h5 className="font-weight-bold">{total ? total + 10 : 0}$</h5>
            </li>
          </ul><a href="#" className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
        </div>
      </div>
    </div>
  )
}

export default Cart
