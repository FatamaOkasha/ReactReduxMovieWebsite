// import './App.css';
import Movies from "./components/Movies"
import About from './pages/About';
import Error from './pages/Error';
import FavoriteDetails from "./pages/FavoriteDetails"
import Register from "./components/Register";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import MoviesContextProvider from "./contextFolder/MoviesContextProvider"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MovieDetails from './pages/MovieDetails';

import MovieModule from "./pages/MovieModule";
import UpdatePage from "./pages/UpdatePage";
import CreateMovie from "./pages/CreateMovie";
import Profile from "./pages/Profile";
import LandingPage from "./pages/landingPage";

function App() {
 
  const router = createBrowserRouter([
    
    { 
       path: "/",
       element: <MovieModule></MovieModule>,
       errorElement:<Error></Error>,
       children:[
        {index:true, element:<Movies></Movies>},
        {path:"movies/:id" ,element:<MovieDetails></MovieDetails>},
        {path:"about" ,element:<About></About>},
        {path:"favorites" ,element:<FavoriteDetails></FavoriteDetails>},
        {path:"create" ,element:<CreateMovie></CreateMovie>},
        {path:"register" ,element:<Register/>},
        {path:"update/:id" ,element:<UpdatePage></UpdatePage>},
        {path:"profile" ,element:<Profile></Profile>},
        {path:"landingPage" ,element:<LandingPage></LandingPage>},

          ],
        },
  ]);
 
  return (
    <div className="App">
     <Provider store={store}>
    <MoviesContextProvider>
       <RouterProvider router={router}></RouterProvider>
    </MoviesContextProvider>

      {/* <BrowserRouter>
         <Navbar></Navbar>
      <Routes>
         <Route path="/" element={<Movies movies={movies} setMovies={setMovies}></Movies>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        
        <Route path="/movies/:id" element={<MovieDetails movies={movies}/>}></Route>

    <Route path="*" element={<Error></Error>}></Route>


  </Routes>
  </BrowserRouter> */}
     </Provider>
      
    </div>
  );
}

export default App;


