//Forma de obtener argumentos de un proceso

function param(p) {
    let index = process.argv.indexOf(p);

    //console.log(index);

    return process.argv[index + 1];

}
let nombre = param('--nombre');
let edad = param('--edad');
console.log(`Hola Bienvenido: ${nombre}, confirmas que tienes ${edad} años de edad`);