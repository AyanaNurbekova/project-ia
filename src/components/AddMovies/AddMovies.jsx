import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMovies } from '../../contexts/MoviesContextProvider';
import Navbar from '../Navbar/Navbar';

const AddMovies = () => {
    const navigate = useNavigate()
    const {addMovies} = useMovies()
    const [movies, setMovies] = useState({
        name: '',
        year: 0,
        description: '',
        picture: '',
        type: '',
        movies: ''
    })
    const handleInp = (e) => {
        if (e.target.name === "year") {
            let obj = { ...movies, [e.target.name]: Number(e.target.value) };
            setMovies(obj);
        } else {
            let obj = { ...movies, [e.target.name]: e.target.value };
            setMovies(obj);
        }
    };
    return (   
                
       <Box
            align="center"
            sx={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                height: "70vh",
                display: "flex",
                marginBottom: "0px",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Navbar/> 
            <Typography
                sx={{
                    color: "#E5E5E5",
                    fontSize: "40px",
                    fontWeight: 'bold',
                }}
            >
                ADD MOVIES
            </Typography>
            
            <Box
                sx={{
                    width: "50vw",
                    margin: "3vh auto 10vh",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr ",
                    gridGap: "15px",                   
                }}
            >
                
                <TextField
                    onChange={handleInp}
                    sx={{
                        borderColor: "white",
                        backgroundColor: "white",
                        borderRadius: "4px",
                    }}
                    fullWidth
                    label="Name"
                    variant="outlined"
                    name="name"
                    size="small"
                />

                
                <TextField
                    onChange={handleInp}
                    sx={{
                        borderColor: "black",
                        backgroundColor: "white",
                        borderRadius: "4px",
                    }}
                    fullWidth
                    label="Year"
                    variant="outlined"
                    name="year"
                    size="small"
                />
                
                <TextField
                    onChange={handleInp}
                    sx={{
                        borderColor: "black",
                        backgroundColor: "white",
                        borderRadius: "4px",
                    }}
                    fullWidth
                    label="Description"
                    variant="outlined"
                    name="description"
                    size="small"
                />

                <TextField
                    onChange={handleInp}
                    sx={{
                        borderColor: "black",
                        backgroundColor: "white",
                        borderRadius: "4px",
                    }}
                    fullWidth
                    label="Picture"
                    variant="outlined"
                    name="picture"
                    size="small"
                />
                <TextField
                    onChange={handleInp}
                    sx={{
                        borderColor: "black",
                        backgroundColor: "white",
                        borderRadius: "4px",
                    }}
                    fullWidth
                    label="Type"
                    variant="outlined"
                    name="type"
                    size="small"
                />
                
                <TextField
                    onChange={handleInp}
                    sx={{
                        borderColor: "black",
                        backgroundColor: "white",
                        borderRadius: "4px",
                    }}
                    fullWidth
                    label="Movies"
                    variant="outlined"
                    name="movies"
                    size="small"
                />
                
                <Button
                    onClick={() => {
                        addMovies(movies);
                        navigate("/movies");
                    }}
                    sx={{
                        borderColor: "black",
                        backgroundColor: "black",
                        color: "white",
                        transition: "1000s",
                        gridColumn: "1/3",
                    }}
                
                    variant="contained"
                    color='secondary'
                    fullWidth
                    size="large"
                >
                    Add Movies
                </Button>
                </Box>
            </Box>
    );
};

export default AddMovies;