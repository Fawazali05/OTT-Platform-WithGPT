import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

function GptMovieSuggestions() {

  const gpt = useSelector((store)=>store.gpt)
  const {movies, gptResults} = gpt

  return (
    <div className='justify-center relative z-50 bg-black mx-4 my-4 rounded-sm bg-opacity-50 '>
      {
      movies !== null &&
      movies?.map((movie,index)=>(        
        <MovieList className="relative z-50" key={movie} title={movie} movies={gptResults[index]}></MovieList>
      )
      )
      }
    </div>
  )
}

export default GptMovieSuggestions
