import ReactDOM from 'react-dom';

import { useSelector } from 'react-redux';

import './Loader.scss'

const Loader = (props) => {
    const showloader = useSelector((state) => state.loader.show);
    return (
        ReactDOM.createPortal(showloader && <span className="loader"></span>, document.getElementById('loader'))
    )
}

export default Loader;