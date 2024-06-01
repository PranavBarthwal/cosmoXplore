import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from "./pages/Home/Home.jsx"
import NasaProjects from "./pages/NasaProjects/NasaProjects.jsx"
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import MarsRover from './pages/MarsRover/MarsRover.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='nasa-projects' element={<NasaProjects />} />
      <Route path='mars-rover' element={<MarsRover/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
)
