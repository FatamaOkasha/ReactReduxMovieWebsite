import { createSlice } from "@reduxjs/toolkit";

const usersSlice=createSlice({
    name:"users",
    initialState:{users:[],currentUser:{}},
    reducers:{
        changeUsers:function(state,action){
            state.users=action.payload
        },
        addUser:function(state,action){
            state.users.push(action.payload);

        },
        setCurrentUser:function(state,action){
             state.currentUser=action.payload;
        }
     
    }
})
export const {changeUsers,addUser,setCurrentUser}= usersSlice.actions;
export default usersSlice.reducer;