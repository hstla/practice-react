import React, { useEffect, useState } from 'react'
import './Row.css';
import axios from '../api/axios';

const Row = ({ title, fetchUrl, isLargeRow, id }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovieData();
    }, [fetchUrl]);

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }
    const BASE_URL = "https://image.tmdb.org/t/p/original/";

    return (
        <div className='row'>
            {/* TITLE */}
            <h2>{title}</h2>
            <div className='slider'>
                <div className='slider__arrow-left'>
                    <span className='arrow'>
                        {"<"}
                    </span>
                </div>
                <div id={id} className='row__posters'>
                    {/* SEVERAL ROW__POSTER */}
                    {movies.map((movie) => (
                        <img
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            loading="lazy"
                            alt={movie.name}
                        />
                ))}
                </div>
                <div className='slider__arrow-right'>
                    <span className='arrow'>
                        {">"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Row;