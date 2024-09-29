import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title,movies}) {
  console.log("title : ", title);
  console.log(" movies : ", movies);
  
      
  return (
    <div className='px-6 relative'>
        <h1 className=' text-2xl font-semibold text-start py-5 text-white z-30 relative bg-transparent '>{title}</h1>
        <div className='flex overflow-x-scroll'>
          <div className='flex space-x-4'>
            {movies?.map((movie)=>  movie.poster_path && <MovieCard posterID={movie.poster_path}></MovieCard>  )}
          </div>
        </div>
    </div>
  )
}

export default MovieList
