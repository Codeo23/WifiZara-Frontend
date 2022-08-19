import React from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminLayout from "./../Back_office/pages/layout"
import UserLayout from "./../Front_office/Layout"
import PrivateRoute from "./../utils/PrivateRoute/PrivateRoute"
import {useSelector} from "react-redux"

const AppRouter = () => {
     const {token,role} = useSelector(state => state.authentification)
     const dispatch = useDispatch()
     let isAdmin= false
     let isConnected = false
     if(token!==""){
          isConnected = true
          if(role=="1"){
               isAdmin = true
          }
     }
     return (
               <BrowserRouter>
                    <Routes>
                         <Route element={<PrivateRoute redirectPath="/" authorization={isConnected && isAdmin} />}>
                              <Route path='admin/*' element={<AdminLayout />} />
                         </Route>
                         <Route path='/*' element={<UserLayout />} />
                    </Routes>
               </BrowserRouter>
     )
}

export default AppRouter;