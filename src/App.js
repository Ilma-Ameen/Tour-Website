import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import {Routes, Route, Link} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';

const App=()=>{
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      {/* <Navbar/>
      <Home/> */}
    </div>
  );
}

export default App;
