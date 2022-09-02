import './App.css';
import * as React from "react";
import CharacterComponent from "./Components/CharacterComponent";
import SheetComponent from "./Components/SheetComponent";

window.characterData = null

function App() {
  return (
    <div className="App">
        <CharacterComponent/>
    </div>
  );
}

export default App;
