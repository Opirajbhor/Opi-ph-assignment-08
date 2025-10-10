import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createHashRouter } from "react-router";
import { RouterProvider } from "react-router";
import HomePage from "../Pages/HomePage";
import Apps from "../Pages/Apps";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import Root from "../Components/Root";
import Appsdetails from "../Components/Appsdetails";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        Index: true,
        path: "/",
        Component: HomePage,
        loader: () => fetch("./Data.json"),
      },
      {
        path: "/Apps",
        Component: Apps,
        loader: () => fetch("./Data.json")
      },
      {
        path: "/Installation",
        loader: () => fetch("./Data.json"),
        Component: Installation,
      },
      {
        path: "/Appsdetails/:id",
        Component: Appsdetails,
        loader: () => fetch("./Data.json"),
      },
    ],
  },
]);
