import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar title="textUtils" about="About_TextUtils" contact="Contact_us"/>
      <div className="container">
      <Textform heading="Analyze your Ideas"/>
      </div>
    </>
  );
}

export default App;
