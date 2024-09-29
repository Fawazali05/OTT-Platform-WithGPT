import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

function SecondaryContainer() {

  const movies = useSelector((store)=> store.movies)
  return (
    <div className='  bg-black'>
      {/* Movie List */}
        {/* Movie Cards */}
      <div className='-mt-28'>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}></MovieList>
      <MovieList title={"Top-Rated Movies"} movies={movies.topRatedMovies}></MovieList>
      <MovieList title={"Critically Acclaimed"} movies={movies.popularMovies}></MovieList>
      <MovieList title={"Academy Award Winners"} movies={movies.popularMovies}></MovieList>
      </div>
    </div>
  )
}

export default SecondaryContainer
