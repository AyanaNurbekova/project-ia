/* eslint-disable jsx-a11y/iframe-has-title */
// import { InsertEmoticon } from '@mui/icons-material';

import {Item } from '@mui/material';
import React from 'react';

const Player = () => {
    
    return (
        <div>
        <iframe 
        src={Item.movies}
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/>
        </div>
    );
};

export default Player;