import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./Pages/Home"
import Contact from './Pages/Contact'
import Layout from './Pages/Layout'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Products from './Pages/Product'
import Section from './Pages/Section'
import Home2 from './Pages/Home2'
 
const App = () => {

   
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/Contact",
          element: <Contact />
        },
        {
          path: "/sign-in",
          element: <Login />
        },
        {
          path: "/sign-up",
          element: <Signup />
        },
        {
          path: '/product/:id',
          element: <Products/>
        },   
        {
          path: '/product',
          element: <Products/>
        }, 
        {
          path: '/home2',
          element: <Home2/>
        },   
      ]
    } 
  ])
  return (
    <div>
      
      <RouterProvider router={route} />
    </div>
  )
}
export default App
