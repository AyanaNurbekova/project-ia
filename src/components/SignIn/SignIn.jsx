import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from '@mui/material';
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

export default function SignIn() {
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
         className='signin-box'
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
          sx={{
            color:'white',
            mb:2, mt:4,
            fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif',
          }}
           component="h1"
           variant="h5">
            SIGN IN
          </Typography>

          <Box component="form" 
           onSubmit={handleSubmit} 
           noValidate sx={{ mt: 1 }}>
            <TextField className='grid-block'
              color='background'
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField className='grid-block'
              color='background'
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="error" />}
              label="Remember me"
            />
            <Button
              color='error'
              type="submit"
              fullWidth
              variant="contained"
              sx={{
               mt: 2, 
               mb: 2,
               fontFamily:'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif',
              }}
            >
              SIGN IN
            </Button>

            <Grid container
             justifyContent='center'>
              <Grid item>
              <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
              </Link>
              </Grid>
            </Grid>
          </Box>
          <Netflix mb={3}/>
        </Box>
      </Container>
    </ThemeProvider>
  );
}