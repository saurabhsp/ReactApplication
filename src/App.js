import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
// import About from "./Components/About";
import Alert from "./Components/Alert";
// import{ BrowserRouter } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {
  const [mode,setMode]= useState('light')
const[alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },3000);
}
  const toggleMode = () => {
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#060131';
    showAlert("Dark Mode on", "info")
    // document.title="TextUtils-Dark Mode";
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode on", "warning")
    // document.title="TextUtils-Light Mode";
}
}
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>        
      <>
      {/* <Router>
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/about"
              element={<About/>}
            />
            <Route
              exact
              path="/"
              element={
              }
              />
              </Routes>
              </div>
            </Router> */}
            <Textform
              showAlert={showAlert}
              heading="Enter your text to Analyse below"
              mode={mode}
            />
    </>
    </>

  );
}

export default App;
