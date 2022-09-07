const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');


// console.log( process.argv );
// console.log( argv );
// console.log( 'base: yargs', argv.base );
// const [ , , arg3='base=5' ]= process.argv;
// const [ , base='5' ] = arg3.split('=');
// console.log(base);
// const base = 3;

console.clear();
crearArchivo( argv.b, argv.l, argv.t )
    .then(nombreArchivo =>  console.log(nombreArchivo.brightYellow, 'creado con exito'.brightGreen))
    .catch( err => console.log(err.red) );