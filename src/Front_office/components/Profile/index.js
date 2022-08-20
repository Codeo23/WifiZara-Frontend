import { faCircleInfo,faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState,useEffect } from 'react'
import {NavLink } from 'react-router-dom'
import "./profile.scss"
import Left from "./Left"
import Right from './Right'
import axios from 'axios'
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { dataStudent, getOneStudent, TOKEN_VALUE } from '../../../utils/context/auth.reducer'
import { getAllStudents } from '../../../utils/context/etudiant.reducer'


const ProfileLog = () => {
    const dispatch = useDispatch()
    const {matricule,token} = useSelector(state=>state.authentification)
    const navigate = useNavigate()
    const logout = (e)=> {
        e.preventDefault()
        dispatch(TOKEN_VALUE(""))
        navigate("/login")
    } 
    dispatch(getAllStudents(token))

    return (
        <div className='profile'>
            <div className='navBar'>
                <NavLink to="#" className={(nav) => nav.isActive ? "link":""}>
                    <FontAwesomeIcon icon={faCircleInfo}/> A propos
                </NavLink>
                <a onClick={(e)=>logout(e)}>
                    <FontAwesomeIcon icon={faRightFromBracket}/> Se deconnecter
                </a>
            </div>
            <div className='content-profile'>
                <div className='profile-grid'>
                    <Left/>
                    <Right/>
                </div>
            </div>
        </div>
    )
}

export default ProfileLog