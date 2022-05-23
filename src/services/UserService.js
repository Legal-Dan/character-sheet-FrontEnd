
export async function receiveData() {
    try{
        fetch('http://localhost:8080/getUsers', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then(response => response.json())
        .then(data => console.log(data));
    } catch(error) {
        return [];
    }
}
