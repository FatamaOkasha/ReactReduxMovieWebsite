import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{counter:0},
    reducers:{
        changeCounter:function(state,action){
            state.counter=action.payload
        },
        incCounter:function(state,action){
            state.counter=state.counter+1
        },
        decCounter:function(state,action){
            if (state.counter>0){
                
            state.counter=state.counter-1
            }else {
                state.counter=0;
            }
        }
    }
})
export const {changeCounter,decCounter,incCounter}= counterSlice.actions
export default counterSlice.reducer