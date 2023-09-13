import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';


import { Route, Routes } from 'react-router-dom';
import Aboutus from './Pages/About';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/about-Us' element={<Aboutus />} />
      </Routes>
    </>
  );
}

export default App;
