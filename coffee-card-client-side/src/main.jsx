import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=> fetch('http://localhost:5000/coffees')// server side fetch api
  },
  {
    path:'/addCoffee',
    element:<AddCoffee></AddCoffee>
  },
  {
    path:'/updateCoffee',
    element:<UpdateCoffee></UpdateCoffee>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
