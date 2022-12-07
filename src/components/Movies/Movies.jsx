import { Box } from '@mui/system';
import React, { useContext, useEffect} from 'react';
import { moviesContext } from '../../contexts/MoviesContextProvider';
import MoviesCard from '../MoviesCard/MoviesCard';
import Navbar from '../Navbar/Navbar';
import PaginationMovies from '../Pagination/Pagination';
import './Movies.css'
const Movies = () => {
    const {data, getData, currentData } = useContext(moviesContext);
    useEffect(()=>{
        getData();
    }, []);
    
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
          <Navbar/>
        {data ? (currentData().map((item)=>(
            <MoviesCard key={item.id} item={item} />        
        ))) : (
            <></>
        )}
        <PaginationMovies/>
        </Box>
    );
};

export default Movies;