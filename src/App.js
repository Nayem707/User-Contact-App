import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import Cv from './cv/Cv';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cv' element={<Cv />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
