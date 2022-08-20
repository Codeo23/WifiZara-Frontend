import React, { Fragment } from "react"
import { Routes, Route } from "react-router-dom"
import PrivateRoute from "../../utils/PrivateRoute/PrivateRoute"
import Login from "../components/Auth/Login/Login"
import Login1 from "../components/Auth/Login/Login1"
import Register from "../components/Auth/Register/Register"
import Profile from "../pages/Profile"
import Home from "./../pages/Home"
import "./index.scss"

const UserLayout = () => {
     return (
          <Fragment>
               <Routes>
                    <Route path="/register" element={<Register/>} exact={true}/>
                    <Route path="/login" element={<Login/>} exact={true}/>
                    <Route element={<PrivateRoute redirectPath="/" authorization={true} />}>
                         <Route path='profile' element={<Profile/>} />
                    </Route>
                    <Route index path='/' element={<Home />} exact={true} />
               </Routes>
          </Fragment>
     )
}

export default UserLayout;