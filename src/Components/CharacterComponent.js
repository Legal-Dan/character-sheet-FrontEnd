import * as React from "react";
import {PostRequestAsyncAwait} from "../services/PostRequestAsyncAwait";

export class CharacterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            charName: null,
            occupation: null,
            age: null,
            statsGeneration: "roll",
            highestValue: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleSubmit = (event) => {
            console.log(`The name you entered was: ${this.charName}`)
        }
    }

        handleInputChange(event)
        {
            const target = event.target;
            const value = target.value;
            const name = target.charName;

            this.setState({
                [name]: value
            });
        }

        render()
        {
            return (
                <form>
                    <br/>Enter Character Details Here:<br/>
                    <br/><input id="name" placeholder="Character Name" value={this.charName}/>
                    <br/><input id="occupation" placeholder="Character Occupation"></input>
                    <br/><input id="age" placeholder="Character Age"></input>
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

                    <br/><br/>
                    <button id="Submit" type="Submit" onClick={this.handleSubmit}>Submit</button>

                </form>
            );
        }
    }
