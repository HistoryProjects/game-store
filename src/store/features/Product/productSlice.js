import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {baseUrl} from '../../../Api';
const key = process.env.REACT_APP_API_KEY;

const initialState = {
    ratingGames: [],
    genreGames: [],
    genreList: [],
    currentPage: 1,
    thisPage: false,
}


export const getGenres = createAsyncThunk(
    'product/getGenres',
    async (_,{rejectWithValue, dispatch}) =>{
        const res = await axios.get(`${baseUrl}genres?key=${key}`);
        //console.log(res.data.results)
        dispatch(setGenres(res.data.results))
    }
)

export const getProductsRating = createAsyncThunk(
    'product/getProductsRating',
    async (_,{rejectWithValue, dispatch}) =>{
        const res = await axios.get(`${baseUrl}games?key=${key}&page_size=40&rating__gt=60`);
        dispatch(setRatingGames(res.data.results))
    }
)

export const getProductsGenre = createAsyncThunk(
    'product/getProductsGenre',
    async (params, {rejectWithValue, dispatch}) =>{
        const { genre, page } = params;
        const res = await axios.get(`${baseUrl}games?key=${key}&genres=${genre}&page_size=20&page=${page}`);
        dispatch(setGenreGames(res.data.results))
    }
)



const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setRatingGames: (state, action) => {
            state.ratingGames = action.payload
        },
        setGenreGames: (state, action) => {
            const newGames = action.payload.filter((game) => {
                return !state.genreGames.some((existingGame) => existingGame.id === game.id);
            });

            // Добавляем новые игры в массив
            state.genreGames.push(...newGames);
            
        },
        setGenres: (state, action) => {
            state.genreList = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        cleanGenreGames: (state) => {
            state.genreGames.length = 0
        },
        setNextPage: (state) => {
            state.currentPage += 1;
        },
        setThisPage: (state, action) => {
            state.thisPage = action.payload;
        }
        /*cleanGenreGamesArr: (state, ) =>{
            state.genreGames.length = 20;
        }*/
        

    },
    extraReducers: {},
   
})

export const {
    setRatingGames, 
    setGenreGames, 
    setGenres, 
    setNextPage,
    setCurrentPage,
    cleanGenreGames,
    setThisPage

} = productSlice.actions;
export default productSlice.reducer;
