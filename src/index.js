/**const element = document.createElement('h1')
element.innerText = 'Hello, Platzi Badges!!';

const container = document.getElementById('app')

container.appendChild(element)**/

import React from 'react'
import ReactDom from 'react-dom'

const element = <h1>Hello, Platzi Badges from React!!</h1>

const container = document.getElementById('app')

// render recibe 2 argumentos, qué y donde
ReactDom.render(element, container)