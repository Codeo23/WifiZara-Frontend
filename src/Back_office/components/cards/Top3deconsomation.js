import React,{Fragment} from "react"
import { useSelector } from "react-redux";
import Chevron from "../icons/ChevronDown"

const mostOrdered = [
    {
      name: "David",
      image: "https://avatars.githubusercontent.com/u/82655694?v=4"
    },
    {
      name: "Goliata",
      image: "https://avatars.githubusercontent.com/u/93115585?v=4"
    },
    {
      name: "Solomon",
      image: "https://avatars.githubusercontent.com/u/80751503?s=400&u=6a0d04a90a1089e5ad180560b65371d56c0a20a8&v=4"
    },
  ];

const MostOrdered = ()=>{
    const allStudents = useSelector(state=>state.etudiant)
    return(
        <Fragment>
            <div className="flex flex-col p-6 bg-gray-900 rounded-lg gap-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-loose text-white">Top 3 de consomateur</h2>
                </div>
                <hr className="border-gray-700" />
                <div className="flex flex-col gap-y-4">
                    {allStudents.length>=3 ?
                    allStudents
                    .slice(0,3)
                    .map((order)=>(
                        <div  className="flex gap-x-4 items-center">
                            <img className="w-14 h-14 rounded-full" src={order.image.replace("http://127.0.0.1:6000","https://wifizara-back.iteam-s.mg")}  alt="" />
                            <div className="flex flex-col gap-y-0.5">
                            <div className="text-sm font-medium text-white">{ order.lastName }</div>
                         </div>
                        </div>
                    )):null}
                </div>
            </div>
        </Fragment>
    )
}


export default MostOrdered;