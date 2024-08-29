import { configureStore } from "@reduxjs/toolkit";


import favoritesReducer from "./slices/favorites";
import counterReducer from "./slices/counter";
import moviesReducer from "./slices/moviesSlice";
 import authReducer from './slices/authSlice';
import usersReducer from "./slices/users";


const store=configureStore({
    reducer:{
       auth: authReducer,
       counter:counterReducer,
       favorites:favoritesReducer,
       movies:moviesReducer,
       users:usersReducer
    }
})
export default store;


