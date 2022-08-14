import Axios from "axios"


const EtudiantAxios=Axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})


export{
    EtudiantAxios
}
