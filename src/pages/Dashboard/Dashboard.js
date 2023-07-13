import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

import './Dashboard.scss';

const Dashboard = () => {
    return (
        <div className="dashboard-main">
            <Header />
            <Outlet />
        </div>
    )
}

export default Dashboard;