import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies : null,
        nowPlayingMovies : null,
        trailer : null
    },
    reducers : {
        addPopularMovies(state,action){
            state.popularMovies = action.payload
        },
        addTopRatedMovies(state,action){
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies(state,action){
            state.upcomingMovies = action.payload
        },
        addNowPlayingMovies(state,action){
            state.nowPlayingMovies = action.payload
        },
        addTrailer(state, action){
            state.trailer = action.payload
        }
    }
})

export const {addPopularMovies,addTopRatedMovies, addTrailer,addUpcomingMovies, addNowPlayingMovies} = moviesSlice.actions
export default moviesSlice.reducer;