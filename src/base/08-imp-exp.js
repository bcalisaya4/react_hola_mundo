
import heroes,{owners} from '../data/heroes.js';


export const getHeroeById = (id) =>{
    return heroes.find((hero) => {
        if (hero.id === id){
            return true;
        }else {
            return false;
        }
    }

    );
}
console.log(getHeroeById(2));

//funcion find() simplificado
 export const getHeroeById_0 = (id) =>{
    return heroes.find((hero) =>hero.id === id);
}
console.log(getHeroeById_0(2));



const getHeroesByOwner = (owner) => heroes.filter((hero) =>hero.owner === owner);

console.log(getHeroesByOwner('DC'))

console.log(owners)

/*
const inventario = [
    {nombre: 'manzanas', cantidad: 2},
    {nombre: 'bananas', cantidad: 0},
    {nombre: 'cerezas', cantidad: 5}
];

function esCereza(fruta) {
    return fruta.nombre === 'cerezas';
}

console.log(inventario.find(esCereza));*/