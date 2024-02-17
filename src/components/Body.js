import React, { useState, useEffect } from 'react'
import useMovieList from '../utils/useMovieList'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const Body = () => {
    const movieList = useMovieList();
    return (
        <div className='d-flex flex-wrap'>
            {Array.isArray(movieList) && movieList.map((movie, index) => (
                <MovieCard key={index} {...movie} />
            ))}
            {/* <MovieCard {...movieList[0]} /> */}
        </div>
    )
}

export default Body