import React from "react"
import StatsCard from "../components/cards/StatsCard";
import CardEtudiant from "../components/cards/CardEtudiant";
import MostOrdered from "../components/cards/Top3deconsomation";
import MostTypeof from "../components/cards/StatEtudiant";
import {Link} from "react-router-dom"

const Home = ()=>{
    const date=new Date()
    const dateFormated=`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    return(
            <>
                <main class="flex flex-col flex-1 gap-6 p-4">
                    <header>
                        
                    </header>
                    <hr class="border-gray-700" />
                    <StatsCard />
                    <CardEtudiant />
                </main>
                <aside class="flex flex-col gap-y-6 pt-6 pr-6 w-96">
                    <MostOrdered />
                    <MostTypeof />
                </aside>
            </>
    )
}

export default Home;