import './App.css';
// import {useState} from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Main from './components/Main';
import Counter from './components/Counter/Counter'
import { useSelector } from 'react-redux'


function App() {

  const style = {
    day: {
        color: "black",
        backgroundColor: "white",
    },
    night: {
        color: "white",
        backgroundColor: "black",
    }
}

const currentMode = useSelector((state) => state.mode.current)

const currentStyle = currentMode === "day" ? style.day : style.night


  return (
  <div style={currentStyle}>
    <BrowserRouter>
      <nav className='nav'>
          <Link to='/' className='link'>Домой</Link>
          <Link to='/profile' className='link'>Профиль</Link>
          <Link to='/counter' className='link'>Счётчик(Redux)</Link>

      </nav>
      <Routes>
        <Route path='/' element = {<Main/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/counter' element={<Counter/>}/>
      </Routes>
    </BrowserRouter>
    
  </div>
  )
}

export default App;