import React from 'react'
import {Component} from 'react'
import Login from '../login/Login'
import Welcome from '../welcome/Welcome';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([  
               	{ 
                      path:"/" ,
                      element:(<Login />)
                 },
                 { 
                      path:"login" ,
                      element:(<Login  />)
                  },
                  {
                      path:"welcome/:name",
                      element:(<Welcome />) 
                   }
       ]);

export default class TodoApp extends Component 
{         
    render() {          
                return (
                          <div className="TodoApp">
                               <RouterProvider router={router} />
                          </div>   
                       )
              }
 }