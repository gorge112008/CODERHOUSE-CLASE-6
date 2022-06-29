/*
//Arrays
let b= 34;
const nombres=["Jesus", "Maria", "Jose"];
const numeros=[0, 1, 2 ,3, 4, 5, 6, 7, 8, 9, 10];
const mixto = [true, 1 , "Hola tarola", {}, [12,34,54], b]

console.log(nombres[1]);
console.log(numeros[8]);
console.log(mixto[2]);
console.log(mixto.toString())

let result=numeros[0]+ numeros[10];

console.log(result);

//METODO PARA AGREGAR UN ELEMENTO AL INICIO DE UN ARRAY.
mixto.push(1);

//METODO PARA AGREGAR UN ELEMENTO AL FINAL DE UN ARRAY.
mixto.unshift(5);

//METODO PARA ELIMINAR EL PRIMER ELEMENTO DE UN ARRAY.
mixto.shift();

//METODO PARA ELIMINAR EL ULTIMO ELEMENTO DE UN ARRAY.
mixto.pop();

console.log(mixto);

//UNIR ARRAYS CON METODO CONCAT().
const cubiertos=["tenedor", "chuchillo", "cuchara", "cuchara de te"]

const platos =["plato hondo", "plato playo", "plato de postre"];

const despensa= cubiertos.concat(platos);

console.log(despensa);

//METODO PARA ELIMINAR MAS DE UN ELEMENTO EN CUALQUIER POSICION

const nombre2= ["Rita", "Pedro", "Ana", "Julia", "Juan"];

nombre2.splice(1,2); //Eliminara empezando por el elemento 1, la cantidad de 2 elementos.

const eliminar = (nombre) => {
    let index = nombres.indexOf(nombre);
    if (index != -1){
        nombres.splice(index, 1);
    }
}

eliminar("Maria");

console.log(nombres);
*/
//CREANDO ARRAYS DE OBJETOS
const persona1= {nombre: "Pedro", edad: 18, direccion:"Calle falsa 123"};

const personas=[{nombre:"Julian", edad:12, direccion:"Calle falsa 123"},
{nombre:"Sandra", edad:13, direccion:"Calle encontrada 345"}, persona1];

function Persona(nombre,edad,calle){
    this.nombre=nombre;
    this.edad=edad;
    this.calle=calle;
}
function crearPersonas (nombre,edad,calle){
    const persona= new Persona(nombre,edad,calle)
    return persona;
}

function cargarPesona(persona){
    personas.push(persona)
}

const nahuel =crearPersonas("Nahuel", 14, "Lopez 75645");
cargarPesona (nahuel);

console.log(personas);


//Estructura FOR OF:(Devuelve cada elemento del array en forma de objetos)
for (const persona of personas) {
    //Estructura FOR IN: (Devuelve cada elemento de cada objeto)
    for (const propiedad in persona) {
        console.log(propiedad+ ": "+persona[propiedad]);
    }
}