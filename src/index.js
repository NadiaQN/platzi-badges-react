/**const element = document.createElement('h1')
element.innerText = 'Hello, Platzi Badges!!';

const container = document.getElementById('app')

container.appendChild(element)**/

import React from 'react';
import ReactDom from 'react-dom';
import Badge from './components/badge';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

const container = document.getElementById('app')

ReactDom.render(<Badge />, container);