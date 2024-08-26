import React from 'react';
import Movies from "./components/Movies";
import About from './pages/About';
import Error from './pages/Error';
import FavoriteDetails from "./pages/FavoriteDetails";
import Register from "./components/Register";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import MoviesContextProvider from "./contextFolder/MoviesContextProvider";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MovieDetails from './pages/MovieDetails';
import MovieModule from "./pages/MovieModule";
import UpdatePage from "./pages/UpdatePage";
import CreateMovie from "./pages/CreateMovie";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";  // Ensure this import matches your file structure

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />, // Set LandingPage as the root element
      errorElement: <Error />,
    },
    {
      path: "/main",  // Use a different path for the main module
      element: <MovieModule />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Movies /> },
        { path: "movies/:id", element: <MovieDetails /> },
        { path: "about", element: <About /> },
        { path: "favorites", element: <FavoriteDetails /> },
        { path: "create", element: <CreateMovie /> },
        { path: "register", element: <Register /> },
        { path: "update/:id", element: <UpdatePage /> },
        { path: "profile", element: <Profile /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <Provider store={store}>
        <MoviesContextProvider>
          <RouterProvider router={router} />
        </MoviesContextProvider>
      </Provider>
    </div>
  );
}

export default App;
