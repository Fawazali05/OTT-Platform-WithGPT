import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { options } from "../utils/contants";
import { useEffect } from "react";
const useMovieVideos = (id)=>{
    
    const dispatch = useDispatch()
    const trailerVideo = useSelector((store)=>store.movies.trailer)
    useEffect(()=>{
      !trailerVideo && getMovieVideos()
    },[])
    const getMovieVideos = async() => {
      try{
        const videos = await fetch("https://api.themoviedb.org/3/movie/" + id + "/videos", options);
        const json = await videos.json()

        const filteredData = json.results.filter(video => (video.type === "Trailer"))
        const trailer = filteredData.length ? filteredData[0] : json.results[0] 
    
        dispatch(addTrailer(trailer))
      }
      catch(error)
      {
        console.log("error  :", error);
        
      }
    };

}

export default useMovieVideos;