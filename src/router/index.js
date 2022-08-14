import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminLayout from "./../Back_office/pages/layout"
import UserLayout from "./../Front_office/Layout"
import PrivateRoute from "./../utils/PrivateRoute/PrivateRoute"
import { EtudiantContextProvider } from "../utils/context/EtudiantContext"


const AppRouter = () => {
     const isConnected = true
     const isAdmin = true
     return (
          <EtudiantContextProvider>
               <BrowserRouter>
                    <Routes>
                         <Route element={<PrivateRoute redirectPath="/" authorization={isConnected && isAdmin} />}>
                              <Route path='admin/*' element={<AdminLayout />} />
                         </Route>
                         <Route path='/*' element={<UserLayout />} />
                    </Routes>
               </BrowserRouter>
          </EtudiantContextProvider>
     )
}

export default AppRouter;