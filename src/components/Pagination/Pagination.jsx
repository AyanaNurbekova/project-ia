import { Box, Pagination, Stack } from '@mui/material';
import React from 'react';
import { useMovies } from '../../contexts/MoviesContextProvider';

const PaginationMovies = () => {
    const {page, count, setPage} = useMovies()
    const handleChange = (e, p) => {
        setPage(p);
      };
    return (
        <Box style={{backgroundColor: '#181818', color: '#fff', width: '100%', 
         display: 'flex', justifyContent: 'center', fontSize: '30px', marginTop: '85px'}}>
            <Stack spacing={2} sx={{ marginRight: 5 }}>
            <Pagination
              onChange={handleChange}
              sx={{button : {color: '#fff'}}}
              count={count}
              color="secondary"
              size='large'
            />
          </Stack>
        </Box>
    );
};

export default PaginationMovies;