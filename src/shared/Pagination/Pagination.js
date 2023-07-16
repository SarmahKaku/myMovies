import { Link } from 'react-router-dom';

import './Pagination.scss'

const Pagination = (props) => {
    const pagination = [1,2,3,4,5]
    return (
        <div className="pagination">
            <div>
                <Link to='/movies/1'>&laquo;</Link>
                {
                    pagination.map((pagi)=>(
                        <Link className={pagi == props.page ? 'active' : ''} key={pagi} to={`/movies/${pagi}`}>{pagi}</Link>
                    ))
                }
                <Link to='/movies/10'>&raquo;</Link>
            </div>
        </div>
    )
}

export default Pagination;