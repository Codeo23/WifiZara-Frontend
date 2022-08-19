import { createSlice } from "@reduxjs/toolkit"
import { BaseRoute } from "../apis/BaseRoute"

export const subNetworkReducer = createSlice({
    name: 'etudiantReducer',
    initialState: {},
    reducers: {
        ALL_SUBNETWORK: (state, action) => {
            state = action.payload
            return state
        }
    }
})

export const { ALL_SUBNETWORK } = subNetworkReducer.actions

export const getAllSubnetworks = (token) => (dispatch) => {
    BaseRoute.get("/subnetworks",{headers:{
        'Authorization': `bearer ${token}`
    }})
        .then(res => dispatch(ALL_SUBNETWORK(res.data)))
        .catch(error => console.log(error))
}