import React from 'react'
import "./section3.scss"
import { faSchool, faScrewdriver, faDesktop } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBots } from '@fortawesome/free-brands-svg-icons'

const Section3 = ({t}) => {
    return (
        <div className='section3' >
            <div className="title" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                <h1>{t("sol")}</h1>
            </div>
            <div className="content-section3" style={{alignItems:'center'}}>
                <div className='left' >
                    <div >
                        <div className='content'>
                            <h3>{t('back-res')}</h3>
                            <p> 
                                {t('back-reseau')}
                            </p>
                        </div>
                        <div className='icon'>
                            <FontAwesomeIcon icon={faScrewdriver} style={{width:'100px'}} />
                        </div>
                    </div>
                    <div style={{alignItems:'center'}}>
                        <div className='content' style={{alignItems:'center'}}>
                            <h3>Wifi Bot</h3>
                            <p>
                            {t("bot")}
                            </p>
                        </div>
                        <div className='icon'>
                            <FontAwesomeIcon icon={faBots} style={{width:'100px'}} />
                        </div>
                    </div>
                </div>
                <div className='right' style={{alignItems:'center'}}>
                    <div style={{alignItems:'center'}}>
                        <div className='icon'>
                            <FontAwesomeIcon icon={faSchool} style={{width:'100px'}} />
                        </div>
                        <div className='content'>
                            <h3>{t("back-et")}</h3>
                            <p>
                                {t("back-etudiants")}
                            </p>
                        </div>
                    </div>
                    <div style={{alignItems:'center'}}>
                        <div className='icon'>
                            <FontAwesomeIcon icon={faDesktop} style={{width:'100px'}} />
                        </div>
                        <div className="content">
                            <h3>{t("web-app")}</h3>
                            <p>{t("webinterface")}</p>
                        </div>
                    </div>

                </div>²
            </div>
        </div>
    )
}

export default Section3
