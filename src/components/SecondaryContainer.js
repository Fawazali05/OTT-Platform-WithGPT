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
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}></MovieList>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}></MovieList>
      </div>
    </div>
  )
}

export default SecondaryContainer
