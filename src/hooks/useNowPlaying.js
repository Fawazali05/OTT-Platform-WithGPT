import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { options } from "../utils/contants"
import { useEffect } from "react"

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()
  const nowplayingMovies = useSelector((store)=>store.movies.nowPlayingMovies)

  const getNowplayingMovies = async() =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing", options)
    
    const json = await data.json()
    dispatch(addNowPlayingMovies(json.results))  
  }

  useEffect( ()=>{
   !nowplayingMovies && getNowplayingMovies()
  }
  ,[])

}

export default useNowPlayingMovies;