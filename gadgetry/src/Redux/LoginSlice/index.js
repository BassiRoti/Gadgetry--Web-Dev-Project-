import { createSlice } from "@reduxjs/toolkit";

const initialState={
    login: JSON.parse(localStorage.getItem('user')) || null,
}

const LoginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        setlogin(state,action){
            state.login=action.payload
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        logout(state){
            state.login=null
            localStorage.removeItem('user'); 
        }
    }
})

export const {setlogin,logout} = LoginSlice.actions
export default LoginSlice.reducer