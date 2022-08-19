import React from 'react'
import { faGraduationCap, faIdBadge} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import avatar from "../../Assets/avatar2.jpeg"


const Right = () => {
    return (
        <div className='right'>
            <img src={avatar} alt="avatar" />
            <div className='about-user'>
                <h2>Safidy1863</h2>
                <div className='graduate-and-'>
                    <span><FontAwesomeIcon icon={faGraduationCap} /> L2GB</span>
                    <span><FontAwesomeIcon icon={faIdBadge} /> 12520</span>
                </div>
                <button>Editer profil</button>
            </div>
        </div>
    )
}

export default Right