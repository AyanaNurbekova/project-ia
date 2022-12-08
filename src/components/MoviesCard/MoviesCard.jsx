import { Box, Button, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContextProvider';
import { cardContext } from '../../contexts/MoviesCardContext';
import { moviesContext } from '../../contexts/MoviesContextProvider';
import './MoviesCard.css'
const MoviesCard = ({item}) => {
  const {getOneMovies, getData, deleteMovies, updateMovies, oneMovies} = useContext(moviesContext)
  const {getFilmToCart, addFilmToCart} = useContext(cardContext)
  const {user: {email}} = useAuth()
  useEffect(()=> {
      getOneMovies(item.id);
  }, []);
  const {id} = useParams()
  const navigate = useNavigate()

  const [descr, setDescr] = useState(false)
  console.log(item.description);
  const admin = 'adminxxx@gmail.com'

  return (
    <Box 
        className='card' sx={{ 
        mt: 7,
        width: '340px',
        color: 'white',
        backgroundColor: '#202020',
        borderRadius: '8px',
        fontSize: '16px',
        overflow: 'hidden',
        flexWrap: 'wrap'}}> 
        <Box sx={{marginBottom: '-40px'}} className='card-preview-video'>
        <img src={item.picture} alt="" style={{width:'320px', height: '150px'}}/>
         </Box>
        
        <Box className='card-details'>
          <Box sx={{marginBottom: '0px'}} className='card-actions'>
            <button style={{width: '50px', height: '50px'}} onClick={() =>navigate(`/player/${item.id}`)} className='btn btn-icon btn-primary'>
              <svg viewBox="0 0 24 24"><path d="M6 4l15 8-15 8z" fill="currentColor"></path></svg>
            </button>
      
            <button style={{width: '50px', height: '50px'}} onClick={() => {addFilmToCart(item); getFilmToCart()}} className='btn btn-icon btn-secondary'>
              <svg viewBox="0 0 24 24"><path d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z" fill="currentColor"></path></svg>
            </button>
      
            <button style={{width: '50px', height: '50px'}} className='btn btn-icon btn-secondary'>
              <svg viewBox="0 0 24 24"><path d="M15.167 8.994h3.394l.068.023c1.56.138 2.867.987 2.867 2.73 0 .275-.046.527-.092.78.367.435.596.986.596 1.72 0 .963-.39 1.52-1.032 1.978.023.183.023.252.023.39 0 .963-.39 1.784-1.009 2.243.023.206.023.275.023.39 0 1.743-1.33 2.591-2.89 2.73L12.21 22c-2.04 0-3.05-.252-4.563-.895-.917-.39-1.353-.527-2.27-.619L4 20.371v-8.234l2.476-1.445 2.27-4.427c0-.046.085-1.552.253-4.52l.871-.389c.092-.069.275-.138.505-.184.664-.206 1.398-.252 2.132 0 1.261.436 2.064 1.537 2.408 3.258.142.829.226 1.695.26 2.564l-.008 2zm-4.42-2.246l-2.758 5.376L6 13.285v5.26c.845.113 1.44.3 2.427.72 1.37.58 2.12.735 3.773.735l4.816-.023c.742-.078.895-.3 1.015-.542.201-.4.201-.876 0-1.425.558-.184.917-.479 1.078-.883.182-.457.182-.966 0-1.528.601-.228.901-.64.901-1.238s-.202-1.038-.608-1.32c.23-.46.26-.892.094-1.294-.168-.404-.298-.627-1.043-.738l-.172-.015h-5.207l.095-2.09c.066-1.448-.009-2.875-.216-4.082-.216-1.084-.582-1.58-1.096-1.758-.259-.09-.546-.086-.876.014-.003.06-.081 1.283-.235 3.67z" fill="currentColor"></path></svg>
            </button>
      
            <button style={{width: '50px', height: '50px'}} className='btn btn-icon btn-secondary'>
              <svg viewBox="0 0 24 24"><path d="M8.833 15.06H5.44l-.068-.023c-1.56-.138-2.867-.987-2.867-2.73 0-.275.046-.527.092-.78C2.23 11.038 2 10.487 2 9.753c0-.963.39-1.52 1.032-1.978-.023-.183-.023-.252-.023-.39 0-.963.39-1.784 1.009-2.243-.023-.206-.023-.275-.023-.39 0-1.743 1.33-2.591 2.89-2.73L11.79 2c2.04 0 3.05.252 4.563.895.917.39 1.353.527 2.27.619L20 3.629v8.234l-2.476 1.445-2.27 4.427c0 .046-.085 1.552-.253 4.52l-.871.389c-.092.069-.275.138-.505.184-.664.206-1.398.252-2.132 0-1.261-.436-2.064-1.537-2.408-3.258a19.743 19.743 0 0 1-.26-2.564l.008-2zm4.42 2.246l2.758-5.376L18 10.715v-5.26c-.845-.113-1.44-.3-2.427-.72C14.203 4.156 13.453 4 11.8 4l-4.816.023c-.742.078-.895.3-1.015.542-.201.4-.201.876 0 1.425-.558.184-.917.479-1.078.883-.182.457-.182.966 0 1.528-.601.228-.901.64-.901 1.238s.202 1.038.608 1.32c-.23.46-.26.892-.094 1.294.168.404.298.627 1.043.738l.172.015h5.207l-.095 2.09c-.066 1.448.009 2.875.216 4.082.216 1.084.582 1.58 1.096 1.758.259.09.546.086.876-.014.003-.06.081-1.283.235-3.67z" fill="currentColor"></path></svg>
            </button>

            <button style={{width: '50px', height: '50px'}} onClick={()=> setDescr(!descr)} className='btn btn-icon btn-secondary'>
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M5.689 7.924L4.387 9.442 12.038 16l7.651-6.558-1.302-1.518-6.349 5.442z"></path></svg>
            </button>
           
          </Box>
          <Box className='card-info'>
            <Typography sx={{fontSize: '15px'}} className='match-score'>{item.name}</Typography>
            <Typography sx={{fontSize: '13px'}}>{item.year}</Typography>
            <Typography sx={{fontSize: '13px'}} className='feature'>HD</Typography>
            <Typography sx={{fontSize: '13px'}}>{item.type}</Typography>
          </Box>    
         
          {descr ? ( <Box sx={{textAlign: 'center', overflow: 'auto', display: 'flex'}}>
            <Typography sx={{height: '280px'}}>{item.description}</Typography>
          </Box>) : (<></>)}
          {email === admin && (<Box className='card-tags' sx={{textAlign: 'center', display: 'flex', justifyContent: 'space-evenly'}}>
            <Button onClick={()=> {navigate(`/edit/${item.id}`); updateMovies(id)}} sx={{border: '1px solid green', color: '#fff', backgroundColor: '#181818', padding: '2px', width: '140px'}}>edit</Button>
            <Button onClick={()=> {deleteMovies(item.id); navigate('/movies')}} sx={{border: '1px solid red', color: '#fff', backgroundColor: '#181818', padding: '2px', width: '140px'}}>delete</Button>
          </Box>)}
          
          
        </Box>
      </Box>
      
  );
};

export default MoviesCard;