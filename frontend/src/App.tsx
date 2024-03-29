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
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
import FallbackRender from './components/Error-Boundary/Error';
import SignIn from './Pages/SignIn';



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
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='profile/' element={<Profile/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='*' element={<FallbackRender/>}/>
        </Routes>
        <Footer/>
       

    </div>
  );
}

export default App;
