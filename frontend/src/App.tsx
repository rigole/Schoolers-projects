import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
        <Header/>
        <HomePage/>
        <Footer/>

    </div>
  );
}

export default App;
