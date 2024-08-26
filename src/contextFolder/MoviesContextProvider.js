import axios from "axios"
import { createContext, useEffect, useState } from "react"


export const moviesContext=createContext()
const MoviesContextProvider=({children})=>{

    const [movies,setMovies]=useState([]);
  
  useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7").then(res=>setMovies(res.data.results))
  },[])
  
  return <moviesContext.Provider value={{movies,setMovies}}>
{children}
  </moviesContext.Provider>

}
export default MoviesContextProvider;