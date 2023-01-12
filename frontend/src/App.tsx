import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HomePage from "./Pages/HomePage";
import Universities from './Pages/Universities';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route  path='/' element={<HomePage/>} />
          <Route path='/universities' element={<Universities/>}/>
        </Routes>
        <Footer/>

    </div>
  );
}

export default App;
