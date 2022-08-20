import React from "react";
import ArrowUp from "../icons/ArrowUp";
import Coin from "../icons/Coin";
import Customer from "../icons/Customer"
import Globe from "../icons/Globe";
import {useSelector} from "react-redux"

const stats = [
    {
      percentage: "21%",
      value: "Sous reseau 1",
      status: "up",
      icon: <Coin/>,
    },
    {
        percentage: "8%",
        value: "Sous reseau 2",
        status: "up",
        icon: <Coin/>,
    },
    {
      percentage: "8%",
      value: "Sous reseau 3",
      status: "down",
      icon: <Globe/>,
    },
    {
      percentage: "31%",
      value: "Sous reseau 4",
      status: "up",
      icon: <Customer/>,
    },
    {
        percentage: "2%",
        value: "Sous reseau 5",
        status: "up",
        icon: <Customer/>,
      },
      {
        percentage: "15%",
        value: "Sous reseau 6",
        status: "up",
        icon: <Customer/>,
      },
      {
        percentage: "15%",
        value: "Sous reseau 7",
        status: "up",
        icon: <Customer/>,
      },
  ];

const StatReseaux = () =>{
  const allSubNetworks = useSelector(state=>state.subNetworks)
  console.log(allSubNetworks)
    return(
        <>
            <div className="flex gap-6">
                {allSubNetworks.subNetwork.length>0 ?  allSubNetworks.subNetwork.map((stat)=>(
                    <div key={stat.id} className="flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3">
                        <div className="flex items-center gap-x-3">
                            <span
                            className="text-xs font-medium text-white"
                            >
                            { stat.size }
                            </span>
                            <div
                            className="p-0.5 rounded-full bg-accent-green/20"
                            >
                            <ArrowUp/>
                            </div>
                        </div>
                        <div className="text-3xl font-semibold text-white">{ stat.name }</div>
                        <span
                            className="text-xs font-medium text-white"
                            >
                            { stat.adresse }
                            </span>
                    </div>
                )):null}
            </div>
        </>
    )
}

export default StatReseaux;