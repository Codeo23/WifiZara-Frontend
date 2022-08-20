import React from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminLayout from "./../Back_office/pages/layout"
import UserLayout from "./../Front_office/Layout"
import PrivateRoute from "./../utils/PrivateRoute/PrivateRoute"
import {useSelector} from "react-redux"

const AppRouter = () => {
     return (
               <BrowserRouter>
                    <Routes>
                         <Route path='admin/*' element={<AdminLayout />} />
                         <Route path='/*' element={<UserLayout />} />
                    </Routes>
               </BrowserRouter>
     )
}

export default AppRouter;