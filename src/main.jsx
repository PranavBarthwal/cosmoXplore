import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from "./pages/Home/Home.jsx"
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
)
