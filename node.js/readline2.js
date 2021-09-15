let readline = require('readline');
let persona = {

    nombre: '',
    comentarios: []
};
let util = require('util');
let rl;
rl = readline.createInterface(process.stdin, process.stdout);


rl.question('Hola, ¿Como te podemos llamar? ', (respuesta) => {

    persona.nombre = respuesta;

    rl.setPrompt('Dime un beta loco...  ');
    rl.prompt();

});
rl.on('line', (imput) => {

    if (imput.trim() === 'salir') {
        let mensaje = util.format("Eeeeey %s que paso por fin con %j", persona.nombre, persona.comentarios, "no te hagas el cochino meando");
        console.log(mensaje);
        process.exit();

    }



    persona.comentarios.push(imput.trim());
    rl.setPrompt('Dime un beta loco...  ');
    rl.prompt();




});