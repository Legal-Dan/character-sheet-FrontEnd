import * as React from "react";
import { useState } from "react";

const CharacterComponent = () => {
    const [charName, setName] =  useState('');
    const [occupation, setOccupation] =  useState('');
    const [age, setAge] =  useState('');
    const [statsGeneration, setStatsGeneration] =  useState('roll');
    const [highestValue, setHighestValue] =  useState('');
    const [returnData, setReturnData] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const characterDetails = { charName, occupation, age, statsGeneration, highestValue };
        fetch('http://localhost:8080/getUsers', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(characterDetails)
    }).then(response => response.json())
            .then((data) => setReturnData(data.text));
    };

    return (
            <div className="CharacterComponent">
                <h2>Enter Character Details Here:</h2>
                <form onSubmit={handleSubmit}>

                    <br/><input id="name" placeholder="Character Name" value={charName} onChange={(e) => setName(e.target.value)}/>
                    <br/><input id="occupation" placeholder="Character Occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)}></input>
                    <br/><input id="age" placeholder="Character Age" value={age} onChange={(e) => setAge(e.target.value)}></input>
                    <br/><label htmlFor="statsGeneration">Standard characteristics or roll: </label>
                    <select id="statsGeneration" value={statsGeneration} onChange={(e) => setStatsGeneration(e.target.value)}>
                        <option value="roll">Roll Stats</option>
                        <option value="standard">Standard Array</option>
                    </select>
                    <br/><label htmlFor="highestValue">Highest value (or leave blank for random): </label>
                    <select id="highestValue" value={highestValue} onChange={(e) => setHighestValue(e.target.value)}>
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
                    <button id="Submit" type="Submit">Submit</button>

                </form>
                <br/><br/><div>{returnData}</div>
            </div>);

    }

    export default CharacterComponent;
