import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./pages/Home/Home.jsx"
import NasaProjects from "./pages/NasaProjects/NasaProjects.jsx"
import NotFoundPage from "./pages/404 Page/NotfoundPage.jsx"
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import About from "./pages/About/About.jsx"
import MarsRover from './pages/MarsRover/MarsRover.jsx'

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
