import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Inicio from './Inicio';
import { Parqueo } from './components/Parqueo/Parqueo';

const router = createBrowserRouter([
  {
    path: "/",
    element: < Inicio/>,
  },
  {
    path: "/parqueo",
    element: < Parqueo/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider c='true' router={router} />
  </React.StrictMode>,
)
