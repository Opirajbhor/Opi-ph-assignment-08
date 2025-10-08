import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import HomePage from "../Pages/HomePage";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Root from "../Components/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children:[
      {
        Index:true,
        path:'/',
        Component:HomePage
      },
      {
        path:"Apps",
        Component: Apps
      },
      {
        path: "Installation",
        Component: Installation
      }
    ]
  },
]);



