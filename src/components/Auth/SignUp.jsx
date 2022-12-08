import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Auth.css';
import { useNavigate } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import { useAuth } from '../../contexts/AuthContextProvider';

function Netflix(props) {
  return (
    <Typography 
    variant="body2" 
    align="center" {...props}>
      {'© 2021 Reactflix, Inc.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();  
  const {
    handleSignup,
  } = useAuth();

  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Box className='sign-up'
    sx={{
      weigth:'100%',
      height:'750px',
    }}>
    <ThemeProvider theme={theme}>
      <Box
       className='navbar'
       position="relative">
        <Toolbar sx={{
          display: 'flex', 
          justifyContent:'space-between',
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
        </Toolbar>
      </Box>
      <Box>
        <Container 
         component="main" 
         maxWidth="xs">
         <CssBaseline />
          <Box className='signup-box'
           sx={{
           marginTop:'80px',
           color: 'white',
           border: '2px solid black',
           padding:'5px 50px 0',
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           }}
          >
           <Typography 
           component="h1" 
           variant="h5"
           sx={{
             mb:2, mt:4,
             fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif',
           }}>
             SIGN UP
           </Typography>

           <Box 
            component="form" 
            noValidate onSubmit={handleSubmit} 
            sx={{ mt: 3 }}>

             <Grid container spacing={2}>
               <Grid item xs={12} sm={6}>
                 <TextField  className='grid-block'
                   color='background'
                   autoComplete="given-name"
                   name="firstName"
                   fullWidth
                   id="firstName"
                   label="First Name"
                   autoFocus
                 />
               </Grid>
               <Grid item xs={12} sm={6} >
                 <TextField className='grid-block'
                   fullWidth
                   color='background'
                   id="lastName"
                   label="Last Name"
                   name="lastName"
                   autoComplete="family-name"
                 />
               </Grid>
               <Grid item xs={12}>
                 <TextField className='grid-block'
                   fullWidth
                   color='background'
                   id="email"
                   label="Email Address"
                   name="email"
                   autoComplete="email"
                   />
               </Grid>
               <Grid item xs={12}>
                 <TextField className='grid-block'
                   fullWidth
                   color='background'
                   name="password"
                   label="Password"
                   type="password"
                   id="password"
                   autoComplete="new-password"
                 />
               </Grid>
               <Grid item xs={12} >
                 <FormControlLabel
                   control={<Checkbox 
                   color='error'/>}
                   label="Remember me"
                 />
               </Grid>
             </Grid>
             <Button
               color='error'
               type="submit"
               fullWidth
               variant="contained"
               sx={{ mt: 2, mb: 2 }}
               onClick={() => {
                handleSignup();
                navigate('/main');
              }}
              >
               SIGN UP
             </Button>
             <Grid container justifyContent="center" >
               <Grid item>
                 <Link 
                 onClick={() => navigate ("/auth")}
                 href="/auth" 
                 variant="body2">
                   Already have an account? Sign in
                 </Link>
               </Grid>
             </Grid>
           </Box>
           <Netflix mb={3}/>
          </Box> 
        </Container>
      </Box>    
    </ThemeProvider>
   </Box>
  );
}

