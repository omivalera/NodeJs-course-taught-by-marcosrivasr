//obj a heredar

const eventEmitter = require('events').EventEmitter;
const util = require('util');


let Persona = function(nombre) {
    this.nombre = nombre;

}
util.inherits(Persona, eventEmitter);

let persona = new Persona('Omicida');


//console.log(`Hola, que tal te ha ido ${persona.nombre}`);

persona.on('hablar', (mensaje) => {
    console.log(`${persona.nombre}: ${mensaje}`);
});
persona.emit('hablar', 'laksjdlkajds');
/*emitter.on('eventoCustom', (mensaje, estatus) => {

    console.log(`${estatus}: ${mensaje}`);
});

emitter.emit('eventoCustom', 'Listo, todo al momento', 200);*/