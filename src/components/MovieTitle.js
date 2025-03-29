import React from 'react'
import play from '../assets/play.svg'
import info from '../assets/info.svg'
function MovieTitle({title,overview}) {

  return (
    <div className='pt-[15%] px-20 text-start text-white absolute bg-gradient-to-r from-black w-screen aspect-video'>
      <h2 className='text-sm sm:text-xl md:text-2xl lg:text-4xl my-2'>{title}</h2>
      <p  className='hidden lg:block text-xs sm:text-sm w-2/4 md:w-1/4 font-normal' >{overview}</p>
      <div className='flex space-x-4 my-4 '>
      <button className='bg-white text-black p-2 px-5 rounded-sm text-sm sm:text-xs hover:bg-gray-300 flex items-center'>
  <img src={play} alt="Play" className='sm:w-6 sm:h-6 w-3 h-3 mr-2' /> 
  Play
</button>

<button className='bg-white text-black sm:p-2 sm:px-5 p-1 px-2 rounded-sm text-sm hover:bg-gray-300 flex items-center'>
  <img src={info} alt="more info" className='sm:w-6 w-3 sm:h-6 h-3 mr-2' /> 
  More Info
</button>

      </div>
    </div>
  )
}

export default MovieTitle