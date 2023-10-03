
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../assets/pages/Home/Home";
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
        }
      ]
    },
  ]);

export default Router;