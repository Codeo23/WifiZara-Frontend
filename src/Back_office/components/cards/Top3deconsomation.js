import React,{Fragment} from "react"
import Chevron from "../icons/ChevronDown"

const mostOrdered = [
    {
      name: "David",
      image: "https://avatars.githubusercontent.com/u/82655694?v=4",
      count: 200,
    },
    {
      name: "Goliata",
      image: "https://avatars.githubusercontent.com/u/93115585?v=4",
      count: 120,
    },
    {
      name: "Solomon",
      image: "https://avatars.githubusercontent.com/u/80751503?s=400&u=6a0d04a90a1089e5ad180560b65371d56c0a20a8&v=4",
      count: 80,
    },
  ];

const MostOrdered = ()=>{
    return(
        <Fragment>
            <div className="flex flex-col p-6 bg-gray-900 rounded-lg gap-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-loose text-white">Top 3 de consomateur</h2>
                    <form>
                        <select className="flex gap-x-2.5 py-3 px-4 rounded-lg border text-white bg-gray-900 border-gray-700">
                            <option className="text-sm text-white">Ajourd'hui</option>
                            <option className="text-sm text-white">Hier</option>
                            <option className="text-sm text-white">La semaine derniere</option>
                        </select>
                    </form>
                </div>
                <hr className="border-gray-700" />
                <div className="flex flex-col gap-y-4">
                    {mostOrdered.map((order)=>(
                        <div  className="flex gap-x-4 items-center">
                            <img className="w-14 h-14 rounded-full" src={order.image}  alt="" />
                            <div className="flex flex-col gap-y-0.5">
                            <div className="text-sm font-medium text-white">{ order.name }</div>
                            <div className="text-xs text-gray-500">{ order.count } Personnes</div>
                         </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}


export default MostOrdered;