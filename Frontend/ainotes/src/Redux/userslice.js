import { createSlice } from "@reduxjs/toolkit";
const userSlice=createSlice({
    name:"user",
    initialState:{
    userData:null
    },
    reducers:{
     setuserData:(state,actions)=>{
     state.userData=actions.payload
     }
    }
})

export const {setuserData}=userSlice.actions
export default userSlice.reducer