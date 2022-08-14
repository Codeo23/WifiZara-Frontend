import React,{Fragment} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";

const Order = ()=>{
    return(
        <Fragment>
            <FontAwesomeIcon icon={faBorderAll} style={{color:'#0E7D6D',height:'30px'}}/>
        </Fragment>
    )
}

export default Order;