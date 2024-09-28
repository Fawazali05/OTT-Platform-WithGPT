import React from 'react'

function GptSearchBar() {
  return (
    <div className='pt-[10%] flex justify-center relative z-50 '>
      <form className='w-1/2 grid-cols-12 bg-black bg-opacity-50 '>
        <input className='col-span-9 p-2 m-4 text-sm w-3/4 font-normal rounded-sm ' placeholder="What would you like to watch today?🍿" type="text"></input>
        <button className='col-span-3  bg-red-600 p-2 text-white rounded-sm px-4 py-2 text-sm'>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar
