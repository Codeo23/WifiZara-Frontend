import { createSlice } from "@reduxjs/toolkit"
import { BaseRoute } from "../apis/BaseRoute"

export const etudiantReducer = createSlice({
    name: 'etudiantReducer',
    initialState: {},
    reducers: {
        GET_ETUDIANTS: (state, action) => {
            state = action.payload
            return state
        }
    }
})

export const { GET_ETUDIANTS } = etudiantReducer.actions

export const getAllStudents = (token) => (dispatch) => {
    BaseRoute.get("/users",{headers:{
        'Authorization': `bearer ${token}`
    }})
        .then(res => dispatch(GET_ETUDIANTS(res.data)))
        .catch(error => console.log(error))
}