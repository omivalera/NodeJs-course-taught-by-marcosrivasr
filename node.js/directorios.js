//crear directorios


const fs = require('fs');



//mkdir

// fs.mkdirSync('img');

fs.mkdir('css', function(err) {
    if (err) {
        throw ('Error', +err);

    }
    console.log('Carpeta lista mi hermano');
})

//validar si existe una carpeta

if (fs.existsSync('css')) {
    console.log('Ya hay algo llamado asi :v')
} else {
    fs.mkdir('css', function(err) {
        if (err) { throw (err); }
        console.log('Listo manao ya esta creada')
    });

}