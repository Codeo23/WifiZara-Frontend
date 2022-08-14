import React,{Fragment} from "react"
import { faPieChart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Graph = ()=>{
    return(
        <FontAwesomeIcon icon={faPieChart} style={{color:'#0E7D6D',height:'40px'}}/>
    )
}

export default Graph;