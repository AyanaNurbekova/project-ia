import { Box } from '@mui/material';
import React from 'react';
import Carusel from '../Carusel/Carusel';
const HomePage = () => {
    return (
        <div>
            <Box sx={{ width: '100%', marginBottom: 5 }}>
                    {/* <img
                        src="https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png"
                        alt=""
                        width={'100%'}
                    /> */}
                    {/* <Box><ReactPlayer width={'350px'} height={'250px'} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></Box> */}
                    <Carusel />
                </Box>
        </div>
    );
};

export default HomePage;