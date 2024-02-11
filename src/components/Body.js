import React, { useState, useEffect } from 'react'
import useMovieList from '../utils/useMovieList'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const Body = ({ tvShows, searchText }) => {
    const movieList = useMovieList();
    console.log(tvShows)
    return (
        <div className='d-flex flex-wrap'>
            {Array.isArray(movieList) && movieList.map((movie, index) => (
                <MovieCard key={index} {...movie} />
            ))}
            {/* {tvShows
                .filter((data) => data.show.name.toLowerCase().includes(searchText))
                .map((data) => (
                    <MovieCard key={data.show.id} {...data} />
                ))} */}
            {/* <MovieCard {...movieList[0]} /> */}
        </div>
    )
}

export default Body