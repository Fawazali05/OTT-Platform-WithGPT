import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieTitle from './MovieTitle'
import MovieBackground from './MovieBackground'

function MainContainer() {

  const movies = useSelector(store => store.movies.popularMovies)
  if(!movies) return
  
  const mainMovie = movies[4];
  
  
  return (
    <div>
      <MovieTitle title={mainMovie.title} overview={mainMovie.overview} ></MovieTitle>
      <MovieBackground id={mainMovie.id}></MovieBackground>
    </div>
  )
}

export default MainContainer
