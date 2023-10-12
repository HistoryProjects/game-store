import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {baseUrl} from '../../../Api';

const key = process.env.REACT_APP_API_KEY;
const rating = '&rating__gt=60&metacritic=60,100';
const dates = '&dates=2002-01-01,2023-12-31';

const initialState = {
    searchValue: '',
    searchGames: []
}



export const getSearchGames = createAsyncThunk(
    'search/getSearchGames',
    async (search, {rejectWithValue, dispatch}) =>{
            const res = await axios.get(`${baseUrl}games?key=${key}&search=${search}${rating}${dates}&search_precision=true`);
            let data = res.data.results;
            
            if(data.length === 0){
                alert('По вашему запросу не найдено ни одной игры');
            }else{
                dispatch(setSearchGames(data));
            }
            
            dispatch(setSearchValue(''));
    }
)


const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            const data = action.payload;
            state.searchValue = data;
        },
        setSearchGames: (state, action) => {
            state.searchGames = action.payload;
        }
    },
    extraReducers: {},
   
})

export const { setSearchValue, setSearchGames } = searchSlice.actions;
export default searchSlice.reducer;

