import { api } from "./api.js";
import { Personajes } from "./GetFetch.js";
let lista = document.querySelector('#list')
let content = ''
const {results} = await Personajes(`${api}/character`)
console.log(results)
results.forEach(element => {
    console.log(element)
    const {name,gender,status,image}= element
    content +=`
    <div class='card'>
        <img src=${image}>
        <h2>${name}</h2>
        <h3>${gender}</h3>
        <h3>${status}</h3>
    </div>
    `
    lista.innerHTML=content
});

