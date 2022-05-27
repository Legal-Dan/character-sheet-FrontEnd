import './App.css';
import * as React from "react";
import { SampleComponent } from "./Components/SampleComponent";
import { CharacterComponent } from "./Components/CharacterComponent";
import { PostRequestAsyncAwait } from "./services/PostRequestAsyncAwait";

function App() {
  return (
    <div className="App">
      <body>
      <SampleComponent/>
        <br/>
      <CharacterComponent/>
      </body>
    </div>
  );
}

export default App;
