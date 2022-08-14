import React,{Fragment} from "react"
import { faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Delete= ()=>{
    return(
        <FontAwesomeIcon icon={faTrash} style={{color:'#f00',height:'30px'}}/>
    )
}

export default Delete;