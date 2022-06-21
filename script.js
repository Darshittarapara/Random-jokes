//GET https://icanhazdadjoke.com/
const jokes = document.getElementById('get');
const getapi = () => {

    const SetHeader = {
        headers: {
            Accept: 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com', SetHeader)
        .then((res) => res.json()).then((data) => {
            console.log(data)
            jokes.innerHTML = data.joke
        })

        .catch((error) => {
            console.log(error)
        })
}
getapi()