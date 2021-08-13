

//Clase Numero 2 de JavaScript

const nombre = 'Bryan'
const apellido = 'Calisaya'
const nombreCompleto = nombre + ' '+ apellido;
const nombreCompleto_0 = `${ nombre } ${apellido}`; 
const nombreCompleto_1 = `${ nombre }
 ${apellido}
 ${1+1}
 `; 
console.log(nombreCompleto);
console.log(nombreCompleto_0);
console.log(nombreCompleto_1);

function getSaludo(nombre){
    return 'Hola '+ nombre;
}

function getSaludo_1(nombre){
    return `Hola ${nombre} salutes`
}

console.log(`Este es un texto de Saludo: ${getSaludo(nombre)}`)
console.log('Este es un saludo 1:'+getSaludo_1('Wilbur'))