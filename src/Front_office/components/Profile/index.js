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
import { TOKEN_VALUE } from '../../../utils/context/auth.reducer'

const ProfileLog = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user,setUser] = useState({})
    const {id,token} = useSelector(state=>state.authentification)
    useEffect(() => {
        axios.get(`https://wifizara-back.iteam-s.mg/users/${id}`,{headers:{
            'Authorization': `bearer ${token}`
        }}).then(res=> setUser(res.data)).catch(err=> console.log("error"))
    },[])
    
    const logout = (e)=> {
        e.preventDefault()
        dispatch(TOKEN_VALUE(""))
        navigate("/login")
    } 

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