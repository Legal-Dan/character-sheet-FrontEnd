import './App.css';
import * as React from "react";
import { OccupationComponent } from "./Components/OccupationComponent";
import CharacterComponent from "./Components/CharacterComponent";

function App() {
  return (
    <div className="App">
      <body>
      <OccupationComponent/>
        <br/>
      <CharacterComponent/>
      </body>
    </div>
  );
}

export default App;
