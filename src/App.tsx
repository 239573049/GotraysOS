import React from "react";
import "./App.css";
import { Route, Router } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
