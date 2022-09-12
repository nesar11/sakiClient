import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser: null,
        isFetching:false,
        error: false
      
    },
    reducers:{
        loginStart:(state) =>{
            state.isFetching = true;
        },
        loginSuccess:(state, action) =>{
            console.log("action :", action);
            console.log("state", state);

            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFaulure:(state) =>{
            state.isFetching=false;
            state.error=true;
        },
    }
});
export const {loginStart, loginSuccess, loginFaulure,} = userSlice.actions;
export default userSlice.reducer;