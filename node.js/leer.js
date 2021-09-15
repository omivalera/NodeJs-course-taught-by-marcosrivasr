//leer ubicaciones y archivos

let fs = require("fs");

//let files = fs.readdirSync('./'); //aqui va la ruta

fs.readdir('./', (error, files) => {
    if (error) {

        throw error;


    }
    console.log(files);

    let archivo = fs.readFileSync('./archivo.txt', 'utf-8');

    console.log('Contenido de hola.txt');
    console.log(archivo);
});