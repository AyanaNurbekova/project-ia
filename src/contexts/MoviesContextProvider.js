import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { JSON_API_MOVIES } from '../const';

export const moviesContext = createContext();
export const useMovies = () => {
    return useContext(moviesContext);
};

//! add
const MoviesContextProvider = ( {children} ) => {
    const [data, setData] = useState([])

    async function addMovies(obj) {
    await axios.post(JSON_API_MOVIES, obj);
    getData();
    }
//!read
async function getData(){
    let {data} = await axios.get(JSON_API_MOVIES);
    setData(data);
    console.log(data);
}

 //!delete
 async function deleteMovies(id){
    await axios.delete(`${JSON_API_MOVIES}/${id}`);
    getData()
}

    const values = {
        addMovies,
        getData,
        data,
        deleteMovies,
    }
    return (
        <moviesContext.Provider value={values}>{children}</moviesContext.Provider>
    );
};

export default MoviesContextProvider;