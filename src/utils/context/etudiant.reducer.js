import { createSlice } from "@reduxjs/toolkit"
import { BaseRoute } from "../apis/BaseRoute"

export const etudiantReducer = createSlice({
    name: 'etudiantReducer',
    initialState: {},
    reducers: {
        GET_ETUDIANTS: (state, action) => {
            return action.payload
        },
        ADD_STUDENT:(state, action) => {
            state.push(action.payload)
        },
    }
})

export const { GET_ETUDIANTS,ADD_STUDENT } = etudiantReducer.actions

export const getAllStudents = (token) => (dispatch) => {
    BaseRoute.get("/users",{headers:{
        'Authorization': `bearer ${token}`
    }})
        .then(res => dispatch(GET_ETUDIANTS(res.data)))
        .catch(error => console.log(error))
}

export const addStudent= (values,token) => (dispatch) => {
    BaseRoute.post("/register",values,{
        headers:{
            "Content-Type":"multipart/form-data",
            "Authorization":`bearer ${token}`
        }})
        .then(res => {dispatch(ADD_STUDENT(res.data));console.log(res.data ,"ça passe...!!!")})
        .catch(error => console.log(error))
}