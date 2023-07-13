
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'


import Dashboard from './pages/Dashboard/Dashboard';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Movies from './components/Movies/Movies';
import './App.scss';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import About from './pages/About/About';


function App() {

    const router = createBrowserRouter ([
        {
            path:'/',
            element:<Dashboard />,
            errorElement:<PageNotFound />,
            children:[
                {
                    path:'/',
                    element:<Navigate to="/movies/1" />,
                },
                {
                    path:'/movies/:id',
                    element:<Movies/>,
                },
                {
                    path:'/movie/:id',
                    element:<MovieDetails />
                },
                {
                    path:'/about',
                    element:<About />
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router} />
    );
}

export default App;
