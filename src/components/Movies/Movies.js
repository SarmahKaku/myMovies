import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MovieCard from '../MovieCard/MovieCard';
import Pagination from '../../shared/Pagination/Pagination';

import { useDispatch } from 'react-redux';
import { showloader } from '../../shared/Loader/loderSlice';

import Loader from '../../shared/Loader/Loader';

import './Movies.scss';


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_API_KEY
    }
};

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [pageno, setPageno] = useState(1)
    const {id} = useParams()

    const dispatch = useDispatch();


    useEffect(() => {
        getMovies()
        setPageno(id)

        console.log('dispatch',dispatch);
    }, [id])


    //discover, favorite, https://api.themoviedb.org/3/discover/movie?&adult=true&language=en-US&page=1  https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
    const getMovies = () => {
        dispatch(showloader(true))
        axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageno ? pageno : 1}`, options)
        .then(response => {
            setMovies(response.data.results)
            dispatch(showloader(false))
        })
        .catch((err)=> {
            toast.error(err.message);
            dispatch(showloader(false))
        });
    }

   
    return (
        <>
        <div className='movie-container'>
            {
                movies && movies.map((item) => (
                    <MovieCard data={item} key={item.id}/> 
                ))
            }
        </div>
        {
            movies && movies.length > 0 && <Pagination page={id}/>
        }
        <ToastContainer />
        <Loader />
        </>
    )
}

export default Movies;