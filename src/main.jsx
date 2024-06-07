import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Home from "./pages/Home/Home.jsx"
import MarsRover from './pages/MarsRover/MarsRover.jsx'
import NasaProjects from "./pages/NasaProjects/NasaProjects.jsx"
import About from "./pages/About/About.jsx"
import NotFoundPage from "./pages/404 Page/NotfoundPage.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='nasa-projects' element={<NasaProjects />} />
      <Route path='*' element={<NotFoundPage />} />
      <Route path='about' element={<About />} />
      <Route path='mars-rover' element={<MarsRover/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
)
