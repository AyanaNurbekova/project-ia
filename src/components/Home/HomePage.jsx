import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './HomePage.css'
import Navbar from '../Navbar/Navbar';

export default function HomePage () {
  return (
    <Box >
        <Navbar/>
      <Box 
       className='text-main'
       position="relative">
       <Box>
          <Typography 
           component="div"
           sx={{ 
           display: 'flex', 
           color: 'red', 
           fontSize: '120px',
           fontWeight: 'bold',
           justifyContent: 'center', 
           textAlign:'center'
           }}>
           WELCOME
            to
           REACTFLIX
         </Typography>
       </Box>
        <Typography 
         sx={{
          fontSize:'3rem',
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom:'60px'
        }}
        >
         Unlimited movies,TV 
         shows, and more.
        </Typography>
      </Box>
    </Box>
     
  ) ;
}












