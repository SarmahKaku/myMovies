import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './MovieDetails.scss'; 
import Avatar from '../../components/Avatar/Avatar';
import List from '../../shared/List/List';
import Loader from '../../shared/Loader/Loader';

import { useDispatch } from 'react-redux';
import { showloader } from '../../shared/Loader/loderSlice';

//const url ='https://api.themoviedb.org/3/movie/447365?language=en-US';


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_API_KEY
    }
};

const MovieDetails = () => {
    const { id } = useParams()
    const [movieDetails , setMovieDetails] = useState({});
    const [movieCredits, setMovieCredits] = useState([])

    const dispatch = useDispatch();

    useEffect(()=>{
        getMovieDetails()
    },[])

    const getMovieDetails = ()=> {
        dispatch(showloader(true))
        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,options)
        .then((res)=>{
            setMovieDetails(res.data)
            getMovieCredits();
            dispatch(showloader(false))
        })
        .catch((err)=> {
            toast.error(err.message);
            dispatch(showloader(false))
        });
    }
    
    const getMovieCredits = ()=>{
        dispatch(showloader(true))
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,options)
        .then((res)=>{
            setMovieCredits(res.data.cast)
            dispatch(showloader(false))
        })
        .catch((err)=> {
            toast.error(err.message);
            dispatch(showloader(false))
        });
    }


    return (
        <div className='movie-details-main'>
            <div className='movie-poster'>
                <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}  alt="movie poster"/>
            </div>
            <div className='movie-content-main'>
                <div className='movie-content'>
                    <div className='header'>
                        <h2>{movieDetails.title}</h2>
                        <p><strong>{movieDetails.tagline}</strong></p>
                        <p>{movieDetails.overview}</p>
                        <a href={movieDetails.homepage} target='_blank' rel="noreferrer">Learn More</a>
                    </div>
                    <div className='main'>
                        <p><strong>Budget</strong><br/>{movieDetails.budget}</p>
                        <p><strong>Popularity</strong><br/> {movieDetails.popularity}</p>
                        <p><strong>Release Date</strong><br/> {movieDetails.release_date}</p>
                        <p><strong>Revenue</strong><br/> {movieDetails.revenue}</p>
                    </div>
                    <div className='sidebar'>
                        <List title="Languages" data={movieDetails.spoken_languages && movieDetails.spoken_languages.length > 0 ? movieDetails.spoken_languages : []}/>
                    </div>
                    
                    <h3>Cast</h3>
                    <div className='footer'>
                        
                        {
                            movieCredits.map((credit)=>(
                                <Avatar data={credit} key={credit.id}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
            <Loader />
        </div>
    )
}

export default MovieDetails; 