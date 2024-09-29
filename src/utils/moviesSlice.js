import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        popularMovies : null,
        topRatedMovies : null,
        trailer : null
    },
    reducers : {
        addPopularMovies(state,action){
            state.popularMovies = action.payload
        },
        addTopRatedMovies(state,action){
            state.topRatedMovies = action.payload
        },
        addTrailer(state, action){
            state.trailer = action.payload
        }
    }
})

export const {addPopularMovies,addTopRatedMovies, addTrailer} = moviesSlice.actions
export default moviesSlice.reducer;