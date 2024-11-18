import React from 'react'
import play from '../assets/play.svg'
import info from '../assets/info.svg'
function MovieTitle({title,overview}) {

  
  
  return (
    <div className='pt-[20%] px-20 text-start text-white absolute bg-gradient-to-r from-black w-screen aspect-video'>
      <h2 className='text-4xl my-2'>{title}</h2>
      <p className='text-sm w-1/4 font-normal'>{overview}</p>
      <div className='flex space-x-4 my-4'>
      <button className='bg-white text-black p-2 px-5 rounded-sm text-sm hover:bg-gray-300 flex items-center'>
  <img src={play} alt="Play" className='w-6 h-6 mr-2' /> 
  Play
</button>

<button className='bg-white text-black p-2 px-5 rounded-sm text-sm hover:bg-gray-300 flex items-center'>
  <img src={info} alt="Play" className='w-6 h-6 mr-2' /> 
  More Info
</button>

      </div>
    </div>
  )
}

export default MovieTitle