import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Photo from './pages/Photo';
import User from './pages/User';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/photo' element={<Photo />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
