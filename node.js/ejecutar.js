const exec = require('child_process').exec
let x = 10;
let y = 11;
exec('./script.sh ' + x + ' ' + y, (err, stdout, stderr) => {
    if (err) {
        throw err;
    }

    console.log('Comando listo mano xd');
    console.log(stdout);
})