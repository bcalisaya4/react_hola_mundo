//import React, { Fragment } from 'react';
import React from 'react';
// Obliga a recibir la variable saludo 
import PropTypes from 'prop-types';
//FC (funtionalComponents)
/*
const saludo = 'Hola Mundo :('

const persona = {
   nombre: "Bryan",
   edad: 24
}
*/

//const PrimeraApp = (props)=>{
// Es mejor usar la desestructuracion de de objetos   
const PrimeraApp = ({saludo, descripcion})=>{
// Establecemos valores por defecto  

   return (
      <>
         <h1>{saludo}</h1>
         {/*
         como mandar objetos 
         <h1>{JSON.stringify(persona)}</h1>
         */}
         <p>Mi Primera Aplicacion</p>
         <p>{descripcion}</p>
      </>
      );
 }
// Condicionamos la variable de entrada
 PrimeraApp.propTypes = {
   saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
   descripcion : 'Descripcion por Defecto'
}

export default PrimeraApp;