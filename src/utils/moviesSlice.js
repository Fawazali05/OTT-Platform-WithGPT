import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        popularMovies : null,
        trailer : null
    },
    reducers : {
        addPopularMovies(state,action){
            state.popularMovies = action.payload
        },
        addTrailer(state, action){
            state.trailer = action.payload
        }
    }
})

export const {addPopularMovies, addTrailer} = moviesSlice.actions
export default moviesSlice.reducer;