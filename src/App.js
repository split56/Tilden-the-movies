import React from 'react';
import './App.css';
import Home from './pages/Home';
import Tv from './pages/Tv';
import Movies from './pages/Movies';
import Detail from './pages/detailP/Detail';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/tv'  element={<Tv/>}/>
        <Route path='/movies' eact element={<Movies/>}/>
        <Route path='/:category/:id' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// #db0000,#000000,#ffffff,#564d4d,#831010