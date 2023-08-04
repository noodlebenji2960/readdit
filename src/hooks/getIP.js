    export async function getIP(){
        return await fetch('http://ip-api.com/json/')
        .then(response => response.json())
    }