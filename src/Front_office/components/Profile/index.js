import { faCircleInfo,faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState,useEffect } from 'react'
import {NavLink } from 'react-router-dom'
import "./profile.scss"
import Left from "./Left"
import Right from './Right'
import jwt_decode from "jwt-decode";
import axios from 'axios'
import { useTranslation } from "react-i18next";

const ProfileLog = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='profile'>
            <div className='header'></div>
            <div className='navBar'>
                <NavLink to="#" className={(nav) => nav.isActive ? "link":""}>
                    <FontAwesomeIcon icon={faCircleInfo}/>{t("aprop")}
                </NavLink>
                <NavLink to="#">
                    <FontAwesomeIcon icon={faRightFromBracket}/>{t("disco")}
                </NavLink>
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