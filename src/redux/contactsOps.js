import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Contact from "../components/Contact/Contact";


axios.defaults.baseURL = 'https://66b9f327fa763ff550fa3dec.mockapi.io/';

export const fetchContacts = createAsyncThunk('fetchContacts', async (_, thunkApi) => {
    try {
        const { data } = await axios.get('contacts');
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.massage);
    }
});

export const addContact = createAsyncThunk('addContact', async (body, thunkApi) => {
    try {
        const { data } = await axios.post('contacts', body);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.massage);
    }
})

export const deleteContact = createAsyncThunk('deleteContact', async (id, thunkApi) => {
    try {
        const { data } = await axios.delete(`contacts/${id}`);
        return data.id;
    } catch (error) {
        return thunkApi.rejectWithValue(error.massage);
    }
});
