import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { JSON_API_MOVIES } from '../const';

export const moviesContext = createContext();
export const useMovies = () => {
    return useContext(moviesContext);
};

//! add
const MoviesContextProvider = ({children}) => {
    const [data, setData] = useState([])
    const [oneMovies, setOneMovies] = useState({})

    async function addMovies(obj) {
    await axios.post(JSON_API_MOVIES, obj);
    getData();
}
//!read
async function getData(){
    let {data} = await axios.get(`${JSON_API_MOVIES}/${window.location.search}`);
    setData(data);
    console.log(data);
}

//! get one
async function getOneMovies(id){
    let result = await axios.get(`${JSON_API_MOVIES}/${id}`);
    setOneMovies(result.data)
}

//!update   
async function updateMovies(id, editedMovies){
    await axios.patch(`${JSON_API_MOVIES}/${id}`, editedMovies)//<=
    getData()
}

 //!delete
 async function deleteMovies(id){
    await axios.delete(`${JSON_API_MOVIES}/${id}`);
    getData()
}

 //! ===============FILTER
 const navigate = useNavigate();
 const location = useLocation();
 const [page, setPage] = useState(1);
 const itemsPerPage = 12;
 const count = Math.ceil(data.length / itemsPerPage);

 function currentData() {
   const begin = (page - 1) * itemsPerPage;
   const end = begin + itemsPerPage;
   return data.slice(begin, end);
 }
 const [searchParams, setSearchParams] = useSearchParams()
 useEffect(()=> {
   getData();
   setPage(1)
 }, [searchParams])

 const fetchByParams = async (query, value) => {
   const search = new URLSearchParams(location.search);

   if (value === 'All') {
     search.delete(query);
   } else if (query == '_sort') {
     search.set(query, 'price');
     search.set('_order', value);
   } else {
     search.set(query, value);
   }

   const url = `${location.pathname}?${search.toString()}`;
   navigate(url);
 };


    const values = {
        fetchByParams,
        oneMovies,
        addMovies,
        getData,
        data,
        deleteMovies,
        getOneMovies,
        updateMovies,
        page,
        setPage,
        count,
        currentData
    }
    return (
        <moviesContext.Provider value={values}>{children}</moviesContext.Provider>
    );
};

export default MoviesContextProvider;