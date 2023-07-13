import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <h1>My Movies</h1>

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </header>
    )
}

export default Header;