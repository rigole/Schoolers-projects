"use client";
import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HomePage from "./Pages/HomePage";
import Universities from './Pages/Universities';
import SchoolDetails from './components/SchoolDetails/SchoolDetails';
import Programs from './Pages/Programs';
import FieldStudy from './Pages/FieldStudy';
import FallbackRender from './components/Error-Boundary/Error';



function App() {
  return (
    <div className="App">
      
        <Header/>
       
        <Routes>
         
            <Route  path='/' element={<HomePage/>} />
            <Route path='/universities' element={<Universities/>}/>
            <Route path='/programs' element={<Programs/>}/>
            <Route path='/universities/:school_id' element={<SchoolDetails/>}/>
            <Route path='/fields' element={<FieldStudy/>}/>
            <Route path='*' element={<FallbackRender/>}/>
        
        </Routes>
       
        <Footer/>
       

    </div>
  );
}

export default App;
