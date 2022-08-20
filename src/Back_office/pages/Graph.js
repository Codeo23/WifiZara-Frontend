import React from 'react'
import Filmchart from '../components/chart/Filmchart';
import StatsCard from '../components/cards/StatsCard';
import Userchart from '../components/chart/Users';
import {Link} from "react-router-dom"
import StatReseaux from '../components/cards/StatReseaux';

const Graph = ()=>{
    return(
        <>
                <main class="flex flex-col flex-1 gap-6 p-4">
                    <hr class="border-gray-700" />
                    <StatReseaux />
                    <div className='grid grid-cols-2 gap-8'>
                        <div>
                            <Filmchart/>
                        </div>
                        <div>
                            <Userchart/>
                        </div>
                    </div>
                </main>
        </>
    )
}

export default Graph;