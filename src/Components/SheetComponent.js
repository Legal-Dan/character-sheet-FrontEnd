import * as React from "react";

const SheetComponent = (props) => {
    const data = props.data.split('|')
    const name = data[0]
    const age = data[1]
    const occupation = data[2]
    const region = data[3]
    const splitStats = splitToMap(data[4])
    const skills = splitToMap(data[5])
    const damage = data[6]
//a["key"] = "some"
    function splitToMap(dataSet){
        let toReturn = []
        let splitData = dataSet.split(', ')
        for (let i = 0; i < splitData.length; i++){
            let splitStats = splitData[i].split('>');
            toReturn[splitStats[0]] = parseInt(splitStats[1]);
        }
        delete toReturn[""];
        return toReturn
    }

return (
            <div className="SheetComponent">
                Name: {name}
                <br/>
                Age: {age}
                <br/>
                Occupation: {occupation}
                <br/>
                Region: {region}
                <br/>
                Strength: {splitStats["strength"]}, Dexterity: {splitStats["dexterity"]}, Constitution: {splitStats["constitution"]}, Power: {splitStats["power"]}, Intelligence: {splitStats["intelligence"]}, Education: {splitStats["education"]}, Size: {splitStats["size"]}, Appearance: {splitStats["appearance"]}
                <br/>
                HP: {splitStats["hp"]}, Move Rate: {splitStats["move"]}, Build: {splitStats["build"]}, Magic Points: {splitStats["magic"]}, Damage Bonus: {damage}
                <br/>
                {displaySkills(Object.entries(skills))}
            </div>);
    }

    function displaySkills(skillsArray){
        if(skillsArray.length > 0){
            let toPrint = ""
            for (let i = 0; i < skillsArray.length; i++){
                toPrint += ", " + skillsArray[i][0] + ": " + skillsArray[i][1];
            }
            return toPrint.slice(2)
        }
        return null
    }

    export default SheetComponent;
