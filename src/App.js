import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
// import About from "./Components/About";

function App() {
  const [mode,setMode]= useState('light')
  const toggleMode = () => {
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#060131';
  }
else{
  setMode('light')
  document.body.style.backgroundColor = 'white';

}
}
  return (
    <>
      <Navbar title="textUtils" mode ={mode} toggleMode={toggleMode} about="About_TextUtils" contact="Contact_us"/>
      <div className="container">
      <Textform mode={mode} heading="Analyze your Ideas"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
