import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Form, useNavigate, useParams } from 'react-router-dom';
import { moviesContext } from '../../contexts/MoviesContextProvider';

const EditMovies = () => {
    const [name, setName] = useState('')
    const [year, setYear] = useState(0)
    const [description, setDescription] = useState('')
    const [picture, setPicture] = useState('')
    const [type, setType] = useState('')
    const [movies, setMovies] = useState('')

    const params = useParams();
    const navigate = useNavigate();

    const {getOneMovies, updateMovies, oneMovies, editMovies} = useContext(moviesContext);
console.log(updateMovies);
    useEffect(()=>{
        getOneMovies(params.id)
    },[])

    useEffect(()=>{
        if(oneMovies){
            setName(oneMovies.name);
            setYear(oneMovies.year);
            setDescription(oneMovies.description);
            setPicture(oneMovies.picture);
            setType(oneMovies.type);
            setMovies(oneMovies.movies);

        }
    }, [oneMovies])

    const handleValues = () => {
        const editMovies = {
            name,
            year,
            description,
            picture,
            type,
            movies
        };

        updateMovies(params.id, editMovies)
        setName('')
        setYear(0)
        setDescription('')
        setPicture('')
        setType('')
        setMovies('')

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
            <Typography
                sx={{
                    color: "white",
                    fontSize: "40px",
                    fontWeight: 'bold',
                }}
            >
                EDIT MOVIES
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
                    onChange={(e)=> setName(e.target.value)} value={name}
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
                    onChange={(e)=> setYear(e.target.value)} value={year}
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
                    onChange={(e)=> setDescription(e.target.value)} value={description}
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
                    onChange={(e)=> setPicture(e.target.value)} value={picture}
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
                    onChange={(e)=> setType(e.target.value)} value={type}
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
                    onChange={(e)=> setMovies(e.target.value)} value={movies}
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
                    onClick={()=> {updateMovies(); navigate('/movies')}}
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
                    Edit Movies
                </Button>
                </Box>
            </Box>
)
};


export default EditMovies;