const persona = require('./persona');

let Og = new persona('Og');

Og.on('habla', (mensaje) => {
    console.log(`${Og.nombre} - ${mensaje}`);
});

Og.emit('Habla', 'Habla claro el mio');