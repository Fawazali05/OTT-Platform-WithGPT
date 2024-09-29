import React from 'react'
import Header from './Header'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
export default function Browse() {

  const showGPT = useSelector((store)=>store.gpt.showGptSearch)
  
  usePopularMovies();
  useTopRatedMovies();
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
