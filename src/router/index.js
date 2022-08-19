import React from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { getAllStudents, loginStudent } from "../utils/context/etudiant.reducer"
import AdminLayout from "./../Back_office/pages/layout"
import UserLayout from "./../Front_office/Layout"
import PrivateRoute from "./../utils/PrivateRoute/PrivateRoute"


const AppRouter = () => {
     const dispatch = useDispatch()
     const isConnected = true
     const isAdmin = true
     dispatch(getAllStudents())
     dispatch(loginStudent({email:"johnDoe@gmail.com",password:'johndoe'}))
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