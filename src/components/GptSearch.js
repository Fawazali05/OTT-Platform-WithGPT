import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
function GptSearch() {
  return (
    <div className=' items-center '>
        <div className="fixed bg-neutral-900  ">
            <img className="opacity-20" src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg" alt="background-image"></img>
        </div>
      <GptSearchBar></GptSearchBar>
      <GptMovieSuggestions></GptMovieSuggestions>
    </div>
  )
}

export default GptSearch
