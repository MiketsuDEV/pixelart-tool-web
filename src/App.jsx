import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TitlePage></TitlePage>
    </>
  );
}
function TitlePage(){
  return(
    <div className="titlePage">
      <div id="left">Left</div>
      <div id="center">Center</div>
      <div id="rigth">Rigth</div>
    </div>
    
  );
}
function Title(){
  return(
    <h1 className="title" >
      PixelArt TOOL
    </h1>
  );
  
}
export default App;
