import React from 'react'
import play from '../assets/play.svg'
function MovieTitle({title,overview}) {

  
  
  return (
    <div className='pt-[25%] px-20 text-start text-white absolute bg-gradient-to-r from-black w-screen aspect-video'>
      <h2 className='text-5xl my-2'>{title}</h2>
      <p className='text-lg w-1/4'>{overview}</p>
      <div className='flex space-x-4 my-4'>
        <button className='bg-white text-black p-2 px-5 rounded-sm text-sm hover:bg-gray-300'> ▶ Play</button>
        <button className='bg-gray-600 text-white p-2 px-3 rounded-sm text-sm'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default MovieTitle