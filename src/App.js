import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Popular from './Components/Popular';

const App = () => {
    return (
        <Router>
            <div className='app'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Popular' element={<Popular />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
