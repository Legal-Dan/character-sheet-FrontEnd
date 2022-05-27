import * as React from "react";
import {useEffect, useState} from "react";

export function SampleComponent () {
    const [sampleData, setSampleData] = useState({
        dummyData: null
    });

    useEffect(() => {
        fetch('http://localhost:8080/getUsers', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then(response => response.json())
            .then((data) => setSampleData({ dummyData: data[1].text }));
    }, []);

    return(
        <div id="root">{sampleData.dummyData}</div>
    )
}