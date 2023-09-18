import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Navbar from "./Component/Navbar.jsx";
import Home from "./Component/Home.jsx";
import HomeAdmin from "./Component/HomeAdmin.jsx";
import HomeUser from "./Component/HomeUser.jsx";
import Owner from "./Component/Owner.jsx";
import ButtonClick from "./Component/ButtonClick.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "/Navbar",
    element: (
      <>
        <Navbar />
      </>
    ),
  },
  {
    path: "/Owner",
    element: (
      <>
        <Owner />
      </>
    ),
  },
  {
    path: "/HomeUser",
    element: (
      <>
        <HomeUser />
      </>
    ),
  },
  {
    path: "/HomeAdmin",
    element: (
      <>
        <HomeAdmin />
      </>
    ),
  },
  {
    path: "/ButtonClick",
    element: (
      <>
        <ButtonClick />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
