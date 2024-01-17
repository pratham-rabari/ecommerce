import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 carts:[]
}

export const counterSlice = createSlice({
  name:'add',
  initialState,
  reducers: {
          cart:(state,action)=>{
          const arr  = JSON.parse(localStorage.getItem("newp") || '[]')
             const cart = {
                product:action.payload
             }
             state.carts.push(cart)
             arr.push(cart)
             localStorage.setItem("newp",JSON.stringify(arr))
            } , 
          remove:(state,action)=>{
            const arr  = JSON.parse(localStorage.getItem("newp"))
            const arr2= arr.filter(function(elen){
             return elen.product.id !== action.payload
            })
           console.log(arr2)
        localStorage.setItem("newp",JSON.stringify(arr2))
        //    state.carts=state.carts.filter((todo)=>{
        //     todo.id !== action.payload
        // })
          }
  },
})

// Action creators are generated for each case reducer function
export const {cart,remove} = counterSlice.actions

export default counterSlice.reducer