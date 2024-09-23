import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { options } from "../utils/contants";
import { useEffect } from "react";
const useMovieVideos = (id)=>{
    console.log("id : hook ", id);
    
    const dispatch = useDispatch()

    const getMovieVideos = async() => {
      try{
        const videos = await fetch("https://api.themoviedb.org/3/movie/" + id + "/videos", options);
        // console.log("videos  : ", videos);
        const json = await videos.json()
        console.log("json : ", json.results);

        const filteredData = json.results.filter(video => (video.type === "Trailer"))
        const trailer = filteredData.length ? filteredData[0] : json.results[0] 
    
        dispatch(addTrailer(trailer))
      }
      catch(error)
      {
        console.log("error  :", error);
        
      }
    };

    useEffect(()=>{
      getMovieVideos()
    },[])
}

export default useMovieVideos;