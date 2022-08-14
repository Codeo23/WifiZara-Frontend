import React,{useState} from 'react'
import Home from '../icons/Home';
import Graph from '../icons/Graph';
import { Link } from 'react-router-dom';
import Settings from '../icons/Settings';
import AddIcon from '../icons/AddIcon';
import Color from "../palette/color"
import Etudiant from '../icons/Etudiant';
import AddIcon2 from '../icons/addIcon2';


const Usersmenus = [
    { name: "home", icon: <Etudiant/> },
    { name: "add", icon: <AddIcon/> },
  ];
const pa=[
    { name: "graph", icon: <Graph/> },
    { name: "addreseau", icon: <AddIcon2/> },
    { name: "settings", icon: <Settings/> },
]

const Sidebar = ()=>{
    const [activemenu,setActive]=useState("home")

    return(
        <>
        <div className="flex flex-col gap-y-4 items-center py-8 w-48 bg-gray-900">
            <button className="p-2 bg-opacity-20 rounded-xl ">
            <Link to={`/`}>
                <img src='/crew.png' width='100px' height='50px' alt="logo"/>
            </Link>
            </button>
            <div className='p-4 w-full' style={{backgroundColor:Color.paletteTeal1}}>
                    <h4>Gérer les étudiants</h4>
            </div>
            <div className="flex flex-col gap-y-4 items-center self-center">
                {Usersmenus.map(usermenu=>(
                        <div onClick={()=>setActive(usermenu.name)} className={activemenu==usermenu.name?'bg-gray-800 rounded-l-xl rounded-r-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom':'rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom'}>
                            <Link to={`/admin/${usermenu.name}`}>
                                <button
                                className="p-4  mr-4 ml-3 rounded-xl "
                                >
                                {usermenu.icon}
                                </button>
                            </Link>
                        </div>
                ))}
            </div>
            <div className='p-4 w-full' style={{backgroundColor:Color.paletteTeal1}}>
                    <h4>Gérer les reseaux</h4>
            </div>
            <div className="flex flex-col gap-y-4 items-center self-center">
                {pa.map(usermenu=>(
                        <div onClick={()=>setActive(usermenu.name)} className={activemenu==usermenu.name?'bg-gray-800 rounded-l-xl rounded-r-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom':'rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom'}>
                            <Link to={`/admin/${usermenu.name}`}>
                                <button
                                className="p-4 my-2 mr-4 ml-3 rounded-xl"
                                >
                                {usermenu.icon}
                                </button>
                            </Link>
                        </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Sidebar;