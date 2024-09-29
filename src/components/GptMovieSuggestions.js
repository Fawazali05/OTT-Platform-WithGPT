import React from 'react'
import { useSelector } from 'react-redux'

function GptMovieSuggestions() {

  const gpt = useSelector((store)=>store.gpt)
  const {movies, gptResults} = gpt

  return (
    <div>
      
      <h1> </h1>
    </div>
  )
}

export default GptMovieSuggestions
