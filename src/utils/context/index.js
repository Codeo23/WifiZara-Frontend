import {configureStore} from "@reduxjs/toolkit"
import { etudiantReducer } from "./etudiant.reducer"

export const store = configureStore({
    reducer:{
        etudiant: etudiantReducer.reducer
    }
})