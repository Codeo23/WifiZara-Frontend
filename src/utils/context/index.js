import {configureStore} from "@reduxjs/toolkit"
import { etudiantReducer } from "./etudiant.reducer"
import { authReducer } from "./auth.reducer"
import { subNetworkReducer } from "./subnetworks.reducer"
import { feedbackReducer } from "./feedback.reducer"

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    reducer:{
        etudiant: etudiantReducer.reducer,
        authentification: authReducer.reducer,
        subNetworks: subNetworkReducer.reducer,
        feedbacks: feedbackReducer.reducer
    }
})