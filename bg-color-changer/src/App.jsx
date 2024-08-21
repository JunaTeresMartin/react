import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("#000000");
  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <>
      <div className="color-change-container" style={{ backgroundColor: bgColor }}>
      
      <div className="button-container">
        <h2 className='heading' style={{color:'white'}}>Background Color Changer</h2>
        <button className='btn btn-outline-danger' onClick={() => handleColorChange("red")}>Red</button>
        <button className='btn btn-outline-primary' onClick={() => handleColorChange("blue")}>Blue</button>
        <button className='btn btn-outline-success' onClick={() => handleColorChange("green")}>Green</button>
        <button className='btn btn-outline-warning' onClick={() => handleColorChange("yellow")}>Yellow</button>
      </div>
      </div>
      <br/>
      
    </>
  );
}

export default App;
