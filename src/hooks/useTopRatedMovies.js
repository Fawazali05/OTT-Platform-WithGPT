import { useDispatch, useSelector } from "react-redux"
import {addTopRatedMovies} from "../utils/moviesSlice"
import { options } from "../utils/contants"
import { useEffect } from "react"

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch()
  const topRatedMovies = useSelector((store)=>store.movies.topRatedMovies)

  const getTopRatedMovies = async() =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", options)
    
    const json = await data.json()
    dispatch(addTopRatedMovies(json.results))  
  }

  useEffect( ()=>{
   !topRatedMovies && getTopRatedMovies()
  }
  ,[])

}

export default useTopRatedMovies