import React, { useState,useEffect } from 'react'
import { faGraduationCap, faIdBadge} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import {useSelector} from "react-redux"


const Right = () => {
    const {matricule} = useSelector(state=>state.authentification)
    const etudiant = useSelector(state=>state.etudiant)
    let user
    if(etudiant.length>0){
        user = etudiant.filter(et=>et.matriculate == matricule)[0]
    }
    
    return (
        <div className='right'>
            {user ? <img src={user.image.replace("http://127.0.0.1:6000","https://wifizara-back.iteam-s.mg")} alt="avatar" />:null}
            <div className='about-user'>
                 <h2>{user &&user.lastName}</h2>
                <div className='graduate-and-'>
                    <span><FontAwesomeIcon icon={faGraduationCap} />{user &&user.level.wording}</span>
                    <span><FontAwesomeIcon icon={faIdBadge} />{user &&user.matriculate}</span>
                </div>
                <button>Editer profil</button>
            </div>
        </div>
    )
}

export default Right