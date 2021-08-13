
// Clase Numero 7 JavaScript 
//desestructuracion
const personajes = ['goku','vegeta','trunks'];

const [p1] = personajes;
console.log(p1)
const [,p2 ] = personajes;
console.log(p2)
const [,,p3 ] = personajes;
console.log(p3)

const retornaArreglo = () =>{
    return ['ABC',123];
}

//const arr = retornaArreglo(); 
const [letras,numeros]=retornaArreglo();
console.log(letras,numeros);


const otraFuncion = (valor) =>{
    return [
        valor,
        (()=> {console.log('Hello World ')})];
}




const [nombre,setNombre] =otraFuncion('goku');
console.log(nombre);
setNombre();