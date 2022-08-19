import React, { useState,useEffect } from 'react'
import { faGraduationCap, faIdBadge} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import {useSelector} from "react-redux"


const Right = () => {
    const [user,setUser] = useState({})
    const {id,token} = useSelector(state=>state.authentification)
    useEffect(() => {
        axios.get(`https://wifizara-back.iteam-s.mg/users/${id}`,{headers:{
            'Authorization': `bearer ${token}`
        }}).then(res=> setUser(res.data)).catch(err=> console.log("error"))
    },[])
    const vide = Object.keys(user).length === 0?true:false
    console.log(user)
    return (
        <div className='right'>
            {!vide && <img src={user.image.replace("http://127.0.0.1:6000","https://wifizara-back.iteam-s.mg")} alt="avatar" />}
            <div className='about-user'>
                 <h2>{!vide &&user.lastName}</h2>
                <div className='graduate-and-'>
                    <span><FontAwesomeIcon icon={faGraduationCap} />{!vide &&user.level.wording}</span>
                    <span><FontAwesomeIcon icon={faIdBadge} />{!vide &&user.matriculate}</span>
                </div>
                <button>Editer profil</button>
            </div>
        </div>
    )
}

export default Right