import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Popular from './Components/Popular';
import MovieDeta from './Components/MovieDeta';

const App = () => {
    return (
        <Router>
            <div className='app'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Popular' element={<Popular />} />
                    <Route path='/movie/:imdbID' element={<MovieDeta />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
