import { Link } from 'react-router-dom';
import './PageNotFound.scss';

const PageNotFound = () => {
    return (
        <div className='page-not-found'>
            <div>
                <h1> Page you are Looking for is not found </h1>
                <h3>Go Back to <Link to='/'>Home page.</Link></h3>
            </div>
        </div>

    )
}

export default PageNotFound;