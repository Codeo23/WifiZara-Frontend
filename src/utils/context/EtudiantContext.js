import React,{useState, createContext,useEffect} from "react"
import { EtudiantAxios } from "../apis/Etudiant";


export const EtudiantContext=createContext()


export const EtudiantContextProvider=props=>{
    const [etudiants,setEtudiants]=useState([]);
    useEffect(()=>{
        async function fetchEtudiant(){
            await EtudiantAxios.get('/users?_limit=5')
                .then((response)=>{
                    setEtudiants(response.data)
                })
                .catch(error=>{
                    console.log(error);
                })
            }
        fetchEtudiant()
    },[])
    const addEtudiant = (etudiant)=> {
        setEtudiants([...etudiants,etudiant]);}
    return(
        <EtudiantContext.Provider value={{etudiants,setEtudiants,addEtudiant}}>
            {props.children}
        </EtudiantContext.Provider>
    )
}