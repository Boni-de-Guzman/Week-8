console.log("hello World")

const express = require ('express')
const axios = require ('axios')
const app = express()


app.use (express.json())



const baseURL = `https://swapi.dev/api/planets/`


const getAllPlanets = () => axios.get(baseURL).then(planetsCallback).catch(errCallback)




let btn = document.querySelector('#btn');
function display() {
    alert('button clicked!');
}

btn.addEventListener('click',display);

app.listen(5050, () => console.log('Server is running on port 5050'))