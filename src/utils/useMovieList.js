import { useState,useEffect } from "react";

const useMovieList = () =>{
    const[movieList,setMovieList] = useState({});

    useEffect(()=>{
        getMovieList();
    },[]);

    async function getMovieList(){
        const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const json = await data.json();
        setMovieList(json);
    }

    return movieList;
}

export default useMovieList;