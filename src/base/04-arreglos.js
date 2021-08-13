// Clase Nuero 4 JavaScript

//Utiliza 'new Array(10)' solo para indicar cantidad
// del arreglo pero no es cantidad fija ya que se puede
//modificar

        //const arreglo = new Array(100);
//Normalmente se crea un arreglo asi =
const arreglo = [1,2,3];
//no es recomendable usar el metodo push()
    //arreglo.push(1)
    const arreglo2 = [...arreglo]
    arreglo2.push(4);

console.table(arreglo);
console.table(arreglo2);

var doubles = arreglo2.map(function(x){
    return x*2;
});
console.table(doubles);
