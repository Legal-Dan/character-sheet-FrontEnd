import * as React from "react";
import {useEffect, useState} from "react";
import SheetComponent from "./SheetComponent";

const CharacterComponent = () => {
    const [charName, setCharName] =  useState('');
    const [era, setEra] =  useState('classic');
    const [gender, setGender] =  useState('');
    const [region, setRegion] =  useState('');
    const [occupation, setOccupation] =  useState('');
    const [age, setAge] =  useState('');
    const [statsGeneration, setStatsGeneration] =  useState('roll');
    const [highestValue, setHighestValue] =  useState('');
    const [returnData, setReturnData] = useState('|||||Skills>0');
    const [eraOccupations, setEraOccupations] = useState([]);
    const [eraRegions, setEraRegions] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const characterDetails = { charName, era, gender, region, occupation, age, statsGeneration, highestValue };
        // fetch('http://localhost:8080/getUsers', {
        fetch('http://ec2-3-91-56-40.compute-1.amazonaws.com:8080/getUsers', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(characterDetails)
    }).then(response => response.json())
            .then((data) => {
                setReturnData(data.text)
            });
    };

    const handleChangeEra = (e) =>{
        e.preventDefault();
        setEra(e.target.value)
        setOccupation("")
        setRegion("Random")
        setOccupationComponent(e.target.value)
        setRegionComponent(e.target.value)
    };

    const setOccupationComponent = (era, e) => {
        if(e && e.preventDefault())
            e.preventDefault();
        // fetch('http://localhost:8080/getOccupations', {
        fetch('http://ec2-3-91-56-40.compute-1.amazonaws.com:8080/getOccupations', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ title: era })
        }).then(response => response.json())
            .then((data) => {
                setEraOccupations(data)
            })
    };

    const setRegionComponent = (era, e) => {
        if(e && e.preventDefault())
            e.preventDefault();
        // fetch('http://localhost:8080/getRegions', {
        fetch('http://ec2-3-91-56-40.compute-1.amazonaws.com:8080/getRegions', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ title: era })
        }).then(response => response.json())
            .then((data) => {
                setEraRegions(data)
            })
    };

    useEffect((e) => {
        if(e && e.preventDefault())
            e.preventDefault()
        setOccupationComponent("classic")
        setRegionComponent("classic")
    }, [])

    return (
            <div className="CharacterComponent">
                <h2>Enter Character Details Here:</h2>
                <form onSubmit={handleSubmit}>

                    <br/><input id="name" placeholder="Character Name" value={charName} onChange={(e) => setCharName(e.target.value)}/>
                    <br/><select id="era" value={era} onChange={ handleChangeEra }>
                        <option value="darkAge">Dark Ages</option>
                        <option value="gaslight">Cthulhu by Gaslight</option>
                        <option value="classic">Classic 1920s</option>
                        <option value="modern">Modern</option>
                    </select>
                    <br/><select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="random">Random</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <br/><select value={region} onChange={(e) => setRegion(e.target.value)}>
                    {eraRegions.map(function(d, idx) {
                            return (<option key={idx} value={d}> {d} </option>)
                        })}
                    </select>
                    <br/> <select id="eraOccupations" value={occupation} onChange={(e) => setOccupation(e.target.value)}>
                        {eraOccupations.map(function(d, idx) {
                            return (<option key={idx} value={d}> {d} </option>)
                        })}
                    </select>
                    <br/><input id="age" placeholder="Character Age" value={age} onChange={(e) => setAge(e.target.value)}/>
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
                <SheetComponent data={returnData}/>
            </div>);

    }

    export default CharacterComponent;
