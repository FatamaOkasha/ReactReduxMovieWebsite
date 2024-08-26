import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function MovieModule() {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet/> 
           
        </div>
    )
}

export default MovieModule
