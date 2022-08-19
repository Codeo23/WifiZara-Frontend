import React, { Fragment } from "react"
import Sidebar from "../components/cards/Sidebar" 
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Add from "./Ajouter"
import Graph from "./Graph"
import Settings from "./Settings"
import Addreseau from "../components/cards/Addreseaux"
import {useDispatch, useSelector} from "react-redux"
import { getAllStudents } from "../../utils/context/etudiant.reducer"
import { getAllSubnetworks } from "../../utils/context/subnetworks.reducer"

const AdminLayout = () =>{
    const dispatch = useDispatch()
    const {token} = useSelector(state => state.authentification)
    dispatch(getAllStudents(token))
    dispatch(getAllSubnetworks(token))
    return(
        <Fragment>
            <div class="flex w-full min-h-screen font-sans bg-gray-800">
                <Sidebar />
                <Routes>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/add' element={<Add/>}/>
                    <Route path='/addreseau' element={<Addreseau/>}/>
                    <Route path='/graph' element={<Graph/>}/>
                    <Route path='/Settings' element={<Settings/>}/>
                </Routes>
            </div>
        </Fragment>
    )
}

export default AdminLayout;