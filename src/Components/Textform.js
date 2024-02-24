import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("UpperCase was Clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  };

  const handleLoClick = () => {
    console.log("LowerCase was Clicked" + Text);
    let newText2 = Text.toLowerCase(); 
    setText(newText2)
    props.showAlert("Converted to LowerCase","success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy=()=>{
    console.log("I am Copy")
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value)
  }
  const handleExtraSpaces=()=>{
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  // const handleRepClick=()=>{
  //   let newtext=Text.replaceAll("Harry","Saurabh")
  //   setText(newtext)
  // }
  const handleClearText = ()=>{
    let newText3 = ''
    setText(newText3);
  }

  const [Text, setText] = useState('');
  // setText("value is set") //correct way to set text
  return (
    <>
      <div className="container" style={{color: props.mode ==='dark' ? 'white' :'#060131'}}> 
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea name="textarea" style={{backgroundColor: props.mode ==='dark' ? 'grey' :'white',color: props.mode ==='dark' ? 'white' :'#060131'}} id="myBox" className="form-control" value={Text} onChange={handleOnChange} cols="30" rows="10"></textarea>
        </div>
        <button className="btn btn-danger my-2 mx-2" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        {/* <button className="btn btn-info my-2 mx-2" onClick={handleRepClick}>
          Replace HarrytoSaurabh
        </button> */}
        <button className="btn btn-warning my-2 mx-2" onClick={handleExtraSpaces}>
          Remove WhiteSpaces
        </button>
        <button className="btn btn-info my-2 mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-success my-2 mx-2" onClick={handleClearText}>Clear Data</button>
      </div>
      <div className="container my-3 " style={{color: props.mode ==='dark' ? 'white' :'#060131'}}>
        <h1>Your text Summary</h1>
        <p>
          {Text.split(" ").length} Words & {Text.length} Characters{" "}
        </p>
        <p>This can be read in {0.008 * Text.split(" ").length}Minutes</p>
        <h3>Preview</h3>
        <p>{Text.length>0?Text:"Enter Something to Preview"}</p>
      </div>
    </>
  );
}
