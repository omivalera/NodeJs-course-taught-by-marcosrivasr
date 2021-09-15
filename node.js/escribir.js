const fs = require('fs');

const archivo = 'pruebameste.txt';

//validar si existe algun archivo

// if (fs.existsSync(archivo)) {
//     console.log('Si existe');
// } else {
//     console.log('No hay nada el mio');
// } 

// fs.access(archivo, fs.constants.F_OK, (err) => {

//     if (err) {
//         console.log('No hay nada vale coño')

//     } else {
//         console.log('Claro q si hay')
//     }});

//Forma sincrona
const contenido = 'Este texto se creara en un archivo de texto'

// fs.writeFileSync(archivo, contenido);

// console.log('Ya pudiste escribir el beta');

//Manera asíncrona

// fs.writeFile(archivo, contenido, (err) => {
//     if (err) throw ('No se pudo escribir en el beta mano');
//     console.log('Bello mi loco');

// });

const textoAdicional = '\nSi escribes verga';

fs.appendFile(archivo, textoAdicional, (err) => {
    if (err) throw ('diaaaablooo');
    console.log('Tu texto ha sido ingresado con exito! Gracias');


});