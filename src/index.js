//Reac necesita esr en el scope cuando se usa JSX 
//JSX = javaScript + XML
import React from 'react';
//para renderizarlo en el HTML se necesita el REACT DOM
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';


//const saludo = <h1>Hola Mundo</h1>;

const divRoot = document.querySelector('#app');
const divRoot2 = document.querySelector('#app2');

ReactDOM.render(<PrimeraApp saludo='Hola Mundo :)'/>, divRoot)
ReactDOM.render(<CounterApp value={123}/>, divRoot2)
//console.log(divRoot);
