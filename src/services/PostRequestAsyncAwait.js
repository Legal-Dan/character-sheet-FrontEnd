import * as React from "react";
import {useState, useEffect} from "react";


export function PostRequestAsyncAwait() {
    const [postId, setPostId] = useState(null)

    useEffect(() => {
        // fetch('https://legal-dan.github.io/character-sheet-Backend/getUsers', {
        fetch('https://ec2-3-91-56-40.compute-1.amazonaws.com:8080/getUsers', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ title: 'React POST Request Example' })
        }).then(response => response.json())
            .then((data) => setPostId(data.id));
    }, []);

    return(
        <div id="root">Returned Id: {postId}</div>
    )
}
