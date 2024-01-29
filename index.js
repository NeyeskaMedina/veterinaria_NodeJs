const { registrar, leer } = require('./operaciones')

argumentos = process.argv.slice(2);

// Verificamos si se pasaron argumentos
if (argumentos.length === 0) {
    console.log('Escriba: node index.js <función> <argumentos>');
    //En caso de no haber argumentos detenemos la ejecucion del proceso de NODE
    process.exit(1);
}

const funcionAEjecutar = argumentos[0];
const arg = argumentos.slice(1);

// Ejecutamos la funcion segun la indicada por consola
if (funcionAEjecutar === 'registrar') {
        registrar(...arg);
}else if(funcionAEjecutar === 'leer'){
        leer;
}else{
    console.log('Porfavor ingrese una funcion válida');
}
