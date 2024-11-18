import { addUpcomingMovies } from "../utils/moviesSlice"
import { useDispatch, useSelector } from "react-redux"
import { options } from "../utils/contants"
import { useEffect } from "react"

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch()
  const upcomingMovies = useSelector((store)=>store.movies.upcomingMovies)

  const getUpcomingMovies = async() =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming", options)
    
    const json = await data.json()
    dispatch(addUpcomingMovies(json.results))  
  }

  useEffect( ()=>{
   !upcomingMovies && getUpcomingMovies()
  }
  ,[])
}


export default useUpcomingMovies;