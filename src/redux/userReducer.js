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
        },
        updateUser: (state,action)=>{
            if(state.user){
                state.user.fundsAvailable = state.user.fundsAvailable + action.payload;
            }
        },
        setUser: (state,action)=>{
            state.user = { ...state.user , ...action.payload }
        },
        updateEditedUser: (state,action)=>{
            const { name, proffession,dob,phone } = action.payload;
            // take the funds available
            if(name){
                state.user.name = name;
            }
            if(proffession){
                state.user.proffession = proffession;
            }
            if(dob){
                state.user.dob = dob;
            }
            if(phone){
                state.user.phone = phone;
            }

        }
    }
})

export const {setCurrentUser,updateUser,setUser,updateEditedUser} = userReducer.actions; 

export default userReducer.reducer;





