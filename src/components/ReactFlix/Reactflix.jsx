import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import './Reactflix.css'

export default function Reactflix () {
  const navigate = useNavigate();

  return (
    <Box className='reactflix-bg'>
      <Box
       className='navbar'
       position="relative">
        <Toolbar sx={{
          display: 'flex',
          justifyContent:'space-between'
          }} >

          <Box>
          <Typography 
           component="div"
           sx={{ 
           display: 'flex', 
           color: 'red', 
           fontSize: '35px',
           fontWeight: 'bold',
           justifyContent: 'start' 
           }}>
           REACTFLIX
          </Typography>
         </Box>

          <Button 
          onClick={() => navigate('/auth')}
          sx={{border:'1.5px solid red',
          bgcolor:'black',}}
          color="error"
          edge="end"
          >Sign in</Button>
          
        </Toolbar>
      </Box>

      <Box 
       className='text-main'
       position="relative">

       <Box>
          <Typography 
           component="div"
           sx={{ 
           display: 'flex', 
           color: 'red', 
           fontSize: '180px',
           fontWeight: 'bold',
           justifyContent: 'center' 
           }}>
           REACTFLIX
         </Typography>
       </Box>


        <Typography 
         sx={{
          fontSize:'3rem',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
        >
         Unlimited movies,TV 
         shows, and more.
        </Typography>
         

        <Typography 
         sx={{
         fontSize:'1.6rem',
         fontWeight: '300',
        }} 
        >
         Watch anywhere. Cancel anytime.
        </Typography>

        <Typography
        sx={{
          fontSize:'1.5rem',
          marginBottom:'150px',
          fontWeight: '300',

        }}
        >
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>


      </Box>

      <Box className='big-box'>

       <Box className='box-1'>
         <Box className='box-box-1'>
           <Box className='text-box-left'>
            <Typography 
            sx={{
               fontSize: '3.125rem',
               lineHeight: '1.1',
               marginBottom: '0.5rem',
             }}>
             Enjoy on your TV.
             </Typography >
             <Typography 
             sx={{
               fontSize: '1.625rem',
             }}
             >
             Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
             </Typography>
           </Box>

           <Box className='right-box'>

            <Box className='animation-1'>
               <Box className='img'>
                 <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="TV" />
                 <Box className='video'>
                 <video className="cart-video" data-uia="our-story-card-video" autoPlay="" playsInline="" muted="" loop="">
                   <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/></video>
                 </Box>
               </Box>
             </Box> 
           </Box>
         </Box>
       </Box>

   
       <Box className="box2" >
         <Box className="box-box-2">
           <Box className="text-box-right">
             <Typography
             sx={{
              fontSize: '3rem',
              lineHeight: '1.1',
              marginBottom: '0.5rem',
            }}> Download your shows to watch offline.</Typography>
             <Typography
             sx={{
              fontSize: '1.625rem',
            }}>Save your favorites easily and always have something to watch.</Typography>
          </Box>

           <Box className="left-box-2">
             <Box className="animation-2">
               <img alt="" className="image-girl" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"/>
               <Box className="cart-btn">
                 <Box >
                   <img alt="book" className="img-b"src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"/>
                 </Box>
                 <Box className="cart-text">
                   <Typography >Stranger Things</Typography>
                   <Link >Downloading...</Link>
                 </Box>
                 <Box className="btn-downloading" ></Box>
              </Box>
            </Box>
          </Box>
        </Box>
       </Box>


       <Box className='box-3'>
         <Box className='box-box-3'>
           <Box className='text-box-left-3'>
            <Typography 
            sx={{
               fontSize: '3.125rem',
               lineHeight: '1.1',
               marginBottom: '0.5rem',
             }}>
             Watch everywhere.
             </Typography >
             <Typography 
             sx={{
               fontSize: '1.625rem',
             }}
             >
             Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
             </Typography>
           </Box>
           <Box className='right-box-3'>
            <Box className='animation-3'>
               <Box className='img'>
                 <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="TV" />
                 <Box className='video'>
                   <video className="cart-video-3" data-uia="our-story-card-video" autoPlay="" playsInline="" muted="" loop="">
                     <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"/>
                   </video>
                 </Box>
               </Box>
             </Box> 
           </Box>
         </Box>
       </Box>


       {/* <Box className="box2" >
          <Box className="box-box-2">
            <Box className="text-box-right">
              <Typography
              sx={{
               fontSize: '3.125rem',
               lineHeight: '1.1',
               marginBottom: '0.5rem',
             }}> Download your shows to watch offline.</Typography>
              <Typography
              sx={{
               fontSize: '1.625rem',
             }}>Save your favorites easily and always have something to watch.</Typography>
           </Box>
            <Box className="left-box-2">
              <Box className="animation-2">
                <img alt="" className="image-girl" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"/>
                <Box className="cart-btn">
                  <Box >
                    <img alt="book" className="img-b"src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"/>
                  </Box>
                  <Box className="cart-text">
                    <Typography >Stranger Things</Typography>
                    <Link >Downloading...</Link>
                  </Box>
                  <Box className="btn-downloading" ></Box>
               </Box>
             </Box>
           </Box>
         </Box>
        </Box> */}
      </Box>


    
    </Box>
     
  ) ;
}












