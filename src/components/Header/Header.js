import { Link } from 'react-router-dom';
import Theme from '../../shared/Theme/Theme';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <h1>My Movies</h1>

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Theme /></li>
            </ul>
        </header>
    )
}

export default Header;