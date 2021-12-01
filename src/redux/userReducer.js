import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    user : null,
    isAuth : false,
    
  }
export const userReducer = createSlice({
    name:"person",
    initialState,
    reducers:{
        setCurrentUser: (state,action)=>{
            state.user = action.payload
            state.isAuth = true
        }
    }
})

export const {setCurrentUser} = userReducer.actions; 

export default userReducer.reducer;





