//ingresar strings a consola
let = preguntas = [
    '¿Primero dime tu Nombre?',
    '¿Tu Apellido?',
    '¿Cual es tu edad?',
    '¿Cuentame tu lenguaje de programación favorito?',
];
let respuestas = [];

function pregunta(i) {
    process.stdout.write(preguntas[i]);
}
process.stdin.on('data', function(data) {
    respuestas.push(data.toString().trim());

    if (respuestas.length < preguntas.length) {
        pregunta(respuestas.length);


    } else {
        process.exit();
    }



});

pregunta(0);