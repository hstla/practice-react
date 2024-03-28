import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import requests from '../api/requests';
import './Banner.css';


export default function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const request = await axios.get(requests.fetchNowPlaying);
        console.log(request);
        
        const movieId = 
            request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ].id;

        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
            params: { append_to_response: "videos" },
        });
        setMovie(movieDetail);
    }

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return(
        <header
            className='banner'
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "top center",
                backgroundSize: "cover",
            }}
        >
            <div className='banner__contents'>
            {/* Tittle */}
            <h1 className='banner__title'>
                {movie?.title || movie?.nave|| movie?.original_name}
            </h1>
            <div className='banner__buttons'>
                <button className='banner__button play'>
                    play
                </button>
                <button className='banner__button info'>
                    <div className='space'></div> More Information
                </button>
            </div>
            {/* DIV > 2 BUTTONS */}
            <h1 className='banner__description'>
                {truncate(movie?.overview, 100)}
            </h1>
            {/* Description */}
            </div>
            <div className='banner__fadeBottom'/>
        </header>
    )
}