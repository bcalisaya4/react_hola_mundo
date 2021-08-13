// Clase Numero 3 JavaScript


const persona={
    nombre: 'Antony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 551231351,
        lat: 41.54121,
        lng: 34.95221,
    }
};
/*
console.log({persona:persona});
console.log('--------------')
console.log(persona);
console.log('--------------')
console.table(persona)
*/

// se utiliza la variable  {...persona} para realizar una 
// copia del objeto porque es necesario cambiar la direccion 
// de espacio de memoria
const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2)