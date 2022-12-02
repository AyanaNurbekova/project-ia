import { Box } from '@mui/system';
import React, { useContext, useEffect } from 'react';
import { moviesContext } from '../../contexts/MoviesContextProvider';
import MoviesCard from '../MoviesCard/MoviesCard';
import './Movies.css'
const Movies = () => {
    const {data, getData} = useContext(moviesContext);
    useEffect(()=>{
        getData();
    }, []);
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', m:5, mt:5}}>
        {data.map((item)=>(
            <MoviesCard key={item.id} item={item}/>        
        ))}
    </Box>
    );
};

export default Movies;