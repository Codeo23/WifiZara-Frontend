import { createSlice } from "@reduxjs/toolkit"
import { BaseRoute } from "../apis/BaseRoute"

export const feedbackReducer = createSlice({
    name: 'etudiantReducer',
    initialState: {},
    reducers: {
        ALL_FEEDBACKS: (state, action) => {
            state = action.payload
            return state
        }
    }
})

export const { ALL_FEEDBACKS } = feedbackReducer.actions

export const getALlFeedbacks = (token) => (dispatch) => {
    BaseRoute.get("/users",{headers:{
        'Authorization': `bearer ${token}`
    }})
        .then(res => console.log(res))
        .catch(error => console.log(error))
}