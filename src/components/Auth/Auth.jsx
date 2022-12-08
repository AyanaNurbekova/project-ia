import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Auth.css'
import { useNavigate } from 'react-router-dom';
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

export default function SignIn() {
  const navigate = useNavigate(); 
  
  const {
    email,
    password,
    emailError,
    passwordError,
    setPassword,
    setEmail,
    handleSignin,
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
    <Box className='auth'> 
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
        </Toolbar>
      </Box>
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
                //helper-text
                helperText={emailError}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                // ===============
                helperText={passwordError}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
                  onClick={() => {
                    handleSignin();
                    navigate('/main');
                  }}
                  sx={{
                   mt: 2, 
                   mb: 2,
                  }}
                >
                  SIGN IN
                </Button>
              

              <Grid container
               justifyContent='center'>

                <Grid item>
                  <Link onClick={() => navigate('/signup')}>
                  {"New to Reactflix? Sign up now."}
                  </Link>
                 
                </Grid>
              </Grid>
            </Box>
            <Netflix mb={3}/>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
}