import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";


const initialState = {
    items: [],
    isLoading: false,
    isError: false,
}

const slice = createSlice({
    name: 'contact',
    initialState,
    
    extraReducers: builder => {
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchContacts.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.isError = true;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload);
        })
        .addCase(addContact.rejected, (state, action) => {
            state.isError = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        })
        .addCase(deleteContact.rejected, (state, action) => {
            state.isError = true;
        })
    }
})

export const contactReduser = slice.reducer;
