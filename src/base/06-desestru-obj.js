// Clase Numero 6 JavaScript

const persona = {
    nombre: 'Tony',
    edad: '45',
    clave: 'ironman'
};

const { nombre:VariableNombre, edad: edadVariable, clave: claveVariable } = persona;
console.log(VariableNombre);
console.log(edadVariable);
console.log(claveVariable);

const retornaPersona = (usuario) => {
    const { edad,clave,nombre} = usuario;
    console.log(edad,clave,nombre)


}
retornaPersona(persona);


// si se inicializa el atributo en el objeto obedece a la 
// primera instancia
const imprimirAtributo = ({ nombre,edad,clave,rango='capitan'}) =>{
    console.log( nombre ,edad,clave,rango);
}
imprimirAtributo(persona);
console.log('-------------------------------------');
//Objeto dentro de otro objeto
const userContext = ({nombre,edad,clave,rango='capitan'}) =>{
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1020,
            lng: -12.3030
        }
    }
} 
const avenger = userContext (persona);
const {nombreClave,anios,latlng,latlng:{lat,lng}} = avenger; 
// O tabien se puede hacer 
// const {lat, lng} = latlng;
console.log(nombreClave,anios)
console.log(lat, lng)
console.log(latlng)


