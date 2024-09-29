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
    console.log("resjson : ", resjson.results);
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
    console.log("results : ", movieData);
    
    dispatch(setGptData({movies : data, gptResults : movieData}))
    }
    
  return (
    <div className='pt-[10%] flex justify-center relative '>
      <form className='w-1/2 grid-cols-12 bg-black bg-opacity-50 ' onSubmit={(e)=>e.preventDefault()}>
        <input 
        ref={searchText} 
        className='col-span-9 p-2 m-4 text-sm w-3/4 font-normal rounded-sm ' 
        placeholder="What would you like to watch today?🍿" 
        type="text"></input>
        <button  className='col-span-3 bg-red-600 p-2 text-white rounded-sm px-4 py-2 text-sm' 
        onClick={handleSearch}>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar
