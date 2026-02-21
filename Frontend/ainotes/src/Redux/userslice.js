import { createSlice } from "@reduxjs/toolkit";
const userSlice=createSlice({
    name:"user",
    initialState:{
    userData:null
    },
    reducers:{
     setuserData:(state,actions)=>{
     state.userData=actions.payload
     },
     updateCredits:(state,actions)=>{
          if(state.userData){
            state.userData.credits=actions.payload
          }
     }
    }
})

export const {setuserData,updateCredits}=userSlice.actions
export default userSlice.reducer