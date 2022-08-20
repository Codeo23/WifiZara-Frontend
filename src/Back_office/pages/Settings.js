import React from "react"
import CardSettings from "../components/cards/Cardsettings"
import {Link} from "react-router-dom"

const Settings = ()=>{
    return(
        <>
            <main class="flex flex-col flex-1 gap-6 p-4"> 
                    <hr class="border-gray-700" />
                <CardSettings/>
            </main>
        </>
    )
}

export default Settings;