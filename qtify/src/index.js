import React from 'react';
import ReactDOM from 'react-dom'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Homepage from './components/Homepage/homepage';



const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Homepage/>
      }
    ]
  }
])

ReactDOM.render(
  <RouterProvider router={router}>
  </RouterProvider>,
  document.getElementById('root')
);



