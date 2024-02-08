import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("UpperCase was Clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("LowerCase was Clicked" + Text);
    let newText2 = Text.toLowerCase(); 
    setText(newText2)
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleRepClick=()=>{
    let newtext=Text.replaceAll("Harry","Saurabh")
    setText(newtext)
  }


  const handleClearText = ()=>{
    let newText3 = ''
    setText(newText3);
  }

  const [Text, setText] = useState('');
  // setText("value is set") //correct way to set text
  return (
    <>
      <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea name="textarea" className="form-control" value={Text} onChange={handleOnChange} cols="30" rows="10"></textarea>
        </div>
        <button className="btn btn-danger mx-2" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-info mx-2" onClick={handleRepClick}>
          Replace HarrytoSaurabh
        </button>
        <button className="btn btn-success mx-2" onClick={handleClearText}>Clear Data</button>
      </div>
      <div className="container my-3">
        <h1>Your text Summary</h1>
        <p>
          {Text.split(" ").length} Words & {Text.length} Characters{" "}
        </p>
        <p>This can be read in {0.008 * Text.split(" ").length}Minutes</p>
        <h3>Preview</h3>
        <p>{Text}</p>
      </div>
    </>
  );
}
