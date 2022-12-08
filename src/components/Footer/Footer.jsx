import { Box, List, ListItem, Typography, Link, Button } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {


  const row1 = [
    'Audio Description',
    'Investor Relations',
    'Legal Notices', 
  ];

  const row2=[
    'Helps Center',
    'Jobs',
    'Cookie Preferences',
  ];

  const row3=[
    'Gifts Cards',
    'Terms of Use',
    'Corporate Information',
  ];

  const row4=[
    'Media Center',
    'Privacy',
    'Contact Us',
  ];


  // const theme = createTheme({
    // breakpoints: {
        // values: {
            // xs: 0,
            // sm: 600,
            // md: 1024,
            // lg: 1200,
            // xl: 1536,
        // },
    // },
  // });

  return (

    <Box sx={{
      borderBottom: '8px solid #222',
      backgroundColor: '#141414',
      }}
    >
      <Box className='footer-bigblock'
        sx={{
        display: 'block',
        backgroundColor: '#141414',
        margin: 'auto ',
        maxWidth: '990px',
        padding: '0 4%',
        fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif',
      }}>
        <List className='icons'
        sx={{
          display: 'flex',
          width: '15%',
          
        }}
        >
          <ListItem>
             <Link 
              href='https://www.facebook.com/Netflix/' 
              className='facebook-icon'>
              <FacebookIcon sx={{color:'white'}} />
             </Link>
          </ListItem>
          
          <ListItem>
             <Link 
              href='https://www.instagram.com/Netflix' 
              className='instagram-icon'>
              <InstagramIcon sx={{color:'white'}} />
             </Link>
          </ListItem>
       
          <ListItem>
             <Link 
              href='https://www.youtube.com/@Netflix' 
              className='youtube-icon'>
              <YouTubeIcon sx={{color: 'white'}}  />
             </Link>
          </ListItem>
        </List>

        <Box className='footer-list'
         sx={{
          display: 'flex',
          // [theme.breakpoints.down('md')]: {
          //     display: 'block',
          // },
          justifyContent: 'space-between',
        }}>
          <Box
           
            className='row1'>
            <List
              sx={{
              alignItems: 'flex-start',
              display:'flex',
              flexDirection: 'row',
              flexWrap:'wrap',
              fontSize:'18px',
              margin:'0 0 10px',
              padding:'0',
              // sx={{
                // [theme.breakpoints.down('md')]: 
                    // padding: '0',
                // }},
             }}
            >{row1.map((i, index) => (
             <ListItem 
               key={index} 
               sx={{
               padding: '13px',
               margin: 0,
               // [theme.breakpoints.down('md')]: {
                   // display: 'none',
               // },
               }}
              >{<Link
                  sx={{
                    color: 'grey',
                    cursor: 'pointer',
                    transition: '0.5s',
                  }}
                >
                  {i}
                </Link>}
              </ListItem>
              ))}
            </List>
          </Box>

          <Box className='row2'>
            <List
              sx={{
              alignItems: 'flex-start',
              display:'flex',
              flexDirection: 'row',
              flexWrap:'wrap',
              fontSize:'18px',
              margin:'0 0 10px',
              padding:'0',
              // sx={{
                // [theme.breakpoints.down('md')]: 
                    // padding: '0',
                // }},
             }}
            >{row2.map((i, index) => (
             <ListItem 
               key={index} 
               sx={{
               padding: '13px',
               margin: 0,
               // [theme.breakpoints.down('md')]: {
                   // display: 'none',
               // },
               }}
              >{<Link
                  sx={{
                    color: 'grey',
                    cursor: 'pointer',
                    transition: '0.5s',
                  }}
                >
                  {i}
                </Link>}
              </ListItem>
              ))}
            </List>
          </Box>

          <Box className='row3'>
            <List
              sx={{
              alignItems: 'flex-start',
              display:'flex',
              flexDirection: 'row',
              flexWrap:'wrap',
              fontSize:'18px',
              margin:'0 0 10px',
              padding:'0',
              // sx={{
                // [theme.breakpoints.down('md')]: 
                    // padding: '0',
                // }},
             }}
            >{row3.map((i, index) => (
             <ListItem 
               key={index} 
               sx={{
               padding: '13px',
               margin: 0,
               // [theme.breakpoints.down('md')]: {
                   // display: 'none',
               // },
               }}
              >{<Link
                  sx={{
                    color: 'grey',
                    cursor: 'pointer',
                    transition: '0.5s',
                  }}
                >
                  {i}
                </Link>}
              </ListItem>
              ))}
            </List>
          </Box>                    

          <Box className='row4'>
            <List
              sx={{
              alignItems: 'flex-start',
              display:'flex',
              flexDirection: 'row',
              flexWrap:'wrap',
              fontSize:'18px',
              margin:'0 0 10px',
              padding:'0',
              // sx={{
                // [theme.breakpoints.down('md')]: 
                    // padding: '0',
                // }},
             }}
            >{row4.map((i, index) => (
             <ListItem 
               key={index} 
               sx={{
               padding: '13px',
               margin: 0,
               // [theme.breakpoints.down('md')]: {
                   // display: 'none',
               // },
               }}
              >{<Link
                  sx={{
                    color: 'grey',
                    cursor: 'pointer',
                    transition: '0.5s',
                  }}
                >
                  {i}
                </Link>}
              </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        <Box className='footer-btn'>
          <Button sx={{
            marginLeft:'10px',
            marginBottom: '10px',
            background: 'transparent',
            border: '1px solid grey',
            color: 'grey',
            fontSize: '16px',
            padding: '2',
            fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif'
          }}
          >
            Service Code
          </Button>
        </Box>


        <Box sx={{
          padding:'3px',
          margin: '5px'
        }}>
          <Typography
          sx={{
            color:'grey',
            fontSize:'16px', 
          }}>
            {' '}
            © 2021 Reactflix, Inc.
          </Typography>
        </Box>
        
      </Box>
    </Box>
  );
};

export default Footer;