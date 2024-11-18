import React from 'react'
import Header from './Header'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useNowPlayingMovies from '../hooks/useNowPlaying';
export default function Browse() {

  const showGPT = useSelector((store)=>store.gpt.showGptSearch)
  
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useNowPlayingMovies();
  return (
    <div className="">
      <Header ></Header>
      {showGPT}
      {
        showGPT ?(<GptSearch></GptSearch>) :
        (
        <>
          <MainContainer></MainContainer>
          <SecondaryContainer></SecondaryContainer>
        </>
        )
      }
      
    </div>
  )
}
