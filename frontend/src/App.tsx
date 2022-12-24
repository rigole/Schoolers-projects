import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Abroad from "./Abroad/Abroad";
import Orientation from "./Orientation/Orientation";
import Examination from "./Examination/Examination"

function App() {
  return (
    <div className="App">
        <Header/>
        <Banner/>
        <Examination/>
        <Abroad/>
        <Orientation/>

    </div>
  );
}

export default App;
