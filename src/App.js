import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
import Alert from "./Components/Alert"

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
    // document.title="TextUtils-Dark Mode"
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode on", "warning")
    // document.title="TextUtils-Light Mode"

}
}
  return (
    <>
      <Navbar title="textUtils" mode ={mode} toggleMode={toggleMode} about="About_TextUtils" contact="Contact_us"/>
      <Alert alert={alert}/>
      <div className="container">
      {/* <Textform showAlert={showAlert} mode={mode} heading="Analyze your Ideas"/> */}
      <About/>
      </div>
    </>
  );
}

export default App;
