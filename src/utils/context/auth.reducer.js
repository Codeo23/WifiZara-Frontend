import { createSlice } from "@reduxjs/toolkit"
import jwtDecode from "jwt-decode"
import { BaseRoute } from "../apis/BaseRoute"

export const authReducer = createSlice({
    name: 'authReducer',
    initialState: {
        token:"",
        role:"",
        id:""
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
    }
})

export const { TOKEN_VALUE,ROLE_VALUE,ID_VALUE} = authReducer.actions

export const loginStudent = (data) => (dispatch) => {
    BaseRoute.post("/login", data)
        .then(res => {
            const resultat = jwtDecode(res.data.jwt)
            dispatch(TOKEN_VALUE(res.data.jwt))
            dispatch(ROLE_VALUE(resultat.role))
            dispatch(ID_VALUE(resultat.id))
        })
        .catch(error => console.log(error))
}

