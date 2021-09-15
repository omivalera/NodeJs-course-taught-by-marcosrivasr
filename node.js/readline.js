let readline = require('readline');

let rl;
rl = readline.createInterface(process.stdin, process.stdout);
rl.question('Hola, ¿Como te podemos llamar? ', (answer) => {
    console.log(`jajaja Tu nombre si que mola.... Mi loco amigo el ${answer}`);
    process.exit();


});