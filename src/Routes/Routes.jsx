import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import HomePage from "../Pages/HomePage";
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
      }
    ]
  },
]);



