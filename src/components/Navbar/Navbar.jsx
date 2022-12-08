import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContextProvider';
import { ADMIN } from '../../const';

export default function Navbar() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'white',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const {user: { email },handleSignout} = useAuth();

  const handleCloseProfilMenu = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
 //! ==============RENDER
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      onClick={() => navigate ("/auth")}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Sing out</MenuItem> */}
      {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );//!

  //! RENDER 2 РЕЖИМ МОБИЛЬНЫЙ
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem>
        <IconButton
          size="large"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem onClick={() => navigate ("/auth")}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        > Profil
          <AccountCircle />
        </IconButton>
      
      </MenuItem>
    </Menu>
  );//!


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor: '#141414'}} position="static">


       {/*  МЕНЮ ДЛЯ NETFLIX, HOME, MYLIST, MOVIES, ADD MOVIES (Т.Е КНОПКИ) */}
        <Toolbar> 
          {/*  КНОПКА БУРГЕР - ИКОНКА */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> 
          {/* !!! */}

         {/* NETFLIX ICON */}

          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, color: 'red', fontWeight: 'bold'}}
          
          >
            REACTFLIX
          </Typography>

            {email === ADMIN ? (
            <Link to='/admin' style={{textDecoration: 'none'}}>
              <Typography
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' }, color: '#E5E5E5', fontWeight: 'bold', paddingX: '20px'}}> 
                Admin
              </Typography>
            </Link>
            ) : (
             <></>
            )}
         

          {/* ==========HOME */}
          <Link to='/main' style={{textDecoration: 'none'}}>
          <Typography
            
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, color: '#E5E5E5', fontWeight: 'bold', paddingX: '20px'}}
          >
            Home
          </Typography>
          </Link>

          { /* ============MOVIES */}
          <Link to='/movies' style={{textDecoration: 'none'}}>
          <Typography
            
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, color: '#E5E5E5', fontWeight: 'bold', paddingX: '15px'}}
          >
            Movies
          </Typography>
          </Link>

         { /* ============ADD MOVIES */}
          {/* <Link to='/addmovies' style={{textDecoration: 'none'}}>
          <Typography
    
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, color: '#E5E5E5', fontWeight: 'bold', paddingX: '15px'}}
          >
            Add Movies
          </Typography> 
          </Link>  */}
          
          {/*  ============ MY LIST  */}
          <Link to='/mylist' style={{textDecoration: 'none'}}>
          <Typography

            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, color: '#E5E5E5', fontWeight: 'bold', paddingX: '15px'}}
          >
            My List
          </Typography>
          </Link>

           
          <Box sx={{ flexGrow: 1 }} />

          {/* --------------------------------------------------  БЛОК С ПОИСКОМ, УВЕДОМЛЕНИЕМ И ПРОфиЛЬ-------------- */}
          <Box sx={{ display: { xs: 'none', md: 'flex' },justifyContent:'center',alignItems: 'center' }}>

           <Search>
               <SearchIconWrapper>
                 <SearchIcon />
               </SearchIconWrapper>
               
               <StyledInputBase
                 placeholder="Search…"
                 inputProps={{ 'aria-label': 'search' }}
               />
            </Search>

            {/* ===============уведомление */}
            <IconButton
              
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={1} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
           {/* ================profile */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseProfilMenu}
            >
              {email ? (
                <MenuItem onClick={handleSignout}>
                  <Typography sx={{ textAlign: 'center',color:'black' }}>Sign out</Typography>
                </MenuItem>
              ) : (
                <Link
                  to='/main'
                  style={{
                    textDecoration: 'none ',
                    color: 'error',
                  }}
                >
                  <MenuItem onClick={handleSignout}>
                    <Typography sx={{ textAlign: 'center',color:'black' }}>Sign in</Typography>
                  </MenuItem>
                </Link>
              )}
            </Menu>






          </Box>      
           {/*---------------------КОНЕЦ БЛОКА --------------  */}


          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>

        </Toolbar>
                                   
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
