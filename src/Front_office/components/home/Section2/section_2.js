import { faConnectdevelop, faWindows } from "@fortawesome/free-brands-svg-icons"
import { faHand } from "@fortawesome/free-regular-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import "./section2.scss"

const Section2 = ({t}) => {

    return (
        <div className="section2" id="up">
            <div className="title">
                <h1><span data-scroll data-scroll-direction="horizontal" data-scroll-speed="8" data-scroll-target="#up">{t('w')}</span></h1>
                <h1><span data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#up">{t("a")}</span></h1>
                <h1><span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6" data-scroll-target="#up">{t("i")} </span></h1>
                <h1><span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-4" data-scroll-target="#up">{t("ap")} </span></h1>
            </div>
            <div className="listItem" >
                <div className="boxItem">
                    <h5><FontAwesomeIcon icon={faGlobe} /> &nbsp;{t('mettre')}</h5>
                    <p>
                        {t('maximiser')}
                    </p>
                </div>
                <div className="boxItem">
                    <h5><FontAwesomeIcon icon={faHand} /> &nbsp;{t('gaspillage')}</h5>
                    <p>
                    {t('bonusage')}
                    </p>
                </div>
                <div className="boxItem">
                    <h5><FontAwesomeIcon icon={faConnectdevelop} /> &nbsp;{t('competences')}</h5>
                    <p>
                        {t('acces')}
                    </p>
                </div>
                <div className="boxItem">
                    <h5><FontAwesomeIcon icon={faWindows} /> &nbsp;{t('transparence')}</h5>
                    <p>
                    {t('equal')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section2