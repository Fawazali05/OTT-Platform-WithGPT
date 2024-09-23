import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/moviesSlice"
import { options } from "../utils/contants"
import { useEffect } from "react"
const usePopularMovies = ()=>{
    const dispatch = useDispatch()

  const popularMovies = async() =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/popular", options)
    console.log("data : ", data);
    
    const json = await data.json()
    dispatch(addPopularMovies(json.results))  
  }

  useEffect( ()=>{
    popularMovies()
  }
  ,[])

}

export default usePopularMovies