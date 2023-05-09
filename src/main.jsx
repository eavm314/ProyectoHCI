import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Inicio from './Inicio';
import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: < Inicio/>,
  },
  {
    path: "/login",
    element: < Login/>,
  },
  {
    path: "/home",
    element: < Home/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider c='true' router={router} />
  </React.StrictMode>,
)
