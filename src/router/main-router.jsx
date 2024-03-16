import React from 'react'
import { Home } from '../pages/home'
import {Login} from "../pages/login/login"
import {Profile} from "../pages/profile/profile"
import {CreateProduct} from "../pages/create-product"




export const mainrouter = [
  {
    componet: <Home/>,
  },
  {
    componet:<Login/>,
    path:"/login"
  },
  {
    componet:<Profile/>,
    path:"/profile"
  },
  {
    componet:<CreateProduct/>,
    path:"/product"
  }
]  
