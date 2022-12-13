/*Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor*/

const datos= [
    {nombre:"Andrés",    apellido:"Salazar",    edad:36,     altura:1.68,    eresDesarrollador:true}
]

let variable= datos.edad
console.log(variable);


const amigos= [
    {nombre:"Claudia",    apellido:"Amezquita",    edad:34,     altura:1.75,    eresDesarrollador:false},
    {nombre:"Ricardo",    apellido:"Alegría",    edad:35,     altura:1.70,    eresDesarrollador:true}  
]

const lista1 = [...datos,...amigos]
console.log(lista1);

const lista2=lista1.sort((a,b)=>a.edad-b.edad);
console.log(lista2)

const lista3=lista1.sort((a,b)=>a.altura-b.altura);
console.log(lista3)