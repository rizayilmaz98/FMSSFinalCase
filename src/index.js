import React from 'react';
import ReactDOM from 'react-dom/client';
import { ShipProvider } from "./context/ShipContext";
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import './style/bootstrap-override.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ShipProvider>
    <RouterProvider router={router}/>
  </ShipProvider>
  </>
);

