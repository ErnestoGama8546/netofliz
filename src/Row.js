import React, { useState, useEffect } from "react"
import axios from './axios'

function Row({ title }) {
    const [movies,setMovies] = useState ([]);

    // A snippet of code which runs based on a specific condition
    useEffect(()=> {
        //if [] run blancks when row loads, and dont run again
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return(
        <div className="row">
            {title}

            <div className="row_posters">
              {/* several row posters */}
              
              {movies.map()}
            </div>
        </div>
    )
    
}

export default Row