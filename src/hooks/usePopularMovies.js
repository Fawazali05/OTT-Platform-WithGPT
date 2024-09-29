import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../utils/moviesSlice"
import { options } from "../utils/contants"
import { useEffect } from "react"

const usePopularMovies = ()=>{
    const dispatch = useDispatch()
  const popularMovies = useSelector((store)=>store.movies.popularMovies)

  const getpopularMovies = async() =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/popular", options)
    
    const json = await data.json()
    dispatch(addPopularMovies(json.results))  
  }

  useEffect( ()=>{
   !popularMovies && getpopularMovies()
  }
  ,[])

}

export default usePopularMovies