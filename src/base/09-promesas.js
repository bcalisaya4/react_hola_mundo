//import heroes from './data/heroes.js';
import { getHeroeById } from './bases/08-imp-exp'
/*
const getHeroe = (id) =>{
    return heroes.find((hero) =>hero.id === id);
}
const promesa = new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
        const heroe = getHeroe(2);
        console.log(heroe);
    }, 2000)
});
*/

/*
const promesa = new Promise( (resolve, reject) => {
    
    setTimeout(()=>{
        const variableHeroe = getHeroeById(2);
        //resolve(variableHeroe);
        reject('No se pudo encontrar al heroe');
    }, 2000)
});

promesa.then( (heroe) => {
    console.log('heroe', heroe)
}).catch(err => console.warn(err));
*/

const getHeroByIdAsync = (id) =>{
   return new Promise( (resolve, reject) => {
    if (getHeroeById(id)){ 
        setTimeout(()=>{
            const variableHeroe = getHeroeById(id);
            resolve(variableHeroe);
        }, 2000)
    }else{
        reject("No se puedo encontrar al heroe")
    }
    
    });


}
getHeroByIdAsync(3)
.then((heroe) => console.log('heroe',heroe))
.catch(err => console.warn(err))