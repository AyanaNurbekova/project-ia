import { Box } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { cardContext } from '../../contexts/MoviesCardContext';
import Navbar from '../Navbar/Navbar';
import MyListCard from './MyListCard';

const MyList = () => {
    const {cartData, getFilmToCart} = useContext(cardContext)
    useEffect(()=>{
        getFilmToCart()
        
    },[])
 console.log(cartData);

    return (
     <Box sx={{marginBottom: '105px'}}>
        <Navbar />
        <Box sx={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', }}>
        {cartData ? (cartData.map((item)=>(
            <MyListCard key={item.id} item={item} />        
            ))) : (<></>)}
        </Box>
    </Box>
    );
};

export default MyList;