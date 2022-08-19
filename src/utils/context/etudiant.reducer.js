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

export const loginStudent = (data) => (dispatch) => {
    BaseRoute.post("/login", data)
        .then(res => console.log(res))
        .catch(error => console.log(error))
}

export const getAllStudents = () => (dispatch) => {
    BaseRoute.get("/users")
        .then(res => console.log(res))
        .catch(error => console.log(error))
}