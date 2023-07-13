import { Link } from 'react-router-dom';
import StarRating from '../../shared/Star/Star';
import './MovieCard.scss'

const MovieCard = (props) => {
    const {id, poster_path, title, overview, release_date, vote_average} = props.data;
    return (
        <div className='card-main'>
            <Link to={`/movie/${id}`}>
            <div className='card-image'>
                <StarRating rating={vote_average} />
                <img src={`https://www.themoviedb.org/t/p/w500${poster_path}`} alt={title} />
                <div className="card-overview">
                    <h4>Overview</h4>
                    <p>{overview}</p>
                </div>
            </div>
            <div className='card-content'>
                <h3>{title}</h3>
                <p>Release date: {release_date}</p>
            </div>
            <div className='card-footer'>
                
            </div>
            </Link>
        </div>

    )
}

export default MovieCard;