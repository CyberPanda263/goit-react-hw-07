import { configureStore } from "@reduxjs/toolkit";
import { contactReduser } from "./contacts/slice";
import { filterReducer } from "./filter/slice";



export const store = configureStore({
    reducer: {
        contact: contactReduser,
        filter: filterReducer,
    },
})