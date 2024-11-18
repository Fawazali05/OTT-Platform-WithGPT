import React from 'react'
import { useRef } from 'react'
import { client } from '../utils/openAI'
import { options, TMDB_SEARCH_MOVIE_API } from '../utils/contants'
import { useDispatch } from 'react-redux'
import { setGptData } from '../utils/gptSlice'
function GptSearchBar() {

  const searchText = useRef(null)
  const dispatch = useDispatch()
  const searchMovieTMDB = async(movie)=>{
    let url = TMDB_SEARCH_MOVIE_API + movie + "&include_adult=false&language=en-US&page=1";
    const res = await fetch(url,options)
    const resjson = await res.json()
    return resjson.results;
  }
  
  const handleSearch = async()=>{
    
    const gptQuery = "act as a movie recommendation system and suggest some movies for the query : " + searchText.current.value + ". Only give the names of the top 5 movies separated by commas.The response should look like this : MovieOneName,MovieTwoName,MovieThreeName"
    
    const response = await client.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    
    const data = response.choices[0].message.content.split(", ");
    
    const movies = data.map((movie)=> searchMovieTMDB(movie))
    const movieData = await Promise.all(movies)
    let movieList = [] 
    movieData.map((movie)=>{
      movieList = [...movie]
    })
    
    dispatch(setGptData({movies : data, gptResults : movieData}))
    }
    
  return (
    <div className='sm:pt-[10%] pt-[20%] flex justify-center relative '>
      <form className='sm:w-1/2 w-3/4 grid-cols-12 flex bg-black bg-opacity-50 items-center px-4  ' onSubmit={(e)=>e.preventDefault()}>
        <input 
        ref={searchText} 
        className='col-span-9 p-2 m-4 sm:text-sm text-xs w-3/4 font-normal rounded-sm ' 
        placeholder="What would you like to watch today?🍿" 
        type="text"></input>
        <button  className='col-span-3 bg-red-600 p-2 text-white rounded-sm sm:px-4 sm:py-2 px-2 py-1 sm:text-sm text-xs h-fit' 
        onClick={handleSearch}>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar
