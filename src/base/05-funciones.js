//Clase Numero 5 JavaScript

    //No es recomendable establecer fuciones asi porque
    //rapidamente no podemos bajar la funcion con una 
    //variable
/*
function saludar(nombre){
    return `Hola, ${nombre}`
}
//saludar = 30 
console.log(saludar('goku'))
*/

    //Es mejor nombrarla como constante
    
    const saludar = function (nombre){
        return `Hola, ${nombre}`
    }
    
    console.log(saludar('goku'))
    
    // Funciones de Flecha
    
    const saludar2 = (nombre)=>{
        return `Hola, ${nombre}`;
    }
    
    console.log(saludar2('vegeta'))
    
    // Funciones de Flecha (Forma Simplificada)
    const saludar3 = (nombre)=> `Hola, ${nombre}`;
    const saludar4 = ()=> `Hola soy elmo`;
    
    
    console.log(saludar3('elmo'));
    console.log(saludar4());
    
    // en la funcion flecha es preferible usar "({})"
    const getUser = ()=>({
        uid: 'ABC1234',
        username: 'ElGrandMaestro',
    })
    
    console.log(getUser())
    // Tarea
    // 1.- Trasformen a una funcion de flecha
    // 2.- tienen que retorar un objeto implicito
    // 3.- pruebas
    
    function getUsuarioActivo (nombre){
        return {
            uid: 'ABC1234',
            username: nombre,
        }
    };
    const usuarioActivo = getUsuarioActivo('ludovico');
    console.log(usuarioActivo);
    
    
    const funcionFlecha = (variable1) =>({uid: 'ABC1234', username: variable1})
    console.log(funcionFlecha('rodolfo'))
    