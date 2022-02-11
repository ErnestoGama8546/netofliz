import React, { useState, useEffect } from 'react';
import axios from "./axios";
import requests from "./requests";

function Banner() {
const [movie, setMovie] = useState([]);

useEffect(() => {
    async function fetchData() {
const request = await axios.get(requests.fetchNetflixOriginals);
setMovie(
    request.data.results[
        Math.floor(Math.random() * requests.data.results.length - 1)
    ]
)
    }
    fetchData();
}, []);

  return <header className='banner'
            style={{
                backgrounSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
  > 
      <div className='banner_contents'/>
        <h1>
           {movie?.tittle || movie?.name || movie?.original_name} 
        </h1>
        <div className='banner_buttons'>
            <button className='banner_button'></button>
            <button className='banner_button'></button>
        </div>
        {/* div two  bottons  */}
        {/* Description */}
  </header>;
}

export default Banner;
