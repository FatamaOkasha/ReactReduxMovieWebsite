import { configureStore } from "@reduxjs/toolkit";


import favoritesReducer from "./slices/favorites";
import counterReducer from "./slices/counter";
import moviesReducer from "./slices/moviesSlice";
import usersReducer from "./slices/users";


const store=configureStore({
    reducer:{
       counter:counterReducer,
       favorites:favoritesReducer,
       movies:moviesReducer,
       users:usersReducer
    }
})
export default store;


// state={
//     language:{language:en},
//     counter:{counter:0},
// users:{users:[]}
// }