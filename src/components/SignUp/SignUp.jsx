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



function Netflix(props) {
  return (
    <Typography 
    variant="body2" 
    align="center" {...props}>
      {'© 1997-2022 Netflix, Inc.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Container 
         component="main" 
         maxWidth="xs">
         <CssBaseline />
          <Box className='signup-box'
           sx={{
           mb:8, mt:8,
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
               <Grid item xs={12} >
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
               <Grid item xs={12} >
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
             >
               SIGN UP
             </Button>
             <Grid container justifyContent="center" >
               <Grid item>
                 <Link 
                 href="/#" 
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
  );
}

