import { faConnectdevelop, faWindows } from "@fortawesome/free-brands-svg-icons"
import { faHand } from "@fortawesome/free-regular-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import "./section2.scss"

const Section2 = () => {

    return (
        <div className="section2" id="up">
            <div className="title">
                <h1><span data-scroll data-scroll-direction="horizontal" data-scroll-speed="8" data-scroll-target="#up">QUELS SONT L'</span></h1>
                <h1><span data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#up">INTERETS </span></h1>
                <h1><span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6" data-scroll-target="#up">DE CET </span></h1>
                <h1><span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-4" data-scroll-target="#up">APPLICATION ? </span></h1>
            </div>
            <div className="listItem" >
                <div className="boxItem">
                    <h5><FontAwesomeIcon icon={faGlobe} /> &nbsp;Rendre l'accès internet pour tous</h5>
                    <p>
                        Maximisation des personnes ayant accès à internet.
                    </p>
                </div>
                <div className="boxItem">
                    <h5><FontAwesomeIcon icon={faHand} /> &nbsp;Pour éviter le gaspillage</h5>
                    <p>
                    Tous les utilisateurs possèdent un forfait et un débit limité. Cela diminuera l'usage excessif du point d'accès. 
                    </p>
                </div>
                <div className="boxItem">
                    <h5><FontAwesomeIcon icon={faConnectdevelop} /> &nbsp;Développement en compétences</h5>
                    <p>
                        Vu que tous les étudiants peuvent accéder facilement à l'internet afin qu'ils puissent faire des recherches, réaliser des projets, etc..
                    </p>
                </div>
                <div className="boxItem">
                    <h5><FontAwesomeIcon icon={faWindows} /> &nbsp;La transparence</h5>
                    <p>
                    Cette application fournira des statistiques sur les consommations.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section2