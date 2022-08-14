import React from "react";
import ArrowUp from "../icons/ArrowUp";
import Coin from "../icons/Coin";
import Order from "../icons/Order"
import Customer from "../icons/Customer"
import Globe from "../icons/Globe";

const stats = [
    {
      title: "Total inscrits",
      percentage: "+0.240%",
      value: "100%",
      status: "up",
      icon: <Coin/>,
    },
    {
      title: "Total connectés actuellement",
      percentage: "74.40%",
      value: "1564",
      status: "down",
      icon: <Globe/>,
    },
    {
      title: "Total non connectés actuellement",
      percentage: "25.60%",
      value: "436",
      status: "up",
      icon: <Customer/>,
    },
  ];

const StatsCard = () =>{
    return(
        <>
            <div className="flex gap-6">
                {stats.map((stat)=>(
                    <div className="flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3">
                        <div className="flex items-center gap-x-3">
                            <div className="p-2 bg-gray-800 rounded-lg">
                                {stat.icon}
                            </div>
                            <span
                            className="text-xs font-medium text-white"
                            >
                            { stat.percentage }
                            </span>
                            <div
                            className="p-0.5 rounded-full bg-accent-green/20"
                            >
                            <ArrowUp/>
                            </div>
                        </div>
                        <div className="text-3xl font-semibold text-white">{ stat.value }</div>
                        <div className="text-sm tracking-wide text-gray-500">{ stat.title }</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default StatsCard;