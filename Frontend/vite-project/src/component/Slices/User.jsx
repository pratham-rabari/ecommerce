import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 user:""
}

export const userSlice = createSlice({
  name:'users',
  initialState,
  reducers: {
           create:(state,action)=>{
                   state.user = action.payload
           }
          
  },
})

// Action creators are generated for each case reducer function
export const {create} = userSlice.actions

export default userSlice.reducer