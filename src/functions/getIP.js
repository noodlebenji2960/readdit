    export async function getIP(){
        return await fetch('https://ipapi.co/json/')
        .then(response => response.json())
    }