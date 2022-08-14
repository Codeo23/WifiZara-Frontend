import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{Fragment} from "react"

const Etudiant = ()=>{
    return(
        <FontAwesomeIcon icon={faPerson} style={{color:'#0E7D6D',height:'40px'}}/>
    )
}

export default Etudiant;