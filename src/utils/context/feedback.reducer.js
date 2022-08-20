import { createSlice } from "@reduxjs/toolkit"
import { BaseRoute } from "../apis/BaseRoute"

export const feedbackReducer = createSlice({
    name: 'feedbackReducer',
    initialState: {},
    reducers: {
        GET_FEEDBACKS: (state, action) => {
            return action.payload
        }
    }
})

export const { GET_FEEDBACKS } = feedbackReducer.actions

export const getAllFeedbacks = () => (dispatch) => {
    BaseRoute.get("/feedbacks")
        .then(res => /*dispatch(GET_ETUDIANTS(res.data))*/console.log(res.data))
        .catch(error => console.log(error))
}
