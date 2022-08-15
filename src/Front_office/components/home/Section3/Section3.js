import React from 'react'
import "./section3.scss"
import { faSchool, faScrewdriver, faDesktop } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBots } from '@fortawesome/free-brands-svg-icons'

const Section3 = () => {
    return (
        <div className='section3' >
            <div className="title" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                <h1>NOTRE SOLUTION</h1>
            </div>

            <div className="content-section3">
                <div className='left'>
                    <div>
                        <div className='content'>
                            <h3>Back d'administration des Réseaux</h3>
                            <p> Cela rendra plus facile la gestion et la visualisation des flux dans le réseau.</p>
                        </div>
                        <div className='icon'>
                            <FontAwesomeIcon icon={faScrewdriver} />
                        </div>
                    </div>
                    <div>
                        <div className='content'>
                            <h3>Wifi Bot</h3>
                            <p>
                            Ce bot nous aide à se renseigner sur les consommations de chaque utilisateurs.
                            </p>
                        </div>
                        <div className='icon'>
                            <FontAwesomeIcon icon={faBots} />
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div>
                        <div className='icon'>
                            <FontAwesomeIcon icon={faSchool} />
                        </div>
                        <div className='content'>
                            <h3>Back d'administration des Etudiants</h3>
                            <p>Permettant de faciliter les manipulations sur les données des étudiants.</p>
                        </div>
                    </div>
                    <div>
                        <div className='icon'>
                            <FontAwesomeIcon icon={faDesktop} />
                        </div>
                        <div className="content">
                            <h3>L'existance de l'interface du site web</h3>
                            <p>Une interface user-friendly qui permettra aux utilisateurs d'utiliser l'application très facilement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3
