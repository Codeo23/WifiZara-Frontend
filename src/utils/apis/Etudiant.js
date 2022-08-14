import Axios from "axios"


const EtudiantAxios=Axios.create({
    baseURL:"https://wifizara-back.iteam-s.mg",
})


export{
    EtudiantAxios
}
