import React from 'react'
import { IMAGE_BASE_URL } from '../utils/contants'

function MovieCard({posterID}) {
  return (
    <div className='w-36 sm:w-56 '>
      
      <img className='' src={IMAGE_BASE_URL + posterID}></img>
    </div>
  )
}

export default MovieCard
