//required

const fs = require('fs');
const argv = requerie('yargs').argv;

//const multiplicar = require('./Multiplicar/multiplicar')

const { creararchivo } = require('./Multiplicar/multiplicar')



//creararchivo(base)
//  .then(archivo => console.log('Archivo creado'))
//.catch(err => console.log(`error ${err}`))


let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]
creararchivo(base)
    .then(archivo => console.log('Archivo creado'))
    .catch(err => console.log(`error ${err}`))