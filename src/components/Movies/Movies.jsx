import { Box } from '@mui/system';
import React, { useContext, useEffect} from 'react';
import { moviesContext } from '../../contexts/MoviesContextProvider';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesSort from '../MoviesSort/MoviesSort';
import Navbar from '../Navbar/Navbar';
import PaginationMovies from '../Pagination/Pagination';
import './Movies.css'
const Movies = () => {
    const {data, getData, currentData } = useContext(moviesContext);
    useEffect(()=>{
        getData();
    }, []);
    
    return (
        <Box>
        <Box sx={{marginTop: '10px', backgroundColor: '#181818', color: '#fff'}}><MoviesSort /></Box>
        <Box sx={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
          <Navbar/>
        {data ? (currentData().map((item)=>(
            <MoviesCard key={item.id} item={item} />        
        ))) : (
            <></>
        )}
        <PaginationMovies/>
        </Box>
        </Box>
    );
};

export default Movies;