import React from 'react'
import { IMAGE_BASE_URL } from '../utils/contants'

function MovieCard({posterID}) {
  console.log(" image url : ", IMAGE_BASE_URL);
  return (
    <div className='w-56 '>
      
      <img className='' src={IMAGE_BASE_URL + posterID}></img>
    </div>
  )
}

export default MovieCard
