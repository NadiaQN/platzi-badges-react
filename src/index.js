/**const element = document.createElement('h1')
element.innerText = 'Hello, Platzi Badges!!';

const container = document.getElementById('app')

container.appendChild(element)**/

import React from 'react'
import ReactDom from 'react-dom'


//const element = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a platzi')
//const name = 'Nadia';
//const element = React.createElement('h1', {}, `Hola, soy ${name}`)
//const jsx = <h1>hola soy {name}</h1>

const jsx = <div>
    <h1>Hola, soy Nadia</h1>
    <p>Estoy aprendiendo React</p>
</div>
const container = document.getElementById('app')
// render recibe 2 argumentos, qué y donde
ReactDom.render(jsx, container)