import React,{Fragment} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import Color from "../palette/color"



const ChevronDown = ()=>{
    return(
        <Fragment>
            <FontAwesomeIcon icon={faCircleChevronDown} style={{color:Color.paletteTeal1}}/>
        </Fragment>
    )
}

export default ChevronDown;