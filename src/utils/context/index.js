import {configureStore} from "@reduxjs/toolkit"
import { etudiantReducer } from "./etudiant.reducer"
import { authReducer } from "./auth.reducer"

export const store = configureStore({
    reducer:{
        etudiant: etudiantReducer.reducer,
        authentification: authReducer.reducer
    }
})