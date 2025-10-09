import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import HomePage from "../Pages/HomePage";
import Apps from "../Pages/Apps";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import Root from "../Components/Root";
import Appsdetails from "../Components/Appsdetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,

    children:[
      {
        Index:true,
        path:'/',
        Component:HomePage,
        Loader:()=>fetch("./Data.json")

      },
      {
        path:"/Apps",
        Component: Apps
      },
      {
        path: "/Installation",
        Component: Installation
      },
      {
        path:'/Appsdetails/:id',
        Component:Appsdetails,
        Loader:()=>fetch("./Data.json")

      }
    ]
  },
]);



