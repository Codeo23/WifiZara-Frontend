import React, { Fragment } from "react"
import { Routes, Route } from "react-router-dom"
import PrivateRoute from "../../utils/PrivateRoute/PrivateRoute"
import Login from "../components/Auth/Login/Login"
import Register from "../components/Auth/Register/Register"
import Profile from "../pages/Profile"
import Home from "./../pages/Home"
import "./index.scss"
import {useSelector,useDispatch} from "react-redux"
import { userConnected } from "../../utils/context/auth.reducer"

const UserLayout = () => {
     return (
          <Fragment>
               <Routes>
                    <Route path="/register" element={<Register/>} exact={true}/>
                    <Route path="/login" element={<Login/>} exact={true}/>
                    <Route path='profile' element={<Profile/>} />
                    <Route index path='/' element={<Home />} exact={true} />
               </Routes>
          </Fragment>
     )
}

export default UserLayout;