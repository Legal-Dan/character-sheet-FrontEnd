import * as React from "react";
import {useEffect, useState} from "react";
import characterComponent from "./CharacterComponent";

export function OccupationComponent () {
    const [occupationData, setOccupationData] = useState("");

    useEffect(() => {
        fetch('http://localhost:8080/getOccupations', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ title: characterComponent.era })
        }).then(response => response.json())
            .then((data) => setOccupationData(data.text));
    }, []);

    return(
        <div id="root">{occupationData}</div>
    )
}