import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false,
        movies : null,
        gptResults : null
    },
    reducers : {
        toggleGptSearchView(state)
        {
            state.showGptSearch = !state.showGptSearch
        },
        setGptData(state,action)
        {
            const {movies, gptResults} = action.payload
            state.movies = movies
            state.gptResults = gptResults
        }
    }
})

export const {toggleGptSearchView,setGptData} = gptSlice.actions
export default gptSlice.reducer;