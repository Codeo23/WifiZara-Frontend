import React,{Fragment} from "react"
import { useSelector } from "react-redux";
import Chevron from "../icons/ChevronDown"
import avatar1 from "../../../assets/avatar.jpg"
import avatar2 from "../../../assets/avatar2.jpg"
import avatar3 from "../../../assets/Avatar.webp"

const mostOrdered = [
    {
      name: "John",
      image: avatar1
    },
    {
      name: "Jane",
      image: avatar2
    },
    {
      name: "Manohisafidy",
      image: avatar3
    },
  ];

const MostOrdered = ()=>{
    return(
        <Fragment>
            <div className="flex flex-col p-6 bg-gray-900 rounded-lg gap-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-loose text-white">Top 3 de consomateur</h2>
                </div>
                <hr className="border-gray-700" />
                <div className="flex flex-col gap-y-4">
                    {mostOrdered
                    .map((order)=>(
                        <div  className="flex gap-x-4 items-center">
                            <img className="w-14 h-14 rounded-full" src={order.image}  alt="" />
                            <div className="flex flex-col gap-y-0.5">
                            <div className="text-sm font-medium text-white">{ order.name }</div>
                         </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}


export default MostOrdered;