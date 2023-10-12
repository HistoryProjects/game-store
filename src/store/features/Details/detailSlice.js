import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import {baseUrl} from '../../../Api';

const key = process.env.REACT_APP_API_KEY;

const initialState = {
    moreInfo: []
}



export const getMoreInfo = createAsyncThunk(
    'details/getMoreInfo',
    async (id, {rejectWithValue, dispatch}) =>{
        const res = await axios.get(`${baseUrl}games/${id}?key=${key}`);
        console.log(res.data);
        dispatch(setMoreInfo(res.data))
    }
)

const detailSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        setMoreInfo: (state, action) => {
            state.moreInfo = action.payload
        },

    },
    extraReducers: {}
})


export const {setMoreInfo} = detailSlice.actions;
export default detailSlice.reducer;