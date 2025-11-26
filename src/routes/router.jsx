import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Favorites from "../Pages/Favorites";
import FoodDetails from "../Component/FoodDetails";
import MainLayout from "../layouts/MainLayout";
import SpicesDetails from "../Component/SpicesDetails";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {path:"/meal/:id", 
       element: <FoodDetails />
      },
       {
        path:"/spices-details", 
        element: <SpicesDetails />
      },
    ],
  },
]);