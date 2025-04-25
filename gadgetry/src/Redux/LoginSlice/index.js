import { createSlice } from "@reduxjs/toolkit";

const initialState={
    login:null
}

const LoginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        setlogin(state,action){
            state.login=action.payload
        },
        logout(state){
            state.login=null
        }
    }
})

export const {setlogin,logout} = LoginSlice.actions
export default LoginSlice.reducer