import React, { Fragment,useState,useRef } from "react";
import Color from "../palette/color";
import Delete from "../icons/Deleteicon";
import Pen from "../icons/Update";
import { useSelector } from "react-redux";

const OrderReport = () =>{
    const date=new Date()
    const [search,setSearch] = useState("")
    const dateFormat=`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    const etudiants = useSelector(state=>state.etudiant)
    const searchRef = useRef(null)
    const handleChangeSearch = () =>{
        setSearch(searchRef.current.value)
    }
    console.log(etudiants)
    return(
        <Fragment>
            <div className="p-6 bg-gray-900 rounded-lg">
                <div className="flex justify-between items-center pb-4">
                    <h2 className="text-xl font-semibold leading-loose text-white">{dateFormat}</h2>
                    <h2 className="text-xl font-semibold leading-loose text-white">Liste d'étudiant</h2>
                </div>
                <div className="grid grid-cols-4 gap-2 mb-4 items-center">
                    <div>
                        <select className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black">
                            <option>L1</option>
                            <option>L2</option>
                            <option>L3</option>
                            <option>M1</option>
                            <option>M2</option>
                        </select>
                    </div>
                    <div>
                        <select className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black">
                        <option>GB</option>
                        <option>SR</option>
                        <option>IG</option>
                        </select>
                    </div>
                    <div>
                        <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                        placeholder="Matricule"
                        ref={searchRef}
                        ></input>
                    </div>
                    <div>
                    <button
                        className="w-full text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="button"
                        style={{backgroundColor:Color.paletteTeal1}}
                        onClick={handleChangeSearch}
                        >
                        Rechercher
                    </button>
                    </div>
                </div>
                <table className="w-full">
                <thead style={{backgroundColor:Color.paletteTeal1}}>
                    <tr className="text-sm font-semibold text-white">
                    <td className="py-4 border-b border-gray-700">N° Matricule</td>
                    <td className="py-4 border-b border-gray-700">Nom & Prenom(s)</td>
                    <td className="py-4 border-b border-gray-700 ">Email </td>
                    <td className="py-4 border-b border-gray-700 ">Phone</td>
                    <td className="py-4 border-b border-gray-700 ">Data restant</td>
                    <td className="py-4 border-b border-gray-700 ">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {etudiants.length>0 ? 
                        etudiants
                        .filter(liste=>liste.matriculate.includes(search))
                        .map(et=>(
                    <tr v-for="order in orders" className="text-sm text-gray-500">
                    <td className="py-4">
                        <div className="flex gap-4 items-center">
                            <img width="32" className="rounded-full" src={et.image} alt="" />
                            <span>{et.matriculate} </span>
                        </div>
                    </td>
                    <td className="py-4">{et.firstName} {et.lastName}</td>
                    <td className="py-4 ">{et.email}</td>
                    <td className="py-4 ">{et.phone}</td>
                    <td className="py-4 ">{et.remainingData}</td>
                    <td className="py-4 ">
                        <span
                        className="px-4 flex justify-center py-1 w-24 font-medium capitalize rounded-full"
                        >
                        <span className="px-4 cursor-pointer">
                            <Delete/>
                        </span>
                            <span className="cursor-pointer">
                                <Pen/>
                            </span>
                        </span>
                    </td>
                    </tr>
                    )): null}
                </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default OrderReport;