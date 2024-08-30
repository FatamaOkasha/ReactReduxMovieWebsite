import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// const API_URL = process.env.REACT_APP_API_URL;


export const moviesAction=createAsyncThunk("movies/getAllMovies",
    async()=>{
       const res= await axios.get(`https://my-json-server.typicode.com/FatamaOkasha/json-server/movies`,{
        maxContentLength: Infinity 
      })
       return res.data;
    }
    
)
export const deleteAction=createAsyncThunk("movies/deleteMovie",
    async(id)=>{
       const res= await axios.delete(`$https://my-json-server.typicode.com/FatamaOkasha/json-server/movies/${id}`)
       return id;
    }
    
)
export const updateAction=createAsyncThunk("movies/updateMovie",
    async({id,updatedData})=>{
       const res= await axios.put(`https://my-json-server.typicode.com/FatamaOkasha/json-server/movies/${id}`, updatedData)
       return res.data;
    }
    
)

export const createAction=createAsyncThunk("movies/createMovie",
    async(newMovie)=>{
       const res= await axios.post(`https://my-json-server.typicode.com/FatamaOkasha/json-server/movies`, newMovie)
       return res.data;
    }
    
)


const moviesSlice=createSlice(
{
    name:"movies",
    initialState:{movies:[]  
        // ,error:false,isloading:false 
     },
     reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(
            moviesAction.fulfilled,(state,action)=>{
                state.movies=action.payload
            }   
        )
        .addCase(
            deleteAction.fulfilled,(state,action)=>{
                state.movies = state.movies.filter(movie => movie.id !== action.payload); 
            } 
        )
        .addCase(
              updateAction.fulfilled,(state,action)=>{
                state.movies = state.movies.map(movie => movie.id === action.payload.id?action.payload:movie);
              }
        )
        .addCase(
            createAction.fulfilled,(state,action)=>{
                state.movies.push(action.payload);
            }
      )
        // builder.addCase(usersAction.rejected,(state,action)=>{
        //     state.error=true
        // }),
        // builder.addCase(usersAction.pending),(state,action)=>{
        //     state.isloading=true
        // }
    }
}
)
export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;