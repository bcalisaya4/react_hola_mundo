// uso de Hook con useState
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value})=>{
    // devuelve un arreglo
    const [counter, setCounter] = useState(value);
    const handleAdd = () =>{
        
        setCounter((c)=>c+1);
        
        //console.log(e)
        // esta funcion no puede retornar un string o int ya que onClick nececita una funcion
        //return () => console.log('Hola Mundo :s');
    }
    const handleRest = () =>{
        
        setCounter((c)=>c-1);
    }
    const handleInit = () =>{
        
        setCounter(value);
    }
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            {/*el button onClick necesita una funcion como handleAdd  que retorne una funcion y para ello se define con : () 
            caso contrario de no poner parentecis este manda un event*/}
            {/*    */}
            <button onClick={handleAdd} >Sumar</button>
            <button onClick={handleRest} >Restar</button>
            <button onClick={handleInit} >Reiniciar</button>
        </>
    );
}
CounterApp.propTypes = {
    value: PropTypes.number
}
export default CounterApp