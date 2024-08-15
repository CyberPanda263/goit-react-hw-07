import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://66b9f327fa763ff550fa3dec.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchAl', async (_, thunkApi) => {
    try {
        const { data } = await axios.get('contacts');
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.massage);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (body, thunkApi) => {
    try {
        const { data } = await axios.post('contacts', body);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.massage);
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkApi) => {
    try {
        const { data } = await axios.delete(`contacts/${id}`);
        return data.id;
    } catch (error) {
        return thunkApi.rejectWithValue(error.massage);
    }
});
