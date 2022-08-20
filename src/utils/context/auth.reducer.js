import { createSlice } from "@reduxjs/toolkit"
import jwtDecode from "jwt-decode"
import { BaseRoute } from "../apis/BaseRoute"

export const authReducer = createSlice({
    name: 'authReducer',
    initialState: {
        token:"",
        role:"",
        id:"",
        matricule:"",
        user:[]
    },
    reducers: {
        TOKEN_VALUE: (state, action) => {
            return {...state,token:action.payload}
        },
        ROLE_VALUE: (state,action) => {
            return {...state,role:action.payload} 
        },
        ID_VALUE: (state,action) => {
            return {...state,id:action.payload} 
        },
        MATRICULE_VALUE: (state,action) => {
            return {...state,matricule:action.payload} 
        },
        USER_VALUE: (state,action) => {
            return {...state,user:action.payload} 
        },
    }
})

export const { TOKEN_VALUE,ROLE_VALUE,ID_VALUE,USER_VALUE,MATRICULE_VALUE} = authReducer.actions

export const loginStudent = (data) => (dispatch) => {
    BaseRoute.post("/login", data)
        .then(res => {
            const resultat = jwtDecode(res.data.jwt)
            dispatch(TOKEN_VALUE(res.data.jwt))
            dispatch(ROLE_VALUE(resultat.role))
            dispatch(ID_VALUE(resultat.id))
            dispatch(MATRICULE_VALUE(resultat.matriculate))
        })
        .catch(error => console.log(error))
}

export const getOneStudent = (matricule,token) => (dispatch) => {
    BaseRoute.get(`/users/${matricule}`,{headers:{
        'Authorization': `bearer ${token}`
    }})
        .then(res => dispatch(USER_VALUE(res.data)))
        .catch(error => console.log(error))
}

export const dataStudent = () => {
    BaseRoute.get(`/dataConsumption`)
        .then(res => /*dispatch(USER_VALUE(res.data))*/console.log(res))
        .catch(error => console.log(error))
}

