import React, { useEffect } from 'react'
import { options } from '../utils/contants';
import { addTrailer } from '../utils/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import useMovieVideos from '../hooks/useMovieVideos';

function MovieBackground({id}) {

  
  useMovieVideos(id)
  const trailer =  useSelector((store) => store.movies?.trailer)
  
  return (
    <div className='w-screen'>
      <iframe 
        className='w-screen aspect-video'
        
    
        src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1&share=1&repeat=0"} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; encrypted-media; autoplay; gyroscope; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
      </iframe> 
    </div>
  )
}

export default MovieBackground
