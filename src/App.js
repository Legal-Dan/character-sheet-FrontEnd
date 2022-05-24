import './App.css';
import * as React from "react";
import { SampleComponent } from "./Components/SampleComponent";
import { PostRequestAsyncAwait } from "./services/PostRequestAsyncAwait";

function App() {
  return (
    <div className="App">
      <body>
        <SampleComponent/>
      <br/>

      <br/><textarea id="name" placeholder="Character Name"></textarea>
      <br/><textarea id="age" placeholder="Character Age"></textarea>
      <br/><label htmlFor="statsGeneration">Standard characteristics or roll: </label>
        <select id="statsGeneration">
          <option value="roll">Roll Stats</option>
          <option value="standard">Standard Array</option>
        </select>
      <br/><label htmlFor="highestValue">Highest value (or leave blank for random): </label>
          <select id="highestValue">
            <option value="none"></option>
            <option value="strength">Strength</option>
            <option value="constitution">Constitution</option>
            <option value="size">Size</option>
            <option value="dexterity">Dexterity</option>
            <option value="appearance">Appearance</option>
            <option value="intelligence">Intelligence</option>
            <option value="power">Power</option>
            <option value="education">Education</option>
          </select>

      <br/><br/><button id="Submit">Submit</button>
      <PostRequestAsyncAwait/>
      </body>
    </div>
  );
}

export default App;
