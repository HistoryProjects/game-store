import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    favorites: []
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload) 
        },
        setGames: (state, action) => {
            state.favorites = action.payload
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(game => game.id !== action.payload)
        },
        cleanFavorites: (state) =>{
            state.favorites.length = 0;
        }

    }
})



export const { addFavorite, removeFavorite, cleanFavorites, setGames } = favoriteSlice.actions;
export default favoriteSlice.reducer;